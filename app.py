import braintree
from flask import request, Flask, url_for
from payment import paymentCore
from tour.controllers import main
from users.controllers import user
import datetime
from flask_sqlalchemy import SQLAlchemy
import os



from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:////tmp/test.db', convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))


Base = declarative_base()
Base.query = db_session.query_property()
from models import models


def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    from models import models
    Base.metadata.create_all(bind=engine)



app = Flask(__name__)

app.register_blueprint(main, url_prefix='/tour')
app.register_blueprint(user, url_prefix='/user')

braintree.Configuration.configure(braintree.Environment.Sandbox,
merchant_id="use_your_merchant_id",
public_key="use_your_public_key",
private_key="use_your_private_key")

@app.route('/')
@app.route('/hello')
def hello_world():
    a = paymentCore.BrainTreePayment()
    #b = SimpleApp()
    return '  Hello, World docker2!:  ' + str(datetime.datetime.now())

@app.route('/client_token', methods=["GET"])
def client_token():
    return braintree.ClientToken.generate();

@app.route("/checkout", methods=["POST"])
def checkout():
    client_nounce = request.form["payment_method_nonce"]
       
@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

init_db()
