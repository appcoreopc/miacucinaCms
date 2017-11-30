import braintree
from flask import Blueprint

main = Blueprint('main', __name__)
@main.route('/')
def index():
    return "tour"
@main.route('/<string:country>/<string:city>')
def getByLocation(country, city):    
    return "get location by" + country +  " " + city


class SimpleApp():
    @staticmethod
    def getClientToken():
        return "hello token"
            #return braintree.ClientToken.generate()