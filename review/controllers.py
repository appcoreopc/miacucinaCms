import braintree
from flask import Blueprint

review = Blueprint('review', __name__)

@review.route('/<int:tourid>')
def getTourReview(tourId):    
    return "review" + str(tourId)