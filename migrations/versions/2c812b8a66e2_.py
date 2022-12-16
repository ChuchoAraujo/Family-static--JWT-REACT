"""empty message

Revision ID: 2c812b8a66e2
Revises: 50142c1176f5
Create Date: 2022-12-15 17:45:32.210168

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2c812b8a66e2'
down_revision = '50142c1176f5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)

    # ### end Alembic commands ###