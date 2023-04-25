from datetime import datetime

def blogDate():
    now = datetime.now().strftime("%d %B, %Y")
    return now

def commentDate():
    now = datetime.now().strftime("%B %d, %Y at %H:%M %p")
    return now