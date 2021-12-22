from tkinter import *
from tkmacosx import Button
# import pandas
import random

BACKGROUND_COLOR = "#B1" \
                   "ddc6"

# ---------- Load sight words as list ---------- #
with open("data/sight_words.txt", "r") as data:
    sight_words =data.read().split(",")

# ---------- Functions ---------- #
def next_card():
    current_card = random.choice(sight_words)
    canvas.itemconfig(card_title, text="Sight Words", fill="black")
    canvas.itemconfig(card_word, text=current_card, fill="black")

window = Tk()
window.title("Sight Words")
window.config(padx=50, pady=50, bg=BACKGROUND_COLOR)

canvas = Canvas(width=800, height=526, bg=BACKGROUND_COLOR, highlightthickness=0)
card_front_img = PhotoImage(file="images/card_front.png")
card_image = canvas.create_image((400, 263), image=card_front_img)
card_title = canvas.create_text(400, 150, text="Title", font=("Ariel", 40, "italic"))
card_word = canvas.create_text(400, 263, text="Word", font=("Ariel", 60, "bold"))
canvas.grid(row=0, column=0, columnspan=2)

unknown_button_img = PhotoImage(file="images/wrong.png")
unknown_button = Button(
    image=unknown_button_img,
    highlightthickness=0,
    bg=BACKGROUND_COLOR,
    borderless=1,
    command=next_card
)
unknown_button.grid(row=1, column=0)


check_button_img = PhotoImage(file="images/right.png")
check_button = Button(
    image=check_button_img,
    highlightthickness=0,
    bg=BACKGROUND_COLOR,
    borderless=1,
    command=next_card
)
check_button.grid(row=1, column=1)
next_card()


window.mainloop()
