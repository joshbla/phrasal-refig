import oxford

dict = {}
words = open("Input/words_beta.txt", "r").read().split()

for word in words:
    print(word)

    try:
        oxford.Word.get(word)
        wordform = oxford.Word.wordform()
        dict[wordform] = word

    except:
        print("DNE")

print(dict)
print("End")