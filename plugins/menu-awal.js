import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*ʜᴀɪ ꜱᴀʏᴀ ʙᴏᴛ ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ* ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ᴏʟᴇʜ ᴍᴀᴜʟᴀɴᴀ ʏᴀɴɢ ʙɪꜱᴀ ᴏɴʟɪɴᴇ 24ᴊᴀᴍ ᴅᴀɴ ʙᴏᴛ ɪɴɪ ꜱᴜᴅᴀʜ ᴍᴇᴍᴘᴜɴʏᴀɪ ꜰɪᴛᴜʀ ʏᴀɴɢ ʙᴀɢᴜꜱ ᴜɴᴛᴜᴋ ᴅɪ ᴘᴀᴋᴀɪ, ꜱᴇʟᴀᴍᴀᴛ ᴍᴇɴɪᴋᴍᴀᴛɪ☕\n`,wm + '\n\n' + botdate, giflogo, [['𝘼𝙇𝙇 𝙈𝙀𝙉𝙐','.? all'],['𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'LansGanteng',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler
