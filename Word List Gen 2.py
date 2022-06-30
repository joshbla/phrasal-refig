# Issues: very slow. Many words not recognized.
import json
import ssl
import urllib.request
ssl._create_default_https_context = ssl._create_unverified_context
import os

# creates folder
try:
    os.mkdir('Output2')
except:
    pass

wordList = open("Input/words_alpha.txt", "r").read().split()

for word in wordList:
    url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    
    try:
        with urllib.request.urlopen(url) as page:
            data = json.loads(page.read().decode())
        
        partsOfSpeech = []

        for element in data:
            for meaning in element["meanings"]:
                partsOfSpeech.append(meaning["partOfSpeech"])
        
        # removes duplicates
        partsOfSpeech = list(dict.fromkeys(partsOfSpeech))

        for partOfSpeech in partsOfSpeech:
            file = "Output2/" + partOfSpeech + ".txt"
            words = open(file, "a")
            words.write(word)
            words.write(" ")
            words.close()
    except:
        pass

pass