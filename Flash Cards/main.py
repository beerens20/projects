from tkinter import *
# from tkmacosx import Button
# import pandas
# import random

BACKGROUND_COLOR = "#FFB6C1"

window = Tk()
window.title("Sight Words")
window.config(padx=50, pady=50, bg=BACKGROUND_COLOR)

canvas = Canvas(width=800, height=526, bg=BACKGROUND_COLOR, highlightthickness=0)
card_front_img = PhotoImage(file="images/card_front.png")
card_image = canvas.create_image((400, 263), image=card_front_img)
card_title = canvas.create_text(400, 150, text="Word", font=("Ariel", 40, "italic"))
card_word = canvas.create_text(400, 263, text="Word", font=("Ariel", 60, "bold"))
canvas.grid(row=0, column=0, columnspan=2)


window.mainloop()
