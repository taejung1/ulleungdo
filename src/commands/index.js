const { version , GatewayIntentBits, IntentsBitField } = require('discord.js')

function relative(data) {
    return `<t:${Math.floor(data / 1000)}` + ('R' ? `:R` : '') + '>'
}

function re (res, sep, lastSep) {
    if (res.length <= 1) return res.join(sep);
    return res.reduce((text, cur, idx) => [text, cur].join(idx === res.length - 1 ? lastSep : sep));
  }

function memory() {
    const result = {};
    Object.keys(process.memoryUsage()).forEach(key => {
        result[key] = (process.memoryUsage()[key] / 1024 / 1024).toFixed(2) + 'MB';
    });
    return result.rss;
}

module.exports = async function (interaction, parent) {
    await interaction.deferReply().catch(() => { });

    const message1 = `ulleungdo : \`${require('../../package.json').version},\``;
    const message2 = `discord.js :\`${version}\``;
    const message3 = `node.js : \`${process.version}\` on \`${process.platform}\``;
    const message4 = `process started at ${relative(new Date(Date.now() - process.uptime() * 1000))}`;
    const message5 = `bot was ready at ${relative(parent.client.readyAt)}.`
    const message6 = `Using ${memory()} at this process.`;

    let msg = `${message1} ${message2}, ${message3}\n${message4} ${message5}\n\n${message6}\n`;

    const cache = `${parent.client.guilds.cache.size} guild(s) and ${parent.client.users.cache.size} user(s)`;

    if (parent.client.shard) {
        const guilds = await parent.client.shard.fetchClientValues('guilds.cache.size').then(r => r.reduce((prev, val) => prev + val, 0));
        msg += `Running on PID ${process.pid} for this client, and running on PID ${process.ppid} for the parent process.\n\nThis bot is sharded in ${Array.isArray(parent.client.shard.shards) ? parent.client.shard.shards.length : parent.client.shard.count} shard(s) and running in ${guilds} guild(s).\nCan see ${cache} in this client.`;
    } else msg += `Running on PID ${process.pid}\n\nThis bot is not sharded and can see ${cache}.`;

    const intents = new IntentsBitField(parent.client.options.intents);
    msg += '\n' + re([GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent].map(u => `\`${GatewayIntentBits[u]}\` intent is ${intents.has(u) ? 'enabled' : 'disabled'}`), ', ', ' and ') + '.';

    msg += `\nAverage websocket latency: ${parent.client.ws.ping}ms`;

    return interaction.editReply({ content: `${msg}` }).catch(() => { });
}