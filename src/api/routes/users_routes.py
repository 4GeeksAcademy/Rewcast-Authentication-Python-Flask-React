from flask import request, Blueprint
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from api.controllers.users_controller import create_user, get_users, get_user_by_id, delete_user_by_id, update_user_by_id

users = Blueprint('users', __name__)

@users.route("/", methods=["GET"])
def users_general():
    return get_users()

@users.route("/<int:id>", methods=["GET, DELETE"])
def users_detail(id):
    if request.method == "GET":
        return get_user_by_id(id)
    if request.method == "DELETE":
        return delete_user_by_id(id)
    if request.method == "PATCH":
        return update_user_by_id
