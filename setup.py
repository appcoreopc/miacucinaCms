from setuptools import setup

setup(
    name='miacucinacms',
    packages=['payment', 'tour'],
    include_package_data=True,
    install_requires=[
        'flask'
    ],
)