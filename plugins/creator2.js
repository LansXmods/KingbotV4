let handler = function (m) {
  // this.sendContact(m.chat, '6283132749084', 'LansDev', m)
  conn.sendContact(m.chat, '6283132749084', 'LansDev', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(kontak)$/i

module.exports = handler
