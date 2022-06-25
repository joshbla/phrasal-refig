import oxford

adjectives = open("OutputNew/adjectives.txt", "a")
prepositions = open("OutputNew/prepositions.txt", "a")
adverbs = open("OutputNew/adverbs.txt", "a")
auxiliarys = open("OutputNew/auxiliarys.txt", "a")
coordinating_conjunctions = open("OutputNew/coordinating_conjunctions.txt", "a")
determiners = open("OutputNew/determiners.txt", "a")
interjections = open("OutputNew/interjections.txt", "a")
nouns = open("OutputNew/nouns.txt", "a")
numerals = open("OutputNew/numerals.txt", "a") #
particles = open("OutputNew/particles.txt", "a")
pronouns = open("OutputNew/pronouns.txt", "a")
proper_nouns = open("OutputNew/proper_nouns.txt", "a")
punctuations = open("OutputNew/punctuations.txt", "a") #
subordinating_conjunctions = open("OutputNew/subordinating_conjunctions.txt", "a")
symbols = open("OutputNew/symbols.txt", "a") #
verbs = open("OutputNew/verbs.txt", "a")
others = open("OutputNew/others.txt", "a")

outputs = ["adjectives", "prepositions", "adverbs", "auxiliarys", "coordinating_conjunctions", "determiners", "interjections", "nouns", "numerals", "particles", "pronouns", "proper_nouns", "punctuations", "subordinating_conjunctions", "symbols", "verbs", "others"]

for i in outputs:
    file = "Output/" + i + ".txt"
    words = open(file, "r").read().split()

    for word in words:
        print(word)

        try:
            oxford.Word.get(word)
            wordform = oxford.Word.wordform()
            print("Wordform:", wordform)

            if wordform == "adjective":
                adjectives.write(word)
                adjectives.write(" ")
            elif wordform == "adposition":
                prepositions.write(word)
                prepositions.write(" ")
            elif wordform == "adverb":
                adverbs.write(word)
                adverbs.write(" ")
            elif wordform == "auxillary":
                auxiliarys.write(word)
                auxiliarys.write(" ")
            elif wordform == "coordinating conjunction":
                coordinating_conjunctions.write(word)
                coordinating_conjunctions.write(" ")
            elif wordform == "determiner":
                determiners.write(word)
                determiners.write(" ")
            elif wordform == "interjection":
                interjections.write(word)
                interjections.write(" ")
            elif wordform == "noun":
                nouns.write(word)
                nouns.write(" ")
            elif wordform == "numeral":
                numerals.write(word)
                numerals.write(" ")
            elif wordform == "particle":
                particles.write(word)
                particles.write(" ")
            elif wordform == "pronoun":
                pronouns.write(word)
                pronouns.write(" ")
            elif wordform == "proper noun":
                proper_nouns.write(word)
                proper_nouns.write(" ")
            elif wordform == "punctuation":
                punctuations.write(word)
                punctuations.write(" ") #
            elif wordform == "subordinating conjunctions":
                subordinating_conjunctions.write(word)
                subordinating_conjunctions.write(" ")
            elif wordform == "symbol":
                symbols.write(word)
                symbols.write(" ")
            elif wordform == "verb":
                verbs.write(word)
                verbs.write(" ")
            else:
                others.write(word)
                others.write(" ")
        except:
            print("DNE")

