import twitchio
from twitchio.ext import commands
from gingerit.gingerit import GingerIt
from word2number import w2n
import random
import re
import spacy
nlp = spacy.load("en_core_web_sm")

class phrasal_refig:
    
    def __init__(self):
        pass

    def libsGen(input):

        input = (input).lstrip()
        happyElements = re.findall(r'\w+|[^\s\w]+', input)
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

        madElements = []
        i = 0
        j = random.randint(0, 4)
        if len(doc) < j:
            j = 0

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
        #print("doc: ", len(doc), ", \"", docString, "\"") 
        #print("madElements: ", len(madElements), ", \"", ' '.join(madElements), "\"")

        output = ""
        l = 0
        while l < len(doc):
            if (doc[l]).pos_ == "PUNCT":
                output = output + madElements[l]
                output = output + " "
                pass
            else:
                output = output + madElements[l]
                output = output + " "
                pass
            l += 1
        output = output[:-1]

        try:
            corrected_output = GingerIt().parse(output)['result']
            corrected_output1 = GingerIt().parse(corrected_output)['result']
            return corrected_output1
        except ValueError:  # includes simplejson.decoder.JSONDecodeError
            return 'Decoding JSON has failed'

class Bot(commands.Bot):

    def __init__(self):
        # Initialise our Bot with our access token, prefix and a list of channels to join on boot...
        super().__init__(token='el2f20ocj68ggt0spwvugjpjwbpyfl', prefix='!', initial_channels=['libsbot'])

    async def event_ready(self):
        # We are logged in and ready to chat and use commands...
        print(f'Logged in as | {self.nick}')
        print(f'User id is | {self.user_id}')

    async def event_message(self, message):
        # Messages with echo set to True are messages sent by the bot...
        # For now we just want to ignore them...
        if message.echo:
            return
        elif random.randint(0,0) == 0:
            output = phrasal_refig.libsGen(message.content)
            print(output)
            reply = "@" + message.author.name + " " + output
            await twitchio.Channel.send(message.channel, reply)
        else:
            return

        # Since we have commands and are overriding the default `event_message`
        # We must let the bot know we want to handle and invoke our commands...
        await self.handle_commands(message)
    
    @commands.command()
    async def sex(self, ctx: commands.Context):
        await ctx.send(f'Congratulations {ctx.author.name}, you\'re pregnant!')

    @commands.command()
    async def die(self, ctx: commands.Context):
        await ctx.send(f'Congratulations {ctx.author.name}, you\'re dead!')

    @commands.command()
    async def mods(self, ctx: commands.Context):
        await ctx.send(f'No mods are currently installed.')

    @commands.command()
    async def test(self, ctx: commands.Context):
        await ctx.send(f'Yup it works')


bot = Bot()
bot.run()