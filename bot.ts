import { Client, Message, Intents } from 'https://deno.land/x/harmony/mod.ts'
import "https://deno.land/std@0.178.0/dotenv/load.ts";
const client = new Client()
client.on('ready', function(){
    console.log("Bot started!")
})
client.on('messageCreate', function(msg : Message){
    if (msg.author == client.user) { return}
    if (msg.content.search("download") && msg.content.search("mod")) {
        msg.reply("read the faq noob")
    }   
})
client.connect(Deno.env.get("token"), Intents.All)