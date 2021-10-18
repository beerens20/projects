"""
Functions that support the cashflow.py program
"""

# calculate monthly expenses
def monthly_expenses():
    """add up all of the expenses here"""
    print('I calculate monthly expenses')

# calculate net pay after expenses
def netpay_after_expenses():
    """indented line"""
    print('I calculate net pay after expenses are paid')

# calculate max amount to spend on housing
def housing_allowance():
    """take net pay * 40%"""
    print('I calculate how much you can spend on housing based on your net income.')

def expense_entry():
    """allows user to enter a monthly expense"""
    expenses = {}
    while True:
        print('Enter an expense name -OR- enter to quit')
        name = input()
        if name == '':
            break
        print('Enter a monthly amount for ' + name)
        amount = input()
        expenses[name] = amount
    return expenses
    #print('The expenses entered are:')
    #for name in expenses:
        #print(' ' + name)
