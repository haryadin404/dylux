const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const simple = require('./libreria/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let Fg = new WAConnection()
const fs = require('fs')
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const figlet = require('figlet')
const moment = require('moment-timezone')
const toMs = require('ms')
const ms = require("parse-ms");
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./libreria/functions')
const { color } = require('./libreria/color')
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["59172945992-1519883511@g.us"]
shp = '⬡'
owner = "59172945992@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '

require('./efege.js')
nocache('./efege.js', module => console.log(color(`efege.js is now updated!`)))
require('./libreria/menu.js')
nocache('./libreria/menu.js', module => console.log(color(`Menu.js is Now updated!`)))

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

const starts = async (Fg = new WAConnection()) => {
Fg.version = [2, 2119, 6]
//enku.browserDescription = [ '[•] Fg', 'Chrome', '3.0' ]


//Fg.logger.level = 'warn'

const CFonts  = require('cfonts')
CFonts.say('FG98', {
  font: 'pallet',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`DyLux By FG98 Ig : @fg98._`, {
  font: 'console',
  align: 'center',
  colors: ['yellow']
})


/*Fg.on('qr', () => {
console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Now This Qr!'))
})

fs.existsSync('./session/FG98.json') && Fg.loadAuthInfo('./session/FG98.json')
Fg.on('connecting', () => {
start('2', '[ ! ] Connecting..')
})

Fg.on('open', () => {
success('2',`\n[ ✓ ] Connected...`)
})
await Fg.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session/FG98.json', JSON.stringify(Fg.base64EncodedAuthInfo(), null, '\t'))
Fg.on('chat-update', async (message) => {
require('./efege.js')(Fg, message)
})*/

    
Fg.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
	const left = JSON.parse(fs.readFileSync('./database/left.json'))	
	const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
      try {
  const mdata = await Fg.groupMetadata(anu.jid)
	 finvite = {
    "key": {
      "fromMe": false,
      "participant": "0@s.whatsapp.net",
      "remoteJid": "0@s.whatsapp.net"
           },
      "message": {
       "groupInviteMessage": {
       "groupJid": anu.jid,
       "inviteCode": "NgsCIU2lXKh3VHJT",
       "groupName": mdata.subject,
       "caption": fake,
       "height": 6080,
       "width": 6000
                               }
                   }
            }
if (anu.action == 'add') {
num = anu.participants[0]
try {
ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
}
ini_user = Fg.contacts[num]
teks = `Halo @${num.split('@')[0]} 👋\nSelamat datang di Grup
*${mdata.subject}*

Intro Member Baru

${shp} Nama: 
${shp} Umur:
${shp} Status:
${shp} Askot:

Sering nimbrung dan baca rules grup`
let	buff = await getBuffer(ppimg)
Fg.sendMessage(mdata.id, buff, MessageType.image, {quoted:fkontakk,caption: teks, contextInfo: {"mentionedJid": [num]}})
} else if (anu.action == 'remove') {
if(!left.includes(anu.jid)) return
num = anu.participants[0]
try {
ppimg = await Fg.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
}
teks = `*@${num.split('@')[0]} Sayonaraa.*`
let buff = await getBuffer(ppimg)
Fg.sendMessage(mdata.id, buff, MessageType.image, {quoted : fkontakk,caption: teks, contextInfo: {"mentionedJid": [num]}})
		
} else if (anu.action == 'promote') {
//	const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
	//if(!gchange.includes(mdata.id)) return
var thu = await Fg.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
Fg.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
} else if (anu.action == 'demote') {
//   const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
//	if(!gchange.includes(mdata.id)) return
thu = await Fg.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
Fg.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

Fg.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'</ 𝘚𝘦𝘯𝘬𝘶𝘶⁴̅⁰͍⁴̵〆⁩',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Fajar;;;\nFN:resku\nitem1.TEL;waid=6281804680327:+62 812-2354-6913\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await Fg.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
Fg.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
Fg.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
Fg.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = ` [ Group Setting Change ] \n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
Fg.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
Fg.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})

antidel = true
Fg.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
Fg.sendMessage(m.key.remoteJid, `━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━

    *Nama  : @${m.participant.split("@")[0]}*
    *Jam  : ${jam} ${week} ${calender}*
    *Type  : ${type}*

━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
Fg.copyNForward(m.key.remoteJid, m.message)
})

antical = true
Fg.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
Fg.sendMessage(call, `*Sorry ${Fg.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => Fg.blockUser(call, "add"))
})


Fg.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
//console.log(color('========================================'))
//console.log('Module', `'${module}'`, 'is now being watched for changes')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
