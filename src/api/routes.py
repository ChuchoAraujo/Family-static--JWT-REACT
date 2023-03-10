"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Members
from api.utils import generate_sitemap, APIException
import json
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# ----------- 1) Get all family members ------------------------------------

@api.route('/members', methods=['GET'])
def getMembers():
    callMembers = Members.query.all()
    result = [element.serialize() for element in callMembers]
    response_body = {
        "message": "Hola soy tu familia"
    }

    return jsonify(result), 200

# -------- 2) Retrieve one member -----------------------------------------------

@api.route('/members/<int:members_id>', methods=['GET'])
def get_members_id(members_id):
    callMember = Members.query.get(members_id)
    result = callMember.serialize()
    response_body = {"message": "Todo ok bro"}
    return jsonify(result), 200



# -------- 3) Add (POST) new member -----------------------------------------------
@api.route('/new', methods=['POST'])
def createMember():
    name = request.json.get("name", None)
    last_name = request.json.get("last_name", None)
    age = request.json.get("age", None)
    
    member= Members.query.filter_by(name=name, last_name=last_name, age=age).first()
    if member:
        return jsonify({"msg": "Member invalid!"}), 401

    try:
        newMember = Members(
        name=name,
        last_name=last_name,
        age=age
    )
        db.session.add(newMember)
        db.session.commit()

    except Exception as e:
        return jsonify({"error": str(e)}), 402
    

    response_body = {"msg": "Member create"}
    return jsonify(response_body), 201

# --------     4) DELETE one member -----------------------------------------------

### DELETE PLANET
@api.route('/member/<int:member_id>', methods= ['DELETE'])
def deleteMember(member_id):
    byeMember = Members.query.get(member_id)
    db.session.delete(byeMember)
    db.session.commit()

    response_body = {"msg": "borrado"}
    return jsonify(byeMember.serialize())

#-----------------------------Registro y acceso user------------------------------------#
@api.route('/users', methods=['GET'])
def get_users():
    callUsers = User.query.all()
    result= [element.serialize() for element in callUsers]
    response_body = {"Add perfect"}
    return jsonify(result), 200


@api.route('/registro', methods=['POST'])
def createUser():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    is_active = request.json.get("is_active", None)
    
    user= User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "User or password, invalid!"}), 401

    try:
        newUser = User(
        email=email,
        password=password,
        is_active= is_active
    )
        db.session.add(newUser)
        db.session.commit()

    except Exception as e:
        return jsonify({"error": str(e)}), 402
    

    response_body = {"msg": "User create"}
    return jsonify(response_body), 201



@api.route('/acceso', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    

    user = User.query.filter_by(email=email, password=password).first()

    if user == None:
        return jsonify({"msg": "User or password, Not exist!"}), 401
    
    access_token = create_access_token(identity=user.email)

    response_body = {
        "msg": "Token create",
        "token": access_token
    }

    return jsonify(response_body), 200 

@api.route("/private", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    response_body= {
        "msg": "Permiso concedido",
        "correcto": True,
        "Usuario": get_jwt_identity()
    }
    return jsonify(response_body), 200
    
 




