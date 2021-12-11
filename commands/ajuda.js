exports.run = async (client, message) => {
    const discord = require('discord.js')
    let ajuda = new discord.RichEmbed()
    .setTitle('<:papel:716267761529258044> Ajuda')
    .setDescription('Eu sou um bot simples com poucos comandos...\nPermito fazer \`\`anúncios\`\`, enviar o status do \`\`servidor\`\` e ver algums das minhas informações (\`\`botinfo\`\`).')
    .setFooter('Bot desenvolvido pela Francisca.105#8965')
    .setColor('RANDOM')

        message.channel.send(ajuda)
    }
    module.exports.help = {
        name: "ajuda",
        aliases: ["?", "help", "comandos", "cmds", "commands"]
    }    