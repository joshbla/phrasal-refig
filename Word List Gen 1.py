#Issues: Spacy categories many things incorrectly. For example, sometimes putting our
#https://stackoverflow.com/questions/4456446/dictionary-text-file

import oxford
import spacy
nlp = spacy.load("en_core_web_sm")

with open('Input/words_alpha.txt') as words_alpha:
    wordsAlpha = words_alpha.read()
words_alpha.close

adjectives = open("Output1/adjectives.txt", "a")
prepositions = open("Output1/prepositions.txt", "a")
adverbs = open("Output1/adverbs.txt", "a")
auxiliarys = open("Output1/auxiliarys.txt", "a")
coordinating_conjunctions = open("Output1/coordinating_conjunctions.txt", "a")
determiners = open("Output1/determiners.txt", "a")
interjections = open("Output1/interjections.txt", "a")
nouns = open("Output1/nouns.txt", "a")
numerals = open("Output1/numerals.txt", "a") #
particles = open("Output1/particles.txt", "a")
pronouns = open("Output1/pronouns.txt", "a")
proper_nouns = open("Output1/proper_nouns.txt", "a")
punctuations = open("Output1/punctuations.txt", "a") #
subordinating_conjunctions = open("Output1/subordinating_conjunctions.txt", "a")
symbols = open("Output1/symbols.txt", "a") #
verbs = open("Output1/verbs.txt", "a")
others = open("Output1/others.txt", "a")

#identify lexical categories AKA parts of speech
nlp.max_length = 4000000
doc = nlp(wordsAlpha)

i = 0
while i < len(doc):

    print((doc[i]).text)

    if (doc[i]).pos_ == "ADJ":
        adjectives.write((doc[i]).text)
        adjectives.write(" ")
    elif (doc[i]).pos_ == "ADJ":
        prepositions.write((doc[i]).text)
        prepositions.write(" ")
    elif (doc[i]).pos_ == "ADV":
        adverbs.write((doc[i]).text)
        adverbs.write(" ")
    elif (doc[i]).pos_ == "AUX":
        auxiliarys.write((doc[i]).text)
        auxiliarys.write(" ")
    elif (doc[i]).pos_ == "CCONJ":
        coordinating_conjunctions.write((doc[i]).text)
        coordinating_conjunctions.write(" ")
    elif (doc[i]).pos_ == "DET":
        determiners.write((doc[i]).text)
        determiners.write(" ")
    elif (doc[i]).pos_ == "INTJ":
        interjections.write((doc[i]).text)
        interjections.write(" ")
    elif (doc[i]).pos_ == "NOUN":
        nouns.write((doc[i]).text)
        nouns.write(" ")
    elif (doc[i]).pos_ == "NUM":
        numerals.write((doc[i]).text)
        numerals.write(" ")
    elif (doc[i]).pos_ == "PART":
        particles.write((doc[i]).text)
        particles.write(" ")
    elif (doc[i]).pos_ == "PRON":
        pronouns.write((doc[i]).text)
        pronouns.write(" ")
    elif (doc[i]).pos_ == "PROPN":
        proper_nouns.write((doc[i]).text)
        proper_nouns.write(" ")
    elif (doc[i]).pos_ == "PUNCT":
        punctuations.write((doc[i]).text)
        punctuations.write(" ") #
    elif (doc[i]).pos_ == "SCONJ":
        subordinating_conjunctions.write((doc[i]).text)
        subordinating_conjunctions.write(" ")
    elif (doc[i]).pos_ == "SYM":
        symbols.write((doc[i]).text)
        symbols.write(" ")
    elif (doc[i]).pos_ == "VERB":
        verbs.write((doc[i]).text)
        verbs.write(" ")
    elif (doc[i]).pos_ == "X":
        others.write((doc[i]).text)
        others.write(" ")

    i += 1