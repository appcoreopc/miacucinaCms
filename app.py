import braintree
from flask import request, Flask, url_for
from payment import paymentCore
from tour.controllers import main
import datetime

app = Flask(__name__)

app.register_blueprint(main, url_prefix='/tour')

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
       

