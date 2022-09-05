const fs = require('fs')
const function_find = require('../function/cat_language.js')
const page = require('../function/cat_page.js')

module.exports = async function cat(interaction, parent, args) {
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
    */
    await interaction.deferReply().catch(() => { });
    if (!args) return interaction.editReply({ content: "인수가 없습니다." });

    fs.readFile(args, async (err, data) => {
        if (err) return interaction.editReply("ERR" + "```js\n" + err.toString() + "```");
        page.page(interaction, data.toString(), await function_find.find_language(args.split('.').pop()))
    });
}  