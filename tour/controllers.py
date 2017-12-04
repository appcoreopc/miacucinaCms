import braintree
from flask import Blueprint, jsonify, Flask

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from models.models import User, Tour

from app import db

main = Blueprint('tour', __name__)

@main.route('/')
def index():
    return "tour"

@main.route('/<int:tourid>', methods=["GET"])
def getLocation(tourid):  
    user = User("test4", "test4", "secret") 
    r = User.query.filter_by(id=2).first()
    return "test"
    #return jsonify(user)
    #return "get location by" + str(tourid)

@main.route('/<string:country>/<string:city>', methods=["GET"])
def getCountryLocation(country, city):    
    return "get location by" + country +  " " + city

@main.route('/<int:tourid>', methods=["GET"])
def getTour(tourid):    
    return "get location by" + str(tourid)

@main.route('/<int:tourid>', methods=["POST"])
def saveTour(tourid):        
    return "get location by" + str(tourid)

@main.route('/<int:tourid>', methods=["DELETE"])
def deleteTour(tourid):    
    return "get location by" + str(tourid)

@main.route('/test', methods=["GET"])
def test(): 
    db.create_all()
    user = User("test4", "test4", "secret")    
    db.session.add(user)
    db.session.commit()
    return "get location by" + str("test")
