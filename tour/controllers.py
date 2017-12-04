import braintree
from flask import Blueprint, jsonify, Flask

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from models.models import User, Tour, Location
from sqlalchemy.ext.serializer import loads, dumps

from app import db

main = Blueprint('tour', __name__)

@main.route('/')
def index():
    return "tour"

@main.route('/<int:tourid>', methods=["GET"])
def getLocation(tourid):  
    user = User("test4", "test4", "secret")
    try:
       r = User.query.filter_by(id=tourid).first()
       print(r)        
       if r is None:
          return jsonify("{}"), 400
       else:
          return jsonify(r.serialize()), 200          
    except Exception as e: 
        return jsonify(str(e)), 400 
    

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

@main.route('/testpopulate', methods=["GET"])
def testpopulate(): 
    db.create_all()
    user = User("test4", "test4", "secret")    
    db.session.add(user)

    l1 = Location("AKL", "Loc1")
    l2 = Location("AKL", "Loc2")
    l3 = Location("AKL", "Loc3")
    l4 = Location("AKL", "Loc4")

    t = Tour("Auckland", "Auckland Food Tour")

    t.itenaries.append(l1)
    t.itenaries.append(l2)
    # t.itenaries.append(13)
    # t.itenaries.append(14)

    db.session.add(l1)
    db.session.add(l2)
    db.session.add(l3)
    db.session.add(l4)
    
    db.session.add(t)
    
    db.session.commit()
    return "get location by" + str("test")

@main.route('/testget', methods=["GET"])
def testget():
    tlist = Tour.query.filter_by(id=1).first()
    return jsonify(tlist.serialize());
