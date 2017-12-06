from flask import Blueprint

payment = Blueprint('payment', __name__)

@payment.route('/')
def index():
    return "payment"

@payment.route('/<string:userId>', methods=["GET"])
def authenticate(userId):
    return "payment"
