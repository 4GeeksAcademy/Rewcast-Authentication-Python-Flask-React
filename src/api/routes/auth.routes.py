from flask import request, Blueprint
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from api.controllers.users_controller import create_user
from api.controllers.auth_controller import login

auth = Blueprint('users', __name__)

@auth.route("/signup", methods=["POST"])
def signup():
    return create_user()

@auth.route("/login>", methods=["POST"])
def login_route():
    return login()