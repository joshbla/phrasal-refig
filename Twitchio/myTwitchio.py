import twitchio
from twitchio.ext import commands
import random


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
        elif random.randint(0,3) == 0:
            reply = "@" + message.author.name + " test successful"
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
    async def gay(self, ctx: commands.Context):
        await ctx.send(f'Congratulations {ctx.author.name}, you\'re gay!')

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