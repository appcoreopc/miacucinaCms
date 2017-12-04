from sqlalchemy import Column, Integer, String, Numeric, DateTime, Float
from flask import Flask
from sqlalchemy.ext.declarative import declarative_base
from flask_sqlalchemy import SQLAlchemy

Base = declarative_base()

app = Flask(__name__)
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True} 
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=False)
    email = Column(String(120), unique=False)
    password = Column(String(50), unique=False)
    createDate = Column(DateTime)
    modifiedDate = Column(DateTime)

    def __init__(self, name=None, email=None, password= None):
        self.name = name
        self.email = email
        self.password = password

    def __repr__(self):
        return '<User %r>' % (self.name)

class Tour(db.Model):
    __tablename__ = 'tours'
    __table_args__ = {'extend_existing': True} 

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=False)
    description = Column(String(120), unique=False)
    countryId = Column(Integer, unique=False)
    cityId = Column(Integer, unique=False)
    price = Column(Numeric, unique=False)
    paymentGateWay = Column(String(120), unique=False)
    modifiedDate = Column(DateTime)
    itinerary = db.relationship("Location", backref="Tour", lazy=True)
    
    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<Tour %r>' % (self.name)

class Location(db.Model):
    __tablename__ = 'locations'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=True)
    description = Column(String(120))
    locationLong = Column(Float)
    locationLat = Column(Float)
    imageUrl = Column(String(500))
    modifiedDate = Column(DateTime)
    tourId = db.Column(db.Integer, db.ForeignKey('tour.id'),
        nullable=False)
    
    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<TourLocation %r>' % (self.name)

class TourLocation(db.Model):
    __tablename__ = 'tourlocations'
    id = Column(Integer, primary_key=True, autoincrement=True)
    tourId = Column(Integer, unique=True)
    locationId = Column(Integer, unique=True)
    description = Column(String(120), unique=True)
    modifiedDate = Column(DateTime)

    def __init__(self, tourId=None, locationId=None, description=None):
        self.tourId = tourId
        self.locationId = locationId
        self.description =  description

    def __repr__(self):
        return '<TourLocation %r>' % (self.name)

class Country(db.Model):
    __tablename__ = 'countries'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)
    modifiedDate = Column(DateTime)

    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<Country %r>' % (self.name)

class City(db.Model):
    __tablename__ = 'cities'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)

    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<City %r>' % (self.name)

class PaymentHistory(db.Model):
    __tablename__ = 'paymenthistory'
    id = Column(Integer, primary_key=True, autoincrement=True)
    userId = Column(Integer, unique=True)
    paymentGatewayId = Column(Integer)
    tourId = Column(Integer)
    amount = Column(Numeric)
    paymentDate = Column(DateTime)
    modifiedDate = Column(DateTime)
    
    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<Contact %r>' % (self.name)

class PaymentGateWay(db.Model):
    __tablename__ = 'paymentgateways'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)   
    modifiedDate = Column(DateTime)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<Contact %r>' % (self.name)