"""
Helps budget housing after expenses
"""

import time
import sys
import pyinputplus as pyip

print('Welcome to the cashflow tool\n\nWhat is your name?')
name = input()
print('')
print(F'Hi {name}, what would you like to do?\n')
time.sleep(1)

SELECTION = ''
expenses = {}
expenses_total = 0
while SELECTION != '5':
    print('Select an option by typing the number:')
    print('1 - Update income and housing\n'
          '2 - Enter monthly expense\n'
          '3 - See monthly expense rollup\n'
          '4 - See cashflow statement\n5 - Exit')
    SELECTION = pyip.inputNum(greaterThan=0, lessThan=6)
    if SELECTION == 2:
        while True:
            #print('Enter an expense name -OR- enter to quit')
            name = pyip.inputStr(prompt='Enter an expense name -OR- enter to quit: ', blank=True, strip=True)
            name = name.lower()
            if name == '':
                break
            #print('Enter a monthly amount for ' + name)
            amount = pyip.inputNum(prompt='Enter a monthly amount for %s: ' % (name))
            expenses[name] = amount
    elif SELECTION ==3:
        for value in expenses.values():
            expenses_total += int(value)
        print(F'Monthly Expenses: {str(expenses_total)}')
        for key, value in expenses.items():
            print(F'{str(key.capitalize())} : {value}')
    elif SELECTION == 5:
        print('Exiting')
        sys.exit()
