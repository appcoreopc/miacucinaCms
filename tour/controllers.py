import braintree
from flask import Blueprint, jsonify, Flask, request, abort
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from models.models import User, Tour, Location, City, Country
from app import db
from utilserializer import serializeItem, HttpStatusCode, handleJsonRequest, createInstance, parseJsonRequest
from pprint import pprint

from collections import namedtuple
TourObject = namedtuple('TourObject', 'name description')

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
    if country:
        result = Country.query.filter(Country.name.like(country)).first()
        if result is not None: 
            return jsonify(serializeItem(result)), 200

    return jsonify('{}'), 200


@main.route('/create', methods=["POST"])
def saveTour():     
    s, i = parseJsonRequest('models.models', 'Tour', request.json)
    if s is True:     
      print(i.name)
      
      db.session.add(i)
      db.session.commit()   

    return "get location by"

@main.route('/<int:tourid>', methods=["DELETE"])
def deleteTour(tourid):    

    tour = Tour.query.filter_by(id=tourid).first()
    db.session.delete(tour)
    db.session.commit()
    
    return jsonify('{}'), 200

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
