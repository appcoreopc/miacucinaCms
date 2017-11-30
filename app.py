import braintree
from flask import request, Flask, url_for
from payment import paymentCore
from tour.controllers import main
from users.controllers import user
import datetime
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

app.register_blueprint(main, url_prefix='/tour')
app.register_blueprint(user, url_prefix='/user')


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)


braintree.Configuration.configure(braintree.Environment.Sandbox,
merchant_id="use_your_merchant_id",
public_key="use_your_public_key",
private_key="use_your_private_key")

@app.route('/')
@app.route('/hello')
def hello_world():
    a = paymentCore.BrainTreePayment()
    #b = SimpleApp()
    return 'Hello, World docker2!:    ' + str(datetime.datetime.now())

@app.route('/client_token', methods=["GET"])
def client_token():
    return braintree.ClientToken.generate();

@app.route("/checkout", methods=["POST"])
def checkout():
    client_nounce = request.form["payment_method_nonce"]
       

