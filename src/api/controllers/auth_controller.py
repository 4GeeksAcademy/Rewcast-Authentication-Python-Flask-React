from flask import request, jsonify
from api.models import User, db
from flask_jwt_extended import create_access_token

def login():
    user_request = request.json
    email = user.request.get('email')
    password = user.request.get('password')

    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        # el usuario no se encontró en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401
    
    # crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.serialize())
    return jsonify({ "token": access_token, "user": user.serialize() })