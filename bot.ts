import { startBot } from "https://deno.land/x/discordeno@10.0.0/mod.ts";
startBot({
    token: "",
    intents: ["GUILDS", "GUILD_MESSAGES"],
    eventHandlers: {
      ready() {
        console.log("Successfully connected to gateway");
      },
      messageCreate(message) {
        if (message.content === "!ping") {
          message.reply("Pong using Discordeno!");
        }
      },
    },
  });