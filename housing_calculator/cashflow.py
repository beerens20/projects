"""
Helps budget housing after expenses
"""

import time
import sys

print('Checking file integrity...', end='')
time.sleep(2)
print('COMPLETE')
time.sleep(1)


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
    SELECTION = input()
    if SELECTION == '2':
        while True:
            print('Enter an expense name -OR- enter to quit')
            name = input()
            name = name.lower()
            if name == '':
                break
            print('Enter a monthly amount for ' + name)
            amount = input()
            expenses[name] = amount
    elif SELECTION =='3':
        for value in expenses.values():
            expenses_total += int(value)
        print(F'Monthly Expenses: {str(expenses_total)}')
        for key, value in expenses.items():
            print(F'{str(key.capitalize())} : {value}')
    elif SELECTION == '5':
        print('Exiting')
        sys.exit()
