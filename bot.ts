import { Client, Message, Intents } from 'https://deno.land/x/harmony/mod.ts'
import "https://deno.land/std@0.178.0/dotenv/load.ts";
const client = new Client()
client.on('ready', function(){
    console.log("Bot started!")
})
client.on('messageCreate', function(msg : Message){
    if (msg.author.id == client.user.id) { return}
    if (!(msg.content.search("download") == -1) && !(msg.content.search("mod") == -1)) {
        msg.reply("read the faq noob https://discord.com/channels/592914470645530664/789950547343835156/949166207452479518")
    }   
})
client.connect(Deno.env.get("token"), Intents.All)