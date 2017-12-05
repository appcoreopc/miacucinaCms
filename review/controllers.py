import braintree
from flask import Blueprint

main = Blueprint('review', __name__)

@main.route('/<int:tourid>')
def getTourReview(tourId):
    
    return "tour" + str(tourId)