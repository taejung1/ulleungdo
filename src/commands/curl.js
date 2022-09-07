const fetch = require('node-fetch')
const page = require('../function/page.js')

module.exports = async function curl(interaction, parent, args) {
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
    */

    await interaction.deferReply().catch(() => { });

    if (!args) return interaction.editReply({ content: "인수가 없습니다." });

    await fetch(`${args}`)
        .then(async data => {
            const text = await data.text()
            return page.page(interaction, text, "html")
        }).catch(data => {
            return interaction.editReply("```js\n" + `${data}` + "\n```")
        })
} 