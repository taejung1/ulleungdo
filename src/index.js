const { Client } = require('discord.js')
const command = require('./commands/main.js')

module.exports = class ulleungdo {
    /**
     * ulleungdo
     */
    /**
     *
     * @param {CommandInteraction} interaction
     * @param {import("discord.js").Client} client
    */
    constructor(client, { owners = null }) {
        if (!(client instanceof Client)) throw new Error('잘못된 "client" 매개변수는 필수항목입니다.');

        this.owners = owners

        client.once('ready', () => {
            if (!this.owners) {
                console.warn('[ulleungdo] 소유자정보가 없습니다. 에플리케이션에서 가져옵니다..');
                client.application.fetch().then(data => {
                    this.owners = data.owner.members?.map(el => el.id) || [data.owner.id] || []
                    console.info(`[ulleungdo] ${this.owners.length} 소유자(s): ${this.owners.length > 3 ? this.owners.slice(0, 3).join(', ') + ` ${this.owners.length - 3} 소유자들` : this.owners.join(', ')}`)
                })
            }
        })

        this.client = client

    }

    async start(interaction, type, args) {
        if (!(this.owners).includes(interaction.user.id)) {
            return await interaction.reply({ content: `당신은 봇 소유자나 팀이 아닙니다` , ephemeral: true })
        } else {
            if (!type) return command.index(interaction, this)

            switch (type) {
                case 'curl':
                    command.curl(interaction, this, args)
                    break
                case 'cat':
                    command.cat(interaction, this, args)
                    break
                case 'js':
                    command.js(interaction, this, args)
                    break
                default:
                    interaction.editReply({ content: "에러! 유요한 옵션이 없어요!" })
            }
        }
    }
}