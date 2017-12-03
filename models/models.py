from sqlalchemy import Column, Integer, String, Numeric, DateTime
from app import Base

class User(Base):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True} 
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=False)
    email = Column(String(120), unique=True)
    password = Column(String(50), unique=False)

    def __init__(self, name=None, email=None, password= None):
        self.name = name
        self.email = email
        self.password = password

    def __repr__(self):
        return '<User %r>' % (self.name)

class Tour(Base):
    __tablename__ = 'tours'
    __table_args__ = {'extend_existing': True} 

    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=False)
    description = Column(String(120), unique=False)
    countryId = Column(Integer, unique=False)
    cityId = Column(Integer, unique=False)
    price = Column(Numeric, unique=False)
    paymentGateWay = Column(String(120), unique=False)
    
    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<Tour %r>' % (self.name)

class Location(Base):
    __tablename__ = 'locations'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)

    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<TourLocation %r>' % (self.name)

class TourLocation(Base):
    __tablename__ = 'tourlocations'
    id = Column(Integer, primary_key=True)
    tourId = Column(Integer, unique=True)
    locationId = Column(Integer, unique=True)
    description = Column(String(120), unique=True)

    def __init__(self, tourId=None, locationId=None, description=None):
        self.tourId = tourId
        self.locationId = locationId
        self.description =  description

    def __repr__(self):
        return '<TourLocation %r>' % (self.name)

class Country(Base):
    __tablename__ = 'countries'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)

    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<Country %r>' % (self.name)

class City(Base):
    __tablename__ = 'cities'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)

    def __init__(self, name=None, description=None):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<City %r>' % (self.name)

class PaymentGateWay(Base):
    __tablename__ = 'paymentgateways'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)
    
    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<Contact %r>' % (self.name)

class Contact(Base):
    __tablename__ = 'contact'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<Contact %r>' % (self.name)

class HowItWork(Base):
    __tablename__ = 'howitwork'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<HowItWork %r>' % (self.name)