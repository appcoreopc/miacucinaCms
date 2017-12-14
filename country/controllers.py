from flask import Blueprint, jsonify, request, abort
from utilserializer import serializeItem, serializeList, HttpStatusCode, handleJsonRequest, parseJsonRequest
from app import db
from models.models import User, Tour, Location, City, Country

country = Blueprint('country', __name__)

@country.route('/')
def index():
    result = Country.query.limit(10).all();
    print(result)
    if not result is None:
      return jsonify(serializeList(result, 'countries')), 200
    return jsonify('{none}'), 200

@country.route('/<string:name>', methods=["GET"])
def getCityName(name):
    result = Country.query.filter_by(id=name).first()
    if not result is None:
        return jsonify(serializeItem(result)), 200
    return jsonify('{}}'), 200

@country.route('/create', methods=["POST"])
def createUser():    
    s, obj = parseJsonRequest('models.models', 'Country', request.json)
    if s is True:  
      db.session.add(obj)
      db.session.commit()
      return jsonify('{ok}'), 201
    return jsonify('{}'), 200

@country.route('/<int:countryId>', methods=["DELETE"])
def deleteTour(cityId):  
    obj = Country.query.filter_by(id=cityId).first()
    if not obj is None:
     db.session.delete(obj)
     db.session.commit()
     return jsonify('{}'), 201

    return jsonify('{}'), 202