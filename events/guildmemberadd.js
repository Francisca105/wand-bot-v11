const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("guildMemberAdd", async (member) => {

    member.addRole('724918226802311228')
//member.guild.memberCount
})