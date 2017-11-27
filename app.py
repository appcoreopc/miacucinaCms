import braintree
from flask import request, Flask

app = Flask(__name__)
#app.run(host='0.0.0.0', port=1001)

braintree.Configuration.configure(braintree.Environment.Sandbox,
merchant_id="use_your_merchant_id",
public_key="use_your_public_key",
private_key="use_your_private_key")

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/client_token', methods=["GET"])
def client_token():
    return braintree.ClientToken.generate();

@app.route("/checkout", methods=["POST"])
def checkout():
    client_nounce = request.form["payment_method_nonce"]
