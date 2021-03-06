import braintree
from flask import request, Flask, url_for
from payment import paymentCore

import datetime
import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

braintree.Configuration.configure(braintree.Environment.Sandbox,
merchant_id="use_your_merchant_id",
public_key="use_your_public_key",
private_key="use_your_private_key")

def init_db():
    print("create all relevant data")
    db.create_all()  

@app.route('/')
@app.route('/hello')
def hello_world():
    a = paymentCore.BrainTreePayment()   
    return '  Hello, World docker2!:  ' + str(datetime.datetime.now())

@app.route('/client_token', methods=["GET"])
def client_token():
    return braintree.ClientToken.generate();

@app.route("/checkout", methods=["GET"])
def checkout():
    user = User("test1", "test2", "secret")    
    db.session.add(user)
    db.session.commit()
    client_nounce = request.form["payment_method_nonce"]
       
@app.teardown_appcontext
def shutdown_session(exception=None):
    db.session.remove()

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

init_db()

from models import models   
from models.models import User

from tour.controllers import main
from users.controllers import user
from payment.controllers import payment
from country.controllers import country
from city.controllers import city

app.register_blueprint(main, url_prefix='/tour')
app.register_blueprint(user, url_prefix='/user')
app.register_blueprint(payment, url_prefix='/payment')
app.register_blueprint(city, url_prefix='/city')
app.register_blueprint(country, url_prefix='/country')