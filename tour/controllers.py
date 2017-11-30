import braintree
from flask import Blueprint, jsonify

main = Blueprint('tour', __name__)
@main.route('/')
def index():
    return "tour"

@main.route('/<int:tourid>', methods=["GET"])
def getLocation(tourid):    
    return "get location by" + str(tourid)

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