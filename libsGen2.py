from time import sleep
from gingerit.gingerit import GingerIt
import random
import spacy
import re

print("Enter paragraph:")
text = input()
text = text.lstrip()
#requires regex to split punctuation from words
madElements = re.findall( r'\w+|[^\s\w]+', text)

#identify lexical categories AKA parts of speech
nlp = spacy.load("en_core_web_sm")
doc = nlp(text)

adjectives = open("Output/adjectives.txt", "r").read().split()
adpositions = open("Output/adpositions.txt", "r").read().split()
adverbs = open("Output/adverbs.txt", "r").read().split()
auxiliarys = open("Output/auxiliarys.txt", "r").read().split()
coordinating_conjunctions = open("Output/coordinating_conjunctions.txt", "r").read().split()
determiners = open("Output/determiners.txt", "r").read().split()
interjections = open("Output/interjections.txt", "r").read().split()
nouns = open("Output/nouns.txt", "r").read().split()
numerals = open("Output/numerals.txt", "r").read().split() #
particles = open("Output/particles.txt", "r").read().split()
pronouns = open("Output/pronouns.txt", "r").read().split()
proper_nouns = open("Output/proper_nouns.txt", "r").read().split()
punctuations = open("Output/punctuations.txt", "r").read().split() #
subordinating_conjunctions = open("Output/subordinating_conjunctions.txt", "r").read().split()
symbols = open("Output/symbols.txt", "r").read().split() #
verbs = open("Output/verbs.txt", "r").read().split()
others = open("Output/others.txt", "r").read().split()

i = 0
while i < len(doc):

    #ask for input
    if (doc[i]).pos_ == "ADJ":
        madElements[i] = random.choice(adjectives) #index exception error because len(doc) doesn't equal len(madElements) due to punctuation and whitespace
    elif (doc[i]).pos_ == "ADP":
        madElements[i] = random.choice(adpositions)
    elif (doc[i]).pos_ == "ADV":
        madElements[i] = random.choice(adverbs)
    elif (doc[i]).pos_ == "AUX":
        madElements[i] = random.choice(auxiliarys)
    elif (doc[i]).pos_ == "CCONJ":
        madElements[i] = random.choice(coordinating_conjunctions)
    elif (doc[i]).pos_ == "DET":
        madElements[i] = random.choice(determiners)
    elif (doc[i]).pos_ == "INTJ":
        madElements[i] = random.choice(interjections)
    elif (doc[i]).pos_ == "NOUN":
        madElements[i] = random.choice(nouns)
    elif (doc[i]).pos_ == "NUM":
        madElements[i] = str(int(random.uniform(int((doc[i]).text) / 10, int((doc[i]).text) * 10)))
    elif (doc[i]).pos_ == "PART":
        madElements[i] = random.choice(particles)
    elif (doc[i]).pos_ == "PRON":
        madElements[i] = random.choice(pronouns)
    elif (doc[i]).pos_ == "PROPN":
        madElements[i] = random.choice(proper_nouns)
    elif (doc[i]).pos_ == "PUNCT":
        madElements[i] = random.choice(punctuations) #
    elif (doc[i]).pos_ == "SCONJ":
        madElements[i] = random.choice(subordinating_conjunctions)
    elif (doc[i]).pos_ == "SYM":
        madElements[i] = random.choice(symbols)
    elif (doc[i]).pos_ == "VERB":
        madElements[i] = random.choice(verbs)
    elif (doc[i]).pos_ == "X":
        madElements[i] = random.choice(others)

    #skip to the next word 
    i += random.randint(3, 7)

#Removes whitespace from punctuation, corrects plurals, and capitalizes.
output = ' '.join(madElements)
try:
    corrected_output = GingerIt().parse(output)['result']
    corrected_output1 = GingerIt().parse(corrected_output)['result']
    print(corrected_output1)
except ValueError:  # includes simplejson.decoder.JSONDecodeError
    print('Decoding JSON has failed')

input()