import braintree
from flask import Blueprint, jsonify, Flask
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from models.models import User, Tour, Location, City, Country
from app import db
from utilserializer import serializeItem, HttpStatusCode
from pprint import pprint

main = Blueprint('tour', __name__)

@main.route('/')
def index():
    return "tour"

@main.route('/<int:tourid>', methods=["GET"])
def getLocation(tourid):
    user = User("test4", "test4", "secret")        
    try:
       tlist = Tour.query.filter_by(id=1).first()
       v = serializeItem(tlist)  
       if tlist is None:
          return jsonify("{}"), HttpStatusCode.Http400
       else:
          return jsonify(v), HttpStatusCode.HttpOk          
    except Exception as e: 
        return jsonify(str(e)), HttpStatusCode.Http400
    

@main.route('/<string:country>/<string:city>', methods=["GET"])
def getCountryLocation(country, city):

    pprint(country)
    if country:
        result = Country.query.filter(Country.name.like(country)).first()

        pprint(result)
        print("executing")
        if result is not None: 
            return jsonify(serializeItem(result)), 200

    return jsonify('{}'), 200

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

    c1 =  Country("New Zealand", "New Zealand") 

    ct = City("Auckland", "Auckland")  
    ct2 = City("Wellington", "Wellington")
    ct3 = City("Nappier", "Nappier")

    c1.cities.append(ct)
    c1.cities.append(ct2)
    c1.cities.append(ct3)

    db.session.add(c1)
    db.session.commit()

    return "testpopulatecomplete", HttpStatusCode.HttpOk

@main.route('/testget', methods=["GET"])
def testget():
    tlist = Tour.query.filter_by(id=1).first()
    v = serializeItem(tlist, True) 
    return jsonify(v);
