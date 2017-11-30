from flask import Blueprint

user = Blueprint('user', __name__)

@user.route('/')
def index():
    return "users"

@user.route('/create', methods=["POST"])
def createUser():
    return "users"

@user.route('/authenticate', methods=["POST"])
def authenticate():
    return "users"
