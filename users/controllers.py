from flask import Blueprint, jsonify, request, abort
from utilserializer import serializeItem, HttpStatusCode, handleJsonRequest, parseJsonRequest
from app import db
from models.models import User, Tour, Location, City, Country

user = Blueprint('user', __name__)

@user.route('/')
def index():
    return jsonify('user'), 200

@user.route('/<string:name>/<string:passtext>', methods=["GET"])
def authenticate(name, passtext): 
    user = User.query.filter_by(name=name, password=passtext).first()
    if not user is None: 
        return jsonify(serializeItem(user))
    return jsonify('{}')

@user.route('/create', methods=["POST"])
def createUser():    
    s, user = parseJsonRequest('models.models', 'User', request.json)
    if s is True:  
      db.session.add(user)
      db.session.commit()  
    return jsonify('{}')

@user.route('/<int:userId>', methods=["DELETE"])
def deleteTour(userId):  

    user = User.query.filter_by(id=userId).first()
    db.session.delete(user)
    db.session.commit()
    return jsonify('{}'), 200