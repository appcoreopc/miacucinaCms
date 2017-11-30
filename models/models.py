from sqlalchemy import Column, Integer, String, DateTime
from app import Base

class User(Base):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True} 
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=False)
    email = Column(String(120), unique=True)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<User %r>' % (self.name)

class Tour(Base):
    __tablename__ = 'tour'
    __table_args__ = {'extend_existing': True} 
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=False)
    description = Column(String(120), unique=False)
    countryId = Column(Integer, unique=False)
    cityId = Column(Integer, unique=False)

    def __init__(self, name=None, email=None):
        self.name = name
        self.description = email

    def __repr__(self):
        return '<Tour %r>' % (self.name)

class TourLocation(Base):
    __tablename__ = 'tourlocation'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    email = Column(String(120), unique=True)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<TourLocation %r>' % (self.name)

class Country(Base):
    __tablename__ = 'country'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    email = Column(String(120), unique=True)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<Country %r>' % (self.name)

class City(Base):
    __tablename__ = 'city'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    description = Column(String(120), unique=True)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<City %r>' % (self.name)

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