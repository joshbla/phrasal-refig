from twitchio.ext import commands


class Bot(commands.Bot):

    def __init__(self):
        # Initialise our Bot with our access token, prefix and a list of channels to join on boot...
        super().__init__(token='el2f20ocj68ggt0spwvugjpjwbpyfl', prefix='!', initial_channels=['libsbot'])

    async def event_ready(self):
        # We are logged in and ready to chat and use commands...
        print(f'Logged in as | {self.nick}')
        print(f'User id is | {self.user_id}')
    
    @commands.command()
    async def hello(self, ctx: commands.Context):
        # Send a hello back!
        await ctx.send(f'Hello {ctx.author.name}!')
    
    @commands.command()
    async def goodbye(self, ctx: commands.Context):
        # Send a goodbye back!
        await ctx.send(f'Goodbye {ctx.author.name}!')


bot = Bot()
bot.run()