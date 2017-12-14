from flask import Blueprint, jsonify, request, abort
from utilserializer import serializeItem, HttpStatusCode, handleJsonRequest, parseJsonRequest
from app import db
from models.models import User, Tour, Location, City, Country

city = Blueprint('city', __name__)

@city.route('/')
def index():
    result = City.query.limit(10).all();
    if not result is None:
      return jsonify(serializeItem(result)), 200
    return jsonify('{}'), 200

@city.route('/<string:name>', methods=["GET"])
def getCityName(name):
    result = City.query.filter_by(id=name).first()
    if not result is None:
        return jsonify(serializeItem(result)), 200
    return jsonify('{}}'), 200

@city.route('/create', methods=["POST"])
def createUser():    
    s, city = parseJsonRequest('models.models', 'City', request.json)
    if s is True:  
      db.session.add(city)
      db.session.commit()
      return jsonify('{ok}'), 201
    return jsonify('{}'), 200

@city.route('/<int:cityId>', methods=["DELETE"])
def deleteTour(cityId):  
    obj = City.query.filter_by(id=cityId).first()
    if not obj is None:
     db.session.delete(obj)
     db.session.commit()
     return jsonify('{}'), 201

    return jsonify('{}'), 202