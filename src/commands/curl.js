const fetch = require('node-fetch')

const page_function = require('../function/curl_page.js')

module.exports = async function curl(interaction, parent, args) {
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
    */

    await interaction.deferReply().catch(() => { });

    if (!args) return interaction.editReply({ content: "인수가 없습니다." });

    await fetch(`${args}`).then(async data => {
        const text = await data.text()
        page_function.page(interaction, text)
    }).catch(data => {
        interaction.editReply("ERR" + "```" + `${data}` + "```")
    })
} 