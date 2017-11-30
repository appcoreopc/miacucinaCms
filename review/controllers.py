import braintree
from flask import Blueprint

main = Blueprint('review', __name__)
@main.route('/')
def index():
    return "tour"

class SimpleApp():
    @staticmethod
    def getClientToken():
        return "hello token"
            #return braintree.ClientToken.generate()