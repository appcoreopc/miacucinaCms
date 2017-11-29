import braintree

class IPayment: 
    def getClientToken(): raise NotImplementedError

class BrainTreePayment(IPayment):
    @staticmethod
    def getClientToken():
        return "hello token"
            #return braintree.ClientToken.generate()