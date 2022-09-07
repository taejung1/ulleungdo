const fs = require('fs')
const lag = require('../function/language.js')
const page = require('../function/page.js')

module.exports = async function cat(interaction, parent, args) {
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
    */
    await interaction.deferReply().catch(() => { });
    if (!args) return interaction.editReply({ content: "인수가 없습니다." });

    fs.readFile(args, async (error, data) => {
        if (error) return interaction.editReply("```js\n" + error.toString() + "\n```");
        return page.page(interaction, data.toString(), await lag.find_language(args.split('.').pop()), )
    });
}  