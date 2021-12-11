const {bot} = require('../index');
const config = require("../config.json");
bot.on("ready", async message => {
    console.log(`\n${bot.user.username} está online em ${bot.guilds.size} servidores com ${bot.users.size} membros.\n\n`)
    bot.user.setActivity("fiquei online!", {type: "STREAMING"});

//status

   let statuses = [
       `Wand Network`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "PLAYING"});

   }, 2* 5000)
    
const canal = bot.guilds.channnels.get('724921160722022503')

   canal.setName('💚︱online')


   
   const request = require('request')
   var mcIP = ''
   var url = 'https://api.minetools.eu/ping/' + mcIP  
   
   setInterval(function update() {
       request(url, function(err, response, body) {
           if(err) {
               return console.log(error);
           }
           body = JSON.parse(body);
           if(body.error) {
               //bot.channels.get("704683310286372914").setName(`Players: ${body.players.now}/${body.players.max}`)
               bot.channels.get("704683382608625784").setName(`Status: Offline`);
           }
           else{
               bot.channels.get("704683382608625784").setName(`Status: Online`);
               //bot.channels.get("704683310286372914").setName(`Players: -`)
           }
       });
   }, 1000)   


})
