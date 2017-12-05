from sqlalchemy import Column, Integer, String, Numeric, DateTime, Float
from flask import Flask
from sqlalchemy.ext.declarative import declarative_base
from flask_sqlalchemy import SQLAlchemy
import json
from app import db

class User(db.Model):
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=False)
    email = Column(String(120), unique=False)
    password = Column(String(50), unique=False)
    createDate = Column(DateTime)
    modifiedDate = Column(DateTime)
    payments = db.relationship('PaymentHistory', backref='user', lazy=True)

    def __init__(self, name=None, email=None, password= None):
        self.name = name
        self.email = email
        self.password = password

    def __repr__(self):
        return '<User %r>' % (self.name)

    def serialize(self):
        print(dir(self))
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
            
class Location(db.Model):
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50))
    description = Column(String(120))
    locationLong = Column(Float)
    locationLat = Column(Float)
    imageUrl = Column(String(500))
    modifiedDate = Column(DateTime)
    tourId = db.Column(db.Integer, db.ForeignKey('tour.id'))
    
    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<TourLocation %r>' % (self.name)

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Tour(db.Model):
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=False)
    description = Column(String(120), unique=False)
    countryId = Column(Integer, unique=False)
    cityId = Column(Integer, unique=False)
    price = Column(Numeric, unique=False)
    paymentGateWay = Column(String(120), unique=False)
    modifiedDate = Column(DateTime)
    #review = Column(String(500))
    itenaries = db.relationship('Location', backref='tour', lazy=True)

    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<Tour %r>' % (self.name)
    
    def serialize(self):   
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Country(db.Model):
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)
    modifiedDate = Column(DateTime)
    cities = db.relationship('City', backref='country', lazy=True)

    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<Country %r>' % (self.name)

    def serialize(self):
           return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class City(db.Model):
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)
    countryId = db.Column(db.Integer, db.ForeignKey('country.id'))

    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<City %r>' % (self.name)

    def serialize(self):        
         return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class PaymentHistory(db.Model): 
    id = Column(Integer, primary_key=True, autoincrement=True)
    paymentGatewayId = Column(Integer)
    tourId = Column(Integer)
    amount = Column(Numeric)
    paymentDate = Column(DateTime)
    modifiedDate = Column(DateTime)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<Contact %r>' % (self.name)

    def serialize(self):
           return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class PaymentGateWay(db.Model):
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)   
    modifiedDate = Column(DateTime)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<Contact %r>' % (self.name)

    def serialize(self):
           return {c.name: getattr(self, c.name) for c in self.__table__.columns}

