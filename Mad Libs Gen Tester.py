# Ideas: could use ent in spacy to better replace proper nouns
# Issues: madElements building differently than doc
from gingerit.gingerit import GingerIt
from word2number import w2n
import random
import spacy
import re


print("Enter paragraph:")
input = (input()).lstrip()
#might remove regex section entirely as
#   it interferes with multi-word dashed numbers
#   It should now be unnecessary

#requires regex to split punctuation from words
happyElements = re.findall(r'\w+|[^\s\w]+', input)


#identify lexical categories AKA parts of speech
nlp = spacy.load("en_core_web_sm")
input = ' '.join(happyElements)
doc = nlp(input)


adjective = open("Output2/adjective.txt", "r").read().split()
adverb = open("Output2/adverb.txt", "r").read().split()
conjunction = open("Output2/conjunction.txt", "r").read().split()
interjection = open("Output2/interjection.txt", "r").read().split()
noun = open("Output2/noun.txt", "r").read().split()
preposition = open("Output2/preposition.txt", "r").read().split()
pronoun = open("Output2/pronoun.txt", "r").read().split()
proper_noun = open("Output2/proper noun.txt", "r").read().split()
verb = open("Output2/verb.txt", "r").read().split()
posTags = ["ADJ", "ADP", "ADV", "CCONJ", "INTJ", "NOUN", "NUM", "PRON", "PROPN", "SCONJ", "VERB"]
# https://universaldependencies.org/u/pos/

# Right now it does for every random word but I need it to do for every word...
# so that it builds madElements identically to doc because I will refer to doc later .
# I'm thinking to add a second variable j that determines the random choice.
# Only when i == j then it will go through all of this.
# So for most of this I need to replace i with j and then add an i.  
madElements = []
i = 0
j = random.randint(0, 4)
while i < len(doc):
    if i == j:
        if (doc[i]).pos_ in posTags:
            if (doc[i]).pos_ == "ADJ":
                madElements.append(random.choice(adjective))
            elif (doc[i]).pos_ == "ADP":
                madElements.append(random.choice(preposition))
            elif (doc[i]).pos_ == "ADV":
                madElements.append(random.choice(adverb))
            elif (doc[i]).pos_ == "CCONJ":
                madElements.append(random.choice(conjunction))
            elif (doc[i]).pos_ == "INTJ":
                madElements.append(random.choice(interjection))
            elif (doc[i]).pos_ == "NOUN":
                madElements.append(random.choice(noun))
            elif (doc[i]).pos_ == "NUM":
                try:
                    madElements.append(str(int(random.uniform(int((doc[i]).text) / 10, int((doc[i]).text) * 10))))
                except:
                    converted = w2n.word_to_num((doc[i]).text)
                    madElements.append(str(int(random.uniform(int(converted) / 10, int(converted) * 10))))
            elif (doc[i]).pos_ == "PRON":
                madElements.append(random.choice(pronoun))
            elif (doc[i]).pos_ == "PROPN":
                madElements.append(random.choice(proper_noun))
            elif (doc[i]).pos_ == "SCONJ":
                madElements.append(random.choice(conjunction))
            elif (doc[i]).pos_ == "VERB":
                madElements.append(random.choice(verb))
            j += random.randint(2, 6)
        else:
            madElements.append((doc[i]).text)
            j += 1
        i += 1
    else:
        madElements.append((doc[i]).text)
        i += 1

docString = ""
k = 0
while k < len(doc):
    docString = docString + (doc[k]).text + " "
    k += 1
print("doc: ", len(doc), ", \"", docString, "\"") 
print("madElements: ", len(madElements), ", \"", ' '.join(madElements), "\"")

output = ""
l = 0
while l < len(doc):
    if (doc[l]).pos_ == "PUNCT":
        # if before and after -–—,: are numbers then remove space before and after
        #   if not both numbers then remove space before -–—,:
        # remove space after ([{
        # remove space before }])
        # remove space after a single or group of :;!?....
        # remove space after first '"
        # remove space before second '"
        output = output + madElements[l]
        output = output + " "
        pass
    else:
        output = output + madElements[l]
        output = output + " "
        pass
    l += 1
#removes extra space at end
output = output[:-1]


#Removes some whitespace from punctuation, corrects plurals, and capitalizes.
try:
    corrected_output = GingerIt().parse(output)['result']
    corrected_output1 = GingerIt().parse(corrected_output)['result']
    print(corrected_output1)
except ValueError:  # includes simplejson.decoder.JSONDecodeError
    print('Decoding JSON has failed')

pass