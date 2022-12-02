"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Members
from api.utils import generate_sitemap, APIException
import json

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

@api.route('/member', methods= ['POST'])
def createMember():
    data = request.data
    data = json.loads(data)
    member = Members(
        name = data["name"],
        last_name = data["last_name"],
        age = data["age"]
        )

    db.session.add(member)
    db.session.commit()

    response_body ={"msg": "add ok"}
    return jsonify(member.serialize())


    # --------     4) DELETE one member -----------------------------------------------

### DELETE PLANET
@api.route('/member/<int:member_id>', methods= ['DELETE'])
def deleteMember(member_id):
    byeMember = Members.query.get(member_id)
    db.session.delete(byeMember)
    db.session.commit()

    response_body = {"msg": "borrado"}
    return jsonify(byeMember.serialize())