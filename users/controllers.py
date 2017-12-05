from flask import Blueprint

user = Blueprint('user', __name__)

@user.route('/')
def index():
    return "user"

@user.route('/<string:userId>', methods=["GET"])
def authenticate(userId):
    return "users"
