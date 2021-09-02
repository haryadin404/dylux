//============ FG98 ============//
//
//       🇩 🇾 🇱 🇺 🇽  𝗩4
//
//============ FG98 ============//
  
 //--  Conectar a WhatsApp
const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
relayWAMessage,
whatsappID,
processTime
} = require("@adiwajshing/baileys")

//-- Modulos
const fs = require('fs')
const qrcode = require('qrcode');
const imgbb = require('imgbb-uploader')
const request = require('request')
const requests = require("node-fetch")
const toMs = require('ms')
const ms = require("parse-ms");
const FormData = require('form-data')
const yts = require( 'yt-search')
const axios = require("axios")
const speed = require('performance-now')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const lolis = require('lolis.life')
const loli = new lolis()
//--New
const crypto = require('crypto');
const {convertSticker} = require("./libreria/swm.js") 
const Exif = require('./libreria/exif');
const { webp2mp4File} = require('./libreria/webp2mp4')
const exif = new Exif();

//---- Funcion

const { color, bgcolor } = require('./libreria/color')
const { _wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./libreria/functions')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./libreria/limit");
const { fetchJson, fetchText, kyun } = require('./libreria/fetcher')
const { recognize } = require('./libreria/ocr')
const { exec } = require('child_process')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { validmove, setGame } = require("./libreria/tictactoe");
const { webp2mp4Url, webp2gifFile, reverseVideoFile } = require('./libreria/ezgif')
const { yta, ytv, igdl, upload} = require("./libreria/fgdl");
const { fbdl } = require("./libreria/fbdl");
const { uploadimg } = require('./libreria/uploadimg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const _prem = require("./libreria/premium");
const game = require("./libreria/game");
const { smsg } = require('./libreria/simple')
const { jadibot, stopjadibot, listjadibot } = require('./libreria/jadibot')
const voting = JSON.parse(fs.readFileSync('./data/voting.json'))
const { addVote, delVote } = require('./libreria/vote')


//---Data
const _antilink = JSON.parse(fs.readFileSync('./data/antilink.json'))
const balance = JSON.parse(fs.readFileSync('./data/balance.json'));
const bancht = JSON.parse(fs.readFileSync('./data/banchat.json'));
const ban = JSON.parse(fs.readFileSync('./data/banned.json'));
const glimit = JSON.parse(fs.readFileSync('./data/glimit.json'));
const left = JSON.parse(fs.readFileSync('./data/left.json'))	
const limit = JSON.parse(fs.readFileSync('./data/limit.json'));
const premium = JSON.parse(fs.readFileSync('./data/premium.json'))
const confi = JSON.parse(fs.readFileSync('./data/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./data/stick.json'))
const scommand = JSON.parse(fs.readFileSync('./data/stickcmd.json'))
const _welcom = JSON.parse(fs.readFileSync('./data/welcom.json'))
const _user = JSON.parse(fs.readFileSync('./data/register.json'))
const hit = JSON.parse(fs.readFileSync('./data/totalhit.json'))

//-- Resultados
const _verdad = JSON.parse(fs.readFileSync('./result/verdad.json'));
const _reto = JSON.parse(fs.readFileSync('./result/reto.json'));

//-- Help
const { help } = require('./help/menu')
const { wait, stick, errorfg, group, banf, ownerB, modsB, premi, userB, admin, Badmin, leveloff, lvlnul, fdiama, fgnsfw} = require('./help/respon');
//---Ajustes 
menusimpel = false //se elimina menu 
let multi = true
let nopref = false
let single = false
let prefa = '/'

blocked = []
public = true

  //---- 𝗦𝗧𝗔𝗙𝗙 -----
const owner = confi.ownerN
const mods = confi.mods

wa = '0@s.whatsapp.net'
shp = '⬡'
nama = 'Dylux BOT'
fake = '@fg98_'

//--anti delete 
antidel = false
antical = false
aread = false  //leer automáticamente 
ngetik = false
vn = true

//---------𝗥𝗘𝗗𝗘𝗦 𝗦𝗢𝗖𝗜𝗔𝗟𝗘𝗦---------
const soportefg = 'https://chat.whatsapp.com/G5sXrkhJ0pb0Tu8nhWLaFK' 

//--------𝗔𝗣𝗜𝗞𝗘𝗬----------
const Vkey = 'apivinz'
const lolkey = '51762aa98877b6dc21112b1a'


//-----fakethumb-----
gambar1 = fs.readFileSync('./image/emror.jpg')
gambar2 = fs.readFileSync('./image/senku.jpeg')
gambar3 = fs.readFileSync('./image/senku.jpg')
gambar4 = fs.readFileSync('./image/senku2.jpeg')
fakeg = fs.readFileSync('./image/fake.jpg')


//----Juegos
let tebakgambar = [];
let family100 = [];
let mtk = [];
let ckl = [];
//---
 let {gamewaktu, limitCount } = require('./data/settings')

//--Contacto del dueño
const vcard1 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'FN:FG98\n'
 + 'ORG:Dueño de DyLuxBot;\n' 
 + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`
 + 'END:VCARD'
      
const vcard2 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'FN:FG98-2\n'
 + 'ORG:Dueño de DyLuxBot;\n' 
 + 'TEL;type=CELL;type=VOICE;waid=5493884725288:+54 9 388 472-5288\n'
 + 'END:VCARD'
  

     //  𝙎𝙀𝙍𝙄𝘼𝙇 𝙂𝙀𝙉𝙀𝙍𝘼𝘿𝙊𝙍 
const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        //========= 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 =========\\

const getuserRandomId = () => {
  return _user[Math.floor(Math.random() * _user.length)].id
}

const adduserUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _user.push(obj)
  fs.writeFileSync('./data/user.json', JSON.stringify(_user))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkuserUser = (sender) => {
  let status = false
  Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
  status = true
}
  })
  return status
}
//---      
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//---menu tutorial        
module.exports = Fg = async (Fg, mek) => {
try {
const { convrt , donld , gem , sess , gc } = require('./libreria/tutorial')
//---



//-- Hora y fecha
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
function fecha(){
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
			myDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

//-------𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦-----
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./data/stickcmd.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


//----------------------------------------------------------
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
//smsg(Fg, mek)
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message

m = smsg(Fg, mek)
global.prefix
global.blocked

const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]

const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : [] 
const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
	       mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const time = moment.tz('America/La_Paz').format('DD/MM HH:mm:ss')
const hora = moment.tz('America/La_Paz').format('HH:mm')
const hora2 = moment.tz('America/La_Paz').format('HH:mm:ss')


//---Multi Prefix 
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'	  

} else {
if (nopref){
prefix = ''

} else {
if(single){
prefix = prefa }}}
 
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim()
q2 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""

butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''

const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)
const argss = body.split(/ +/g)

mess = {
   	ferr: '❎ Error! \n🔍 Intentalo de nuevo mas tarde',
   error: {
      Iink: '❎ Link invalido, corríjalo e intente de nuevo' } 
 
   	}

const totalchat = await Fg.chats.all()
const botNumber = Fg.user.jid
const botNumero = botNumber.replace('@s.whatsapp.net', '') //sólo número del bot
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? Fg.user.jid : isGroup ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await Fg.groupMetadata(from) : ''
//const isOwner = ownerNumber.includes(sender)
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

//const itsMe = mek.key.fromMe ? true : false
const isOwner = senderNumber == owner || senderNumber == botNumero
const isMods = mods.includes(senderNumber)
 
const isVerify = _user.includes(sender)
const isAntilink = isGroup ? _antilink.includes(from) : false
const isPremium = _prem.checkPremiumUser(sender,premium) || false || isOwner
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelcom = isGroup ? _welcom.includes(from) : false
const isLeft = isGroup ? left.includes(from) : false
const isBanchat = isGroup ? bancht.includes(from) : false
const value = args.join(' ')  
const isVote = isGroup ? voting.includes(from) : false
conts = mek.key.fromMe ? Fg.user.jid : Fg.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Fg.user.name : conts.notify || conts.vname || conts.name || '-'
const gcounti = confi.gcount
const gcount = isPremium ? gcounti.prem : gcounti.user
//nuevo fg
const isBanned = ban.includes(sender)

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

 //---- 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔----
 const reply = (teks) => {
Fg.sendMessage(from, teks, text, {quoted:mek })
			}
 //---respuesta con thumbnail
const replyfg = (teks) => {
Fg.sendMessage(from, teks, text, {quoted:mek,thumbnail : gambar4})
}

const sendMess = (hehe, teks) => {
Fg.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Fg.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Fg.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
//---- 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗙𝗔𝗟𝗦𝗔 ----
//--respuesta con link
const replyLink = (teks) => {
Fg.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `FG98  ┃ DyLux ᴮᴼᵀ ✨`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/ZW0xBXL/amumu.jpg",
                "thumbnail": gambar2,
                "sourceUrl": `https://chat.whatsapp.com/G5sXrkhJ0pb0Tu8nhWLaFK`
},mentionedJid:[sender]}, quoted : mek})
}

//--Avance

function monospace(string) {
return '```' + string + '```'
}  

//-- juego
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//-buy limit
const nebal = (angka) => {
return Math.floor(angka)
}




//--------𝗬𝗧 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦--------
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('✅ Enviando');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Fg.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
fs.unlinkSync(filename)
});
}

 
 //----------𝗘𝗠𝗢𝗝𝗜 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥------------
		const sendStickerFromUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./libreria/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Fg.sendMessage(to, media, sticker,{quoted:mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('💎 Enviando sticker...'))
					fs.unlinkSync(asw)
					fs.unlinkSync(filess)
					});
					});
				});
			}
//------- 
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker..'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./libreria/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
Fg.sendMessage(from, media, sticker, {quoted: mek})
console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('💎 Enviando sticker..'))  
});
});
});
} 

            
//------------ 𝗕𝗔𝗡𝗖𝗛𝗔𝗧 ----------
if (isBanchat){
if (!isOwner)return 
}

if (aread){
return Fg.chatRead(from)
}


//----𝗦𝗲𝗹𝗳 / 𝗣𝘂𝗯𝗹𝗶𝗰 -----
if (!public){
if (!isOwner) return
}
//-----------

_prem.expiredCheck(premium)


/*====================================================================*/

//-----𝗚𝗔𝗠𝗘𝗦---
game.cekWaktuFam(Fg, family100)
game.cekWaktuTG(Fg, tebakgambar)
game.cekWaktuMtk(Fg, mtk)
game.cekWaktuCkl(Fg, ckl)

if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = randomNomor(1000)
addBalance(sender, htgm3, balance)
await reply(`*✅ Felicidades tu respuesta es correcta*\n*‣ Respuesta :* ${game.getJawabanMtk(from, mtk)}\n*‣ Regalo :* $${htgm3}\n\nQuieres jugar de nuevo? Escribe *${prefix}math*`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}
        
if (game.isCkl(from, ckl)){
if (chats.toLowerCase().includes(game.getJawabanCkl(from, ckl))){
var htgm2 = randomNomor(1000)
addBalance(sender, htgm2, balance)
await reply(`*✅ Felicidades tu respuesta es correcta*\n*‣ Respuesta :* ${game.getJawabanCkl(from, ckl)}\n*‣ Regalo :* $${htgm2}\n\nQuieres jugar de nuevo? Escribe *${prefix}caklontong*`)
ckl.splice(game.getCklPosi(from, ckl), 1)
}
}
			        
if (game.isTebakGambar(from, tebakgambar)){
if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(1000)
addBalance(sender, htgm, balance)
await reply(`*✅ Felicidades tu respuesta es correcta*\n*‣ Respuesta :* ${game.getJawabanTG(from, tebakgambar)}\n*‣ Regalo :* $${htgm}\n\nQuieres jugar de nuevo? Escribe *${prefix}tebakgambar*`)
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
}
}

if (game.isfam(from, family100)){
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (chats.toLowerCase().includes(i)){
var htgm1 = randomNomor(1000)
addBalance(sender, htgm1 , balance)
await reply(`*✅ Respuesta correcta*\n*‣ Respuesta :* ${i}\n*‣ Regalo :* $${htgm1}\n\n*Respuesta imprevista :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
if (anjuy.length < 1){
Fg.sendMessage(from, `🎉 Todas las respuestas han sido adivinadas\nEscribe *${prefix}family100* Para jugar de nuevo`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}

//----------𝗧𝗜𝗖𝗧𝗔𝗖𝗧𝗢𝗘--------
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./libreria/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "si" ||
budy.toLowerCase() == "Si"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`✳️ El juego ha comenzado antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./libreria/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2)
);
const chatAccept = `T I C T A C T O E  G A M E

INFO :
  Jugador ❎ : @${boardnow.X}
  Jugador2 ⭕ : @${boardnow.O}
               
     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Girar @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

Escriba *rendirse* para dejar de jugar!
Escriba ${prefix}delttc para eliminar la sesión del juego!
`;
Fg.sendMessage(from, monospace(chatAccept), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
} else {
Fg.sendMessage(from,`❎ Esta opción es solo para @${boardnow.O} !`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "no" ||
budy.toLowerCase() == "No"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`✳️ El juego ha comenzado antes!`);
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
Fg.sendMessage(from,`📌 Desafortunadamente el desafío @${boardnow.X} a sido rechazado 😕`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
} else {
Fg.sendMessage(from,`❎ Esta opción es solo para @${boardnow.O} !`,MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`✳️ Parece que tu oponente no ha recibido / rechazar el desafío.`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮 Tictactoe Game 🎳*
          
El juego termina en empate 😐
`;
reply(chatEqual);
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
return;
}
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 20) + 10;
const limLoose = Math.floor(Math.random() * 10) + 5;
const chatWon = `*🎮 Tictactoe Game 🎳*
          
🎉 El ganador es @${winnerJID} 👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
Fg.sendMessage(from, chatWon, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
} else {
const chatMove = `T I C T A C T O E  G A M E

INFO
  Jugador ❎ : @${moving.X}
  Jugador2 ⭕ : @${moving.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Girar : @${moving.turn == "X" ? moving.X : moving.O}

Escribe *rendirse* para dejar de jugar
Escribe ${prefix}delttc para eliminar la sesión del juego!
`;
Fg.sendMessage(from, monospace(chatMove), MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
}

if ((senderNumber) && ["Rendirse", "rendirse"].includes(budy) && !isCmd) {
orangnye = sender
teks = `@${orangnye.split("@")[0]} Rendirse\n_jajaja xd_`
if (fs.existsSync("./libreria/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./libreria/tictactoe/db/" + from + ".json");
mentions(teks,[sender],true)
  } else {
reply(`✳️ No hay sesión en curso`);
  }
}
      

//-------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣------
const linkwa = 'https://chat.whatsapp.com/'
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAntilink) return
    if (!isBotGroupAdmins) return reply('🤨 Por suerte no soy  admin, asi que no te expulsare')
    if (isGroupAdmins) return //reply(`✳️ Los *Admins* son libres 😎`)
    linkgp = await Fg.groupInviteCode (from)
    if (budy.includes(`${linkwa}${linkgp}`)) return //reply('✳️ Menos mal que este enlace es de este grupo v:')
    if (budy.includes(`https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA`)) return reply('✳️ Menos mal que este enlace es del grupo *📲💻ANDROID WORLD🎬🎮* v:')
		Fg.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('Adios')
		}, 1100)
		setTimeout( () => {
		Fg.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`❎ No permitimos enlaces de otros grupos!\nLo siento *${pushname}* seras expulsado`)
		}, 0)
	}



//---𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘------
if (vn) {
await Fg.updatePresence(from, Presence.recording)
} else if (ngetik) {
await Fg.updatePresence(from, Presence.composing)
}



//---Colores 
colors = ['red','white','black','blue','yellow','green']

//---Tipo de mensaje 
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')


//---𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗘𝗡 𝗖𝗢𝗡𝗦𝗢𝗟𝗔
if (!isGroup && isCmd) console.log(color('[FG98]','aqua'), "Pv", color(command, "blue"), "de", (sender.split('@')[0]),  args.length)
if (isGroup && isCmd) console.log(color('[FG98]','aqua'), "Gp", color(command, "green"), "de", (sender.split('@')[0]), "en", (groupName), args.length)

//----------- 𝗩𝗘𝗥 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗜́𝗦𝗧𝗜𝗖𝗔𝗦---------
let prem_ = '❎'
			if (isPremium) {
			prem_ = '✅'
			} 
			if (isOwner) {
			prem_ = 'VIP'
			}
let public_ = 'Privado'
           if (public){
           public_ = 'Publico'
          }
let antidel_ = 'Inactivo'
           if (antidel){
           antidel_ = 'Activo'
          }
let Welcome_ = 'Inactivo'
			if (isWelcom) {
			Welcome_ = 'Activo'
			}
let AntiLink_ = 'Inactivo'
			if (isAntilink) {
			AntiLink_ = 'Activo'
			}
			
//--- Total comandos usados
const cmdadd = () => {
	hit[0].totalcmd += 1
	fs.writeFileSync('./data/totalhit.json', JSON.stringify(hit))
}
  if (isCmd) cmdadd()
  const reqcmd = JSON.parse(fs.readFileSync('./data/totalhit.json'))[0].totalcmd

//------------------------
let authorname = Fg.contacts[from] != undefined ? Fg.contacts[from].vname || Fg.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = pushname }	
			
			
//------------ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 2 FG98---------
const sendSticker = (from, filename, mek) => {
        Fg.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}

//-------------𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 Lexa---------
function addMetadata(packname, author) {	
if (!packname) packname = 'FG98'; if (!author) author = 'Bot';	
author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./data/stickers/${name}.exif`)) return `./data/stickers/${name}.exif`
const json = {	
	"sticker-pack-name": packname,
	"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

let len = JSON.stringify(json).length	
let last	

if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	

if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	

const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

fs.writeFile(`./data/stickers/${name}.exif`, buffer, (err) => {	return `./data/stickers/${name}.exif`	
})	
}

//----𝗩𝗢𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦

if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./data/fgvote/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./data/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : `${owner}@s.whatsapp.net`
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Has votado', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./data/fgvote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Voto* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Razón*: ${_votes[0].reason}\n*Numero de votos* : ${vote.length} Votos\n*Duración* : ${_votes[0].durasi} Minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./data/fgvote/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./data/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : `${owner}@s.whatsapp.net`
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Has votado', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./data/fgvote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Voto* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Razón*: ${_votes[0].reason}\n*Numero de votos* : ${vote.length} Votos\n*Duración* : ${_votes[0].durasi} Minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}		


//-- 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦

switch(command) {
	
case 'help': 
case 'menu':
if(menusimpel == false){
tag = owner.split('@')[0]
mjid = owner
waa = wa.split('@')[0]
mjud = wa
const premm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
let cekvipp = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const premi = isPremium ? `${cekvipp.days} day ${cekvipp.hours} hour ${cekvipp.minutes} minute ${cekvipp.seconds} second`:'Not Premium'
UReg = `${_user.length}`
UPrem = `${premium.length}`
THit = `${reqcmd}`
limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
blan = `${getBalance(sender, balance)}`
usrr = `${sender.split("@")[0]}`
runn = process.uptime()
njing = `${kyun(runn)}`
Fg.sendMessage(from, help(prefix,pushname,usrr,tag,wa,THit,njing,premm,premi,limm,glimm,blan), text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Hallo ${pushname}\nS e n. (@021Fgu_) •Instagram Story's`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
                "thumbnail": gambar3,
                "sourceUrl": `chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA`
},mentionedJid:[mjid,sender,mjud]}, quoted : mek})
}
else if(menusimpel = true){
reply(menus(prefix, pushname, hari))
}
break


//--- verificación  api funciona
case 'verify':
case 'reg':
case 'verificar':
case 'register':
case 'daftar':
			if (isVerify) return reply('*✳️ Tu ya te has verificado  😑*')
					const seriTod = bikinSerial(10)
					
				try {
				ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
				}
				fgfoto = 'https://i.ibb.co/Y8SgKyG/3-38707-league-of-legends-evelynn-kda.jpg' //cambia como quieras, puedes subirlo a imgbb.com
				veri = sender
				_user.push(sender)
				fs.writeFileSync('./data/register.json', JSON.stringify(_user))
				adduserUser(sender, seriTod)

			capt = `╭──「 *VERIFICADO* 」
├ *Nombre:* _${pushname}_
├ *Num:* _wa.me/${sender.split("@")[0]}_
├ *Hora:* _${hora2}_
├ *Usuarios Verificados:* _${_user.length}_
╰─────「 *${Fg.user.name}* 」
\nVerificación completa usa *${prefix}Help* para ver el Menu`

  let regis = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_user.length}&seri=${seriTod}&pp=${ppimg}&bg=${fgfoto}`)
                Fg.sendMessage(from, regis, MessageType.image, {quoted: mek, caption: capt, contextInfo: {'mentionedJid': [sender]}})
                break 
	

case 'delvote':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if(!mek.key.remoteJid) return
if(isVote) return reply(`✳️ Sin sesión de votación`)
delVote(from)
reply(`✳️ Eliminación exitosa de la sesión de votación en este grupo`)
break

case 'voting': 
case 'vote':
case 'votacion':
case 'votación':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if(!isGroupAdmins) return 
if(!isGroup) return reply(group())
if (isVote) return reply(`✳️ Sesión de votación en curso en este grupo`)
if(!value) return reply(`✳️ *Votación*\n\n 📌 Ejemplo ${prefix + command} @taguser | razón  | 1     (1 = 1 Minutos)`)
if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('|')
if(!Number(split[2])) return reply(`✳️ ingrese un número en la fila 3  Esto la duración de la votación\n📌 Ejemplo : 1-60\n1 = 1 Minuto`)
await mentions('Voto ' +'@'+ id.split('@')[0]+' Al inicio' +'\n\n' + `vote = ✅\ndevote = ❌\n\nRazón: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'serbot':
case 'jadibot':
   if (!isOwner) return reply(ownerB())
    jadibot(reply,Fg,from)
    break
    
    case 'stopbot':
    case 'stopjadibot':
    if (!isOwner) return reply(ownerB())
    stopjadibot(reply)
    break
    case 'listbot':
    case 'listabots':
    case 'listbots':
     if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    let tekss = 'Lista de Bots\n'
    for(let i of listjadibot) {
    	
    tekss += `*Numero* : ${i.jid.split('@')[0]}
*Nombre* : ${i.name}
*Dispositivo* : ${i.phone.device_manufacturer}
*Modelo* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break

case 'sc': 
case 'script':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
reply(`📌 Usa este script : https://github.com/FG98F/fgbotv3`)
break

case 'tutorial':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if(args[0] == 'convert'){
conv = `${convrt(prefix , pushname)}`
reply(conv)
}else if(args[0] == 'download'){
don = `${donld(prefix , pushname)}`
reply(don)
}else if(args[0] == 'game'){
gm = `${gem(prefix , pushname)}`
reply(gm)
}else if(args[0] == 'session'){
sss = `${sess(prefix , pushname)}`
reply(sss)
}else if(args[0] == 'group'){
gp = `${gc(prefix , pushname)}`
reply(gp)
}else{
reply(`✳️ Formato erróneo!!\n\nExample ${prefix + command} group\n\n Opciones\n  • convert\n  • download\n  • session\n  • game\n  • group`)
}
break


case 'buscarmensaje':
case 'buscarmsg':
case 'searchmsg':
if(!isOwner)return reply(ownerB())
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Ingrese que el mensaje para buscar\n\n*📌 Ejemplo :*\n • ${prefix + command} hola|2`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 10) return reply('❎ Mínimo 10')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await Fg.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply(`❎ Mensaje no encontrado`) 
if (cok.messages.length < parseInt(batas)) reply(`🔍 Solo encontrado ${cok.messages.length - 1} Mensajes`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
Fg.sendMessage(from, `✅ Este chat!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(`*❎ No se encontró el mensaje que buscaba!*`)
}
} else {
reply(`❎ Lo sentimos Ocurrió un Error`)
}
break


case 'runtime':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
uptime = process.uptime()
runte =`「 *TIEMPO DE EJECUCION* 」
 ${kyun(uptime)}`
replyLink(runte)
break
 
case 'status':
case 'estado':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
stat = `*「 ESTADO DEL BOT 」*
*🛡️ Modo* : ${public_}
*🚫 Antidelete* : ${antidel_}`
reply(stat)
break
		
			           
case 'speed':
case 'ping': 
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`🟢 *Velocidad* : ${latensi.toFixed(4)} _Segundos_`)
break

//𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 
									
case 'stiker': 
case 's': 
case 'stikergif':
case 'sticker': 
case 'stickergif': 
case 'sgif':  
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await Fg.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
var mantap1 = await convertSticker(bas641, `💎 @fg98._`, `🔮 DyLux ┃ ᴮᴼᵀ `)
var st = new Buffer.from(mantap1, 'base64');
Fg.sendMessage(from, st, sticker, {quoted: mek})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.
contextInfo : mek
const media2 = await Fg.downloadAndSaveMediaMessage(encmedia2, `./sticker/${sender}`)
const packname101 = `DyLux Bot\n\n\n\n     FG98`  //animados
const author101 = args.join(' ')
exif.create(packname101, author101, `stickwm_${sender}`)
reply(wait())
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❎ Falló, en el momento de la conversión ${tipe} a la pegatina`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`  *STICKER MAKER*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia una imagen con *${prefix + command}* o etiqueta una imagen que se haya enviado, *Videos 1-9 segundos*\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}s\n${prefix}sticker\n${prefix}stickergif\n${prefix}sgif`)
}
break         



//////𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 𝗦𝗪𝗠 𝗻𝗼𝗺𝗯𝗿𝗲 | 𝗮𝘂𝘁𝗼𝗿
case 'stiker2': 
	case 'sticker2':
    case 'swm': 
    case 'stickergif2':
    case 's2':
    case 'sgif2':
        if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
if (!value.includes('|')) return reply(`✳️Envia una imagen con *${prefix + command}* Nombre|Autor`)
if(!value)return reply(`✳️Envia una imagen con *${prefix + command}* Nombre|Autor`)
let media = await Fg.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = value.split('|')[0]
var author = value.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
	} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var pembawm = args.join('')
let media = await Fg.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(wait())
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else  {
reply(`  *STICKER MAKER*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia una imagen con *${prefix + command}* Nombre | Autor \o etiqueta una imagen que se haya enviado, *Videos 1-9 segundos*\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}s2\n${prefix}sticker2\n${prefix}stickergif2\n${prefix}swm`)
}
limitAdd(sender, limit)
break

                    
case 'emoji':
                   case 'semoji':
                   case 'smoji':
                   case 'jumbo':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*EMOJI A STICKER*\n──────────────\n✳️ Ingrese el emoji\n\n📌 Ejemplo : *${prefix + command}* 😜\n\n\nAlias del comando\n${prefix}emoji\n${prefix}semoji\n${prefix}jumbo\n${prefix}smoji`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'exif':
if (!isOwner)return reply(ownerB())
if (args.length < 1) return reply(`✳️ Uso del comamdo \n\n📌 ${prefix + command} nombre|autor`)
if (!arg.split('|')) return reply(`✳️ Uso del comamdo \n\n📌 ${prefix + command} nombre|autor`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply(`✅ Nombre y autor guardado\n\n📌Use el comando ${prefix}stickfg`)
break
	        
case 'stickfg':
case 'fgstick':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
const encmediia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const meidia = await Fg.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break

//-----

   case  'trigger': 
       case 'triggered':
					case 'ger':
					case 'motivado':
					case 'motivada':
					 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
		case  'sgay':
		case  'gay2':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
		
		case  'passed':
		case  'aprobado':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
					
		case  'jail':
		case  'scelda':
		case  'celda':
		case  'carcel':
		case 'scarcel':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
		
		case  'wasted':
		case  'desperdiciado':
		case  'desperdiciada':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break 
		
					
					case 'red':
					case 'rojo':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
				 break

case 'take':
         case 'takestick':
         case 'robar':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isQuotedSticker) return reply(`✳️ Responde a un sticker\n\n*USO DEL COMAMDO*\n*${prefix + command}* Nombre|Autor\n\n📌Ejemplo *${prefix + command}* Memes|FG98`)
var pembawm = args.join('')
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await Fg.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
if (!value) return reply(`✳️ Uso del comamdo\n\n*${prefix + command}* Nombre|Autor`)
if (!value.includes('|')) return reply(`✳️ Uso del comamdo\n\n*${prefix + command}* Nombre|Autor`)
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break
				

case 'urltoimg':
case 'urlaimg':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!value)return reply('✳️ Ingrese un link de una imagen junto al comando')
reply(wait())
sendMediaURL(from,`${value}`)
limitAdd(sender, limit)
break

case 'tourl':
case 'aurl':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  Fg.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('e4bb5222011a8521cc60ce61a2aa1f98', media)
.then(data => {
var caps = `❒ 「 *IMAGEN A URL* 」

➸ *ID :* ${data.id}
➸  *Tipo :* ${data.image.mime}
➸ *Extension :* ${data.image.extension}
➸ *URL :* ${data.display_url}`
			ibb = fs.readFileSync(media)
Fg.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
})
.catch(err => {
throw err 
})
limitAdd(sender, limit)
break
case 'tourl2':
case 'aurl2':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadMediaMessage(boij)
            fgurl = await upload(owgi)
            reply(fgurl)
            } else {
            reply('✳️Responde a un video o imagen')
            }
            break	

case 'tovn': 
case 'toav':
case 'toaudio':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
if (!isQuotedAudio && !isQuotedVideo) return reply(`✳️ Responde a un audio o vídeo`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,quoted : mek})
fs.unlinkSync(media)
break

case 'tomp3': 
case 'amp3':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
Fg.updatePresence(from, Presence.composing)
if (!isQuotedVideo && !isQuotedAudio) return reply(`MP4 a MP3\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n🎥 Envia un video con el comando *${prefix + command}* o etiqueta un video  que se haya enviado`)
reply(wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(errofg(prefix))
buffer = fs.readFileSync(ran)
Fg.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
									
case 'tovid':
case 'tomp4':
case 'amp4': 
case 'tovideo':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
	reply(wait())
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            	
            sendMediaURL(from,res.result,'✅ Aquí tienes')
            })
            }else {
            reply('✳️ Responde a un sticker animado')
            }
            fs.unlinkSync(owgi)
            
limitAdd(sender, limit)
break
						 
case 'togif':
case 'agif':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply('Reply stiker nya')
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)
reply(wait())
console.log(memek)
anu = await getBuffer(memek.result)
Fg.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: '✅ Aquí tienes', quoted: mek})
limitAdd(sender, limit)
break
						//---
						case 'ttp':  
                  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())     
                    if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix}ttp* DyLux`)
                    reply(wait())
                    F = value
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=${lolkey}&text=${F}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    break

	case 'attp':
	              if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
					  reply(wait())
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					Fg.sendMessage(from, attp, sticker, {quoted: mek})
					  limitAdd(sender, limit)
break
					
					case 'attp2':  
                  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())     
                    if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
                    reply(wait())
                    F = value
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/attp?apikey=${lolkey}&text=${F}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
						
case 'toimage': 
case 'toimg':
case 'aimg':
case 'aimagen':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply(`STICKER a IMAGEN\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n✳️ Responde a un sticker con el comando\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}toimg\n${prefix}aimg`)
					reply(wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' ❎ Error al convertir Sticker a imagen ')
						buffer = fs.readFileSync(ran)
						Fg.sendMessage(from, buffer, image, {quoted: mek, caption: '✅ Aqui tienes'})
						fs.unlinkSync(ran)
					})
limitAdd(sender, limit)
break
//----𝗔𝗦𝗨𝗣𝗔𝗡 
case 'asupan':
 if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if(!isGroup)return reply(group())
po1 = Fg.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*Asupan Lista :v*",
"description": `\nElija uno a continuación..`,
"buttonText": "Click Aquí!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "Asupan",
      "rows" :[
        {
          "title": "indonesia",
          "rowId": ""
        },
        { 
          "title": "indonesia2",
          "rowId": ""
        }
        ]
  }
  ]
}}, {quoted : mek}) 
Fg.relayWAMessage(po1)
limitAdd(sender, limit)
break
case 'indonesia':
              if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            reply(wait())
            ojan = await fetchJson(`https://janbotz-api.herokuapp.com/api/asupan/santuy?apikey=ojan`)
     		pideo = await getBuffer(ojan.result.url)
	    	Fg.sendMessage(from, pideo, video, {quoted: mek, caption: '✅Aquí tienes'})
			limitAdd(sender, limit)
            break
          
          case 'indonesia2':
			   if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            reply(wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    buffer = await getBuffer(get_result.result)
                    
                   Fg.sendMessage(from, buffer, video, { quoted: mek})
                   limitAdd(sender, limit)
                    break
                    
//-- Verdad Roto

case 'verdad':
if (!isGroup) return reply(group())
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const verdad = _verdad[Math.floor(Math.random() * _verdad.length)]
  reply(`‣ *Verdad*\n\n${verdad}`)
break

//-- Tod reto
case 'reto':
if (!isGroup) return reply(group())
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const reto = _reto[Math.floor(Math.random() * _reto.length)]
  reply(`‣ *Reto*\n${reto}`)
break



//--- texto a voz
case 'tts':
case 'voz': 
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 
				if (args.length < 1) return Fg.sendMessage(from, `❎ Ingrese el código de idioma y el texto\n\n*Ejemplo* : ${prefix}tts es Hola puercos`, text, {quoted: mek})
				const gtts = require('./libreria/gtts')(args[0])
				if (args.length < 2) return Fg.sendMessage(from, `❎ Ingrese el texto\n\n*Ejemplo* : ${prefix}tts es Hola puercos`, text, {quoted: mek})
				dtt = body.slice(8)
				
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
				? reply('❎ El texto es demasiado largo, tampoco de voy a leer la Biblia')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buff = fs.readFileSync(rano)
				if (err) return reply('❎ Lo siento ocurrió un error')
				Fg.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
				fs.unlinkSync(rano)
				})
				})
break

//******************** 》 MAKER 《 ********************\\

			

case 'blackpink':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
reply(wait())
bp = args.join(" ")
bp = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=${Vkey}&text=${bp}`)
Fg.sendMessage(from,bp,image,{quoted:mek})
limitAdd(sender, limit)
break
			
		
			
//******************** 》DOWNLOAD 《 ********************\\
  


//CAN BE USED AFTER UPDATE LAST BAILEYS
case 'play':
if (!isGroup)return reply(group())
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(wait())
let yut = await yts(value)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `*P L A Y*\n\n Title : ${title}\n\n Size : ${filesizeF}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, capti)
ya = await getBuffer(thumb)
py =  await Fg.prepareMessage(from, ya, image)
gbutsan = [
{buttonId: `${value}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `${value}`, buttonText: {displayText: 'VIDEO'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: capti,
footerText: 'Pilih di bawah y bang',
buttons: gbutsan,
headerType: 4
}
await Fg.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:mek})
})
break


case 'playmp3': {
if (!isGroup)return reply(group())
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
try {
reply('_Lagu yang anda cari Sedang DiProsess.._')
let yut = await yts(value)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

const captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
}
break

case 'playmp4':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
try {
reply(wait())
let yut = await yts(value)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A Y  M P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
                       
const mp4 = `
*PLAY MP4*\n\nData DiTemukan!\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Url : ${yut.videos[0].url}\n\n_Tunggu Sebentar File sedang Di Kirim!!_`
sendMediaURL(from, thumb, mp4)
sendMediaURL(from, dl_link, '')
limitAdd(sender, limit)
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error)
}}
break
         
case 'playvid':   
if (!isGroup) return reply(group())
if (!value) return reply(`Example : _${prefix + command} Melukis Senja_`)
reply(wait())
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${value}&apikey=${Vkey}`)
if (anu.error) return reply(anu.error)
infomp3 = `*「 PLAY VIDEO 」*\n\n⌬  *Judul : ${anu.result.title}*\n⌬  *Source : ${anu.result.source}*\n⌬  *Durasi : ${anu.result.duration}*\n⌬  *Quality : ${anu.result.quality}*\n⌬  *Size : ${anu.result.size}*\n\n*[Wait] Tunggu Sebentar..*`
buffer = await getBuffer(anu.result.thumbnail)
buffer1 = await getBuffer(anu.result.url_video)
Fg.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
Fg.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Nih Gan'})
break 
		
case 'joox':   
if (!isGroup) return reply(group())
if (!value) return reply(`Example : _${prefix + command} Melukis Senja_`)
reply(wait())
kntl = await fetchJson(`https://api.zeks.xyz/api/joox?apikey=${Vkey}&q=${value}`)
if (kntl.error) return reply(kntl.error)
infomp3 = `*「 JOOX MUSIC 」*\n\n⌬  *Judul : ${kntl.data[0].judul}*\n⌬  *Album : ${kntl.data[0].album}*\n⌬  *Artis : ${kntl.data[0].artist}*\n⌬  *Size : ${kntl.data[0].size}*\n\n\n*[Wait] Tunggu sebentar kak..*`
buffer = await getBuffer(kntl.data[0].thumb)
Fg.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
lagu = await getBuffer(kntl.data[0].audio)
Fg.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${kntl.data[0].audio}.mp3`, quoted: mek})
break

case 'tiktok':
if(!value) return reply('Masukkan linknya!')
reply(wait())
try{
data = await  fetchJson(`https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${value}`)
buff = await  getBuffer(data.result.media_resources.image.contentUrl)
cap = monospace(`T I K T O K  D O W N L O A D E R`) + '\n\n'
cap += shp + ' Username : ' + data.result.author_metadata.username + '\n'
cap += shp + ' Judul : ' + data.result.media_metadata.title.split(' |')[0] + '\n'
cap += '\n\n'
cap += monospace('V I D E O  I N F O') + '\n\n'
cap += shp + ' Durasi : ' + data.result.media_resources.video.duration + 'Detik \n'
cap += shp + ' Kualitas : ' + data.result.media_resources.video.quality + '\n'
cap += shp + ' Width : ' + data.result.media_resources.video.width + '\n'
cap += shp + ' Height : ' + data.result.media_resources.video.height + '\n'
cap += shp + ' Ratio : ' + data.result.media_resources.video.ratio + '\n'
cap += '\n\n'
cap += monospace('S O U N D  I N F O') + '\n\n'
cap += shp + ' Judul : ' + data.result.media_resources.music.title + '\n'
cap += shp + ' Author : ' + data.result.media_resources.music.authorName + '\n'
cap += shp + ' Durasi : ' + data.result.media_resources.music.duration + 'Detik \n'
tta = await Fg.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${value}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${value}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${value}`, buttonText: {displayText: 'MUSIC'}, type: 1}
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: 'Pilih di bawah y bang',
buttons: gbutsan,
headerType: 4
}
await Fg.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:mek})
}catch{
	reply(mess.error)
}
break

case 'tiktokwm':
if (!isGroup) return reply(group())
if (!value) return reply(`Example : ${prefix + command} https://vt.tiktok.com/ZSJxamaTs/`)
reply(wait())
buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${lolkey}&url=${value}`)
Fg.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
					
case 'tiktoknowm':
if (!isGroup) return reply(group())
if (!value) return reply(`Example : ${prefix + command} https://vt.tiktok.com/ZSJxamaTs/`)
reply(wait())
ttnwm = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${lolkey}&url=${value}`, {method: 'get'})
if (anu.error) return reply(anu.error)
tt = `「 *TIKTOK NO WM* 」\n\n*Judul:* ${ttnwm.result.title}\n*Keywords:* ${ttnwm.result.keywords}\n*Desc:* ${ttnwm.result.description}`
 buff = await getBuffer(ttnwm.result.link)
 Fg.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: mek,caption : tt})
break

case 'ig':
if (!isGroup) return reply(group())
if (!value)return reply(`Example : ${prefix + command} [Link]`)
reply(wait())
y = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=${value}`)
t = `*「 IG DOWNLOADER 」*\n\n*Deskripsi :* ${y.capt}`
sendMediaURL(from,y.result[0].url,t)
break
					
case 'igstory':
if(!value) return reply(`Example : ${prefix}igstory n.lidiawaty|1`)
usrnm = value.split('|')[0]
jmlh = value.split('|')[1]
if(!jmlh) return reply(`Format Salah!\nExample : ${prefix + command} n.lidiawaty|1`)
if(isNaN(jmlh)) return reply('Jumlah harus berupa angka!')
reply(wait())
data = await axios.get(`http://lolhuman.herokuapp.com/api/igstory/${usrnm}?apikey=${lolkey}`)
for(let i=0; i<jmlh; i++){
sendMediaURL(from, data.data.result[i], `Instagram Story ${usrnm}`)
}
break

case 'fb': 
case 'facebook':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!value) return reply(`Kirim perintah *${prefix}fb* url`)
reply(wait())
fbdl(value)
.then((res) => {
sendMediaURL(from, res.result.links[0].url)
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(ownerNumber, 'FB Error : ' + err)
console.log(color('[FB]', 'red'), err)
reply(mess.error.api)
})
}
break
			
case 'ytmp4':
if (!isGroup) return reply(group())
if (!value)return reply(`Example : ${prefix + command} [Link]`)
mp4 = await fetchJson(`http://zekais-api.herokuapp.com/ytmp4?url=${value}`)
if (mp4.error) return reply(mp4.error)
ytt3 = `「 *YOUTUBE MP4* 」\n\n▢ *Judul :* ${mp4.title}\n▢ *Size : ${mp4.size}*\n▢ *Ext: Mp4*\n▢ *Quality : ${mp4.quality}*\n▢ *Like : ${mp4.likes}*\n▢ *Dislike : ${mp4.dislike}*\n▢ *Views : ${mp4.views}*\n▢ *Upload : ${mp4.uploadDate}*\n\n*[ Wait ]Tunggu Sebentar kak...*`
buff = await getBuffer(mp4.thumb)
reply(wait())
Fg.sendMessage(from, buff, image, {quoted: mek, caption: ytt3})
sendMediaURL(from,mp4.result,`「 *YOUTUBE MP4* 」\n*Data Berhasil diDapatkan!*\n\n▢ *Judul : ${mp4.title}*\n▢ *Size : ${mp4.size}*\n▢ *Ext: Mp4*\n▢ *Quality : ${mp4.quality}*\n▢ *Like : ${mp4.likes}*\n▢ *Dislike : ${mp4.dislike}*\n▢ *Views : ${mp4.views}*\n▢ *Upload : ${mp4.uploadDate}*`)
break 

case 'ytmp3':
if (!isGroup) return reply(group())
if (!value)return reply(`Example : ${prefix + command} [Link]`)
ppec = await fetchJson(`http://zekais-api.herokuapp.com/ytmp3?url=${value}`)
if (ppec.error) return reply(ppec.error)
ytt = `「 *YOUTUBE MP3* 」\n\n▢ *Judul :* ${ppec.title}\n▢ *Size : ${ppec.size}*\n▢ *Ext: Mp3*\n▢ *Like : ${ppec.likes}*\n▢ *Dislike : ${ppec.dislike}*\n▢ *Views : ${ppec.views}*\n▢ *Upload : ${ppec.uploadDate}*\n\n*[ Wait ]Tunggu Sebentar kak...*`
buff = await getBuffer(ppec.thumb)
reply(wait())
Fg.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
sendMediaURL(from,ppec.result)
break 
				
case 'ytsearch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
try {
	var aramas = await yts(srch);
	} catch {
return await Fg.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += `❏ Use Dowbload Typing ${prefix}ytmp3 [Link] Or ${prefix}ytmp4 [Link]` +'\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *BOT*'
Fg.sendMessage(from,tbuff,image,{quoted:mek,caption:ytresult})
limitAdd(sender, limit)
break
				
//******************** 》 SEARCH 《 ********************\\
			
case 'searchmusic':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isGroup) return reply(group())
if (isQuotedAudio){
const dlfile = await Fg.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
const bodyForm = new FormData()
bodyForm.append('audio', dlfile, 'music.mp3')
bodyForm.append('apikey', `${Vkey}`)
axios('https://api.zeks.xyz/api/searchmusic', {
method: 'POST',
headers: {
"Content-Type": "multipart/form-data",
...bodyForm.getHeaders()
},
data: bodyForm
})
.then(({data}) =>{
if (data.status){
reply(`*「 Search Music 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
} else reply(data.message)
}).catch(() => reply('Internal server error!, try again later'))
} else {
reply('Wrong format!')
}
limitAdd(sender, limit)
break
				
case 'covidindo':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
anu = await fetchJson('https://lindow-api.herokuapp.com/api/covidindo?apikey=LindowApi')
covid = `❒ *「 Covid Indo 」* ❒ \n\n*Total Kasus : ${anu.result.positif}*\n*Total Sembuh : ${anu.result.sembuh}*\n*Di Rawat : ${anu.result.dirawat}*\n*Total meninggal : ${anu.result.meninggal}*`
reply(covid)
limitAdd(sender, limit)
break
					
case 'covid':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!value) return reply(`Example : ${prefix + command} japan`)
cvd = await fetchJson(`http://zekais-api.herokuapp.com/corona?country=${value}`)
copid = `❒ *「 Covid ${value} 」* ❒ \n\n*Total Kasus :* _${cvd.result.total_case}_\n*Total Meninggal :* _${cvd.result.total_deaths}_\n*Total Sembuh :* _${cvd.result.total_tests}_\n*Kasus Hari Ini :* _${cvd.result.today_cases}_\n*Meninggal Hari Ini :* _${cvd.result.today_deaths}_\n*Total Dirawat :* _${cvd.result.total_active}_`
reply(copid)
limitAdd(sender, limit)
break
					
case 'covidglobal':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
cvdg = await fetchJson(`https://jar-api.xyz/api/covidworld?apikey=${ai}`)
coped = `❒ *「 Covid World 」* ❒ \n\n*Total Kasus :* _${cvdg.result.totalCases}_\n*Total Meninggal :* _${cvdg.result.deaths}_\n*Total Sembuh :* _${cvdg.result.recovered}_\n*Kasus Tertutup :* _${cvdg.result.closedCases}_\n*Total Dirawat :* _${cvdg.result.activeCases}_`
reply(coped)
limitAdd(sender, limit)
break
				
case 'lirik':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isGroup) return reply(group())
if(!value) return reply(`Example : ${prefix + command} melukis senja`)
lrk = await fetchJson(`http://zekais-api.herokuapp.com/lirik?query=${value}`)
lirik = `❒ *「 Lirik Lagu 」* ❒ \n\n*Judul : ${lrk.title}*\n*Author : ${lrk.author}*\n\n*Lirik :* \n${lrk.lirik} `
buf = await getBuffer(lrk.thumb)
Fg.sendMessage(from,buf,image,{quoted:mek,caption:lirik})
limitAdd(sender, limit)
break
				
//******************** 》 STALKER 《 ********************\\

case 'igstalk':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isGroup) return reply(group())
if (!value)return reply(`Example : ${prefix + command} Livyrenata`)
reply(wait())
igst = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${value}`)
ig = `*I N S T A G R A M  S T A L K*

 *Username : ${igst.data.username}*

 *Full Name : ${igst.data.fullname}*

 *Followers : ${igst.data.follower}*

 *Following : ${igst.data.following}*

 *BIO : ${igst.data.bio}*`
buff = await getBuffer(igst.data.profilehd)
Fg.sendMessage(from, buff, image,{quoted:mek,caption:ig})
limitAdd(sender, limit)
break


case 'tiktokstalk':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isGroup) return reply(group())
if (!value)return reply(`Example : ${prefix + command} Jessnolimit`)
reply(wait())
ttst = await fetchJson(`http://zekais-api.herokuapp.com/tiktokstalk?query=${value}`)
ig = `*T I K T O K  S T A L K*

 *Username : ${ttst.username}*

 *Nick Name : ${ttst.nickname}*

 *Video : ${ttst.videoCount}*

 *Likes : ${ttst.likes}*

 *Followers : ${ttst.follower}*

 *Following : ${ttst.following}*

 *BIO : ${ttst.bio}*`
buff = await getBuffer(ttst.prof_pic)
Fg.sendMessage(from, buff, image,{quoted:mek,caption:ig})
limitAdd(sender, limit)
break

//******************** 》 OWNER CMD 《 ********************\\
case 'setshape':
if (args.length < 1) return
if (!isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
shpp = args[0]
confi.shape.Fg = shpp
fs.writeFileSync('./data/settings.json', JSON.stringify(confi, null, '\t'))
reply(`Shape berhasil di ubah menjadi : ${shpp}`)
break

case 'setprefix':
if (!isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} # (Custom!)\n\n*Thanks To : ${fake}*`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${value}`){
multi = false
nopref = false
single = true
prefa = `${value}`
reply(`_Succses mengganti Prefix ke ${value}_`)
}
break
			
case 'clearall':{
if (!isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
let chiit = await Fg.chats.all()
for (let i of chiit){
Fg.modifyChat(i.jid, 'delete', {
includeStarred: false
  })
}
reply(`*_Succses_*`)
  }
break

// List Group ( MyMans APIs & Nurutomo )
case 'listgroup': case 'grouplist': case 'listgc':
const txs = Fg.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`*Nama Group : ${Fg.getName(v.jid)}*\n*Id Group : ${v.jid}*\n*Status : ${v.read_only ? 'Left' : 'Joined'}*`).join`\n\n`
reply('*List Group*\n\n' + txs)
break

case 'anticall':
if (!isOwner) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('Sudah di NonAktifkan sebelumnya!')
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break

case 'antidelete':
if (!isOwner) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break
                
case 'bc':
if (!isOwner)return reply(ownerB()) 
if (!value)return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
bcc = await Fg.chats.all()
if (isMedia && !mek.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Fg.downloadMediaMessage(encmedia)
for (let i of bcc){
Fg.sendMessage(i.jid, media, image, {contextInfo: { forwardingScore: 9999, isForwarded:true},caption: `*「 RAPAA BROADCAST 」*\n\n${value}`})
}
reply(`Sukses`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Fg.downloadMediaMessage(encmedia)
for (let _ of bcc) {
Fg.sendMessage(_.jid, bc, video, {caption: `*「 Fgu BROADCAST 」*\n\n${value}`})
}
reply('Suksess broadcast')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `*「 Fgu BROADCAST 」*\n\n${value}`)
	}
reply(`Succses BroadCast ${totalchat.length} Total chat`)
		}
break
					
case 'owner': case 'creator':
Fg.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact ,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: false,
"externalAdReply": {
                "title": `S e n. (@021Fgu_) •Instagram Story's`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
                "thumbnail": gambar3,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
.then((res) => Fg.sendMessage(from, 'Nih kontak ownerku', text, {quoted: res}))
break



case 'self':
if (!isOwner)return reply(ownerB()) 
if(!public)return reply('*_Fitur sudah diaktifkan sebelumnya!_*')
public = false
return reply(  `*Mode : Self*`, text)
break

case 'public':
if (!isOwner)return reply(ownerB()) 
if(public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')
public = true
return reply(`*Mode : Public*`, text)
break

case 'autoread':
if (!isOwner)return reply(ownerB()) 
if ((args[0]) === 'on') {
if(aread)return reply('_Sudah diaktifkan sebelumnya_')
aread = true
return reply(  `*Auto Read On!*`, text)
} else if ((args[0]) === 'off') {
if(!aread)return reply('_Sudah dimatikan sebelumnya_')
aread = false
return reply(`*Auto Read Off!*`, text)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
	}
break

case 'listblock':
if (!isOwner) return
let blocked = Fg.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != Fg.user.jid)
    Fg.sendMessage(from, `*List Block*` + `\n` + blocked.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n`, text,{ contextInfo: { mentionedJid: blocked } })
	break
				
//******************** 》 GROUP 《 ********************\\
case 'add':
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
orang = args[0] + '@s.whatsapp.net'
response = await Fg.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
Fg.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
Fg.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
break

case 'radd':
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
Fg.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if(!value)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(Badmin())
y = value.split('@')[1] + '@s.whatsapp.net'
Fg.groupRemove(from, [y])
reply(`Succses kick target!`)
break

case 'rkick':
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Fg.groupRemove(from, mentioned)
break
					
case 'listadmin': case 'atasan': case 'listadmins':
if (!isGroup) return reply(group())
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
	no = 0
	for (let admon of groupAdmins) {
	no += 1
teks += `「 ${no.toString()} 」@${admon.split('@')[0]}\n`
	}
mentions(teks, groupAdmins, true)
break

case 'getlink':
if(!isOwner)return
if(!value)return reply('*Command disertai ID Group!!*')
linkgc = await Fg.groupInviteCode(`${value}`)
reply('https://chat.whatsapp.com/'+linkgc)
break
 
case 'join':
if (isGroup) return reply(group())
if (args.length < 1) return reply(`✳️ Envie el link de tu Grupo\n\n📌 Ejemplo *${prefix + command}* https://chat.whatsapp.com/G5sXrkhJ0pb0Tu8nhWLaFK`)
if (!value.includes('chat.whatsapp.com')) return reply(`❎ asegúrese de que el enlace sea correcto!\n\n📌 Para aprender a usar el comando Escriba *${prefix + command}*`)
//if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.link)
let code = args[0].replace('https://chat.whatsapp.com/', '')
Fg.acceptInvite(code)
.then((res) => {
Fg.sendMessage(res.gid,`*Halo saya ${nama}!*\n_Saya di invit oleh @${sender.split("@")[0]} Untuk masuk ke dalam Group!_\n_Ketik ${prefix}menu untuk Melihat Fitur Bot!_`,text,{contextInfo:{mentionedJid:[sender]} })
reply(`_Succses Join Group!_`)
})
.catch((err) => reply(err))
break

// Set Description Group ( MyMans APIs )
case 'setdesc': case'setdescgc':
if (!isOwner && !isGroupAdmins) return reply(admin())
if(!value)return reply('Mau ganti Deskripsi Group nya apa?')
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroup) return reply(group())
Fg.groupUpdateDescription(from, `${value}`)
Fg.sendMessage(from, 'Succes change description group', text, {quoted:mek})
break

// Set Name Group ( MyMans APIs )
case 'setname': case 'setnamegc':
if (!isOwner && !isGroupAdmins) return reply(admin())
if(!value)return reply('Mau ganti Nama GC nya apa?')
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroup) return reply(group())
Fg.groupUpdateSubject(from, `${value}`)
Fg.sendMessage(from, 'Succes change name group', text, {quoted:mek})
break

case 'linkgroup': case 'linkgc':
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
linkgc = await Fg.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'resetlink': case 'revokelink': case 'revoke':
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply (Badmin())
Fg.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgc = await Fg.groupInviteCode(from)
reply('Succses Revoke!\n\nLink Group new:\nhttps://chat.whatsapp.com/'+linkgc)
break

case 'leave':
if(!isGroup)return reply(group())
if(!isGroupAdmins && !isOwner)return reply(admin())
sendMess(from,`Bye Bye group ${groupName}`)
setTimeout(() => {
Fg.groupLeave(from)
}, 2000);
break
					
case 'infoall': case 'tagall':
if (!isGroupAdmins && !isOwner) return reply(admin())
if(!value) return reply('Ingfonya apa?')
if (!isGroup) return reply(group())
var nom = mek.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┃${shp}  *@${mem.jid.split('@')[0]}*\n`
	members_id.push(mem.jid)
	}
mentions(`┏━━⬣ 𝙄𝙉𝙁𝙊 \n┃\n┃ *From : @${sender.split("@")[0]}*\n┃ *Info :  ${value}*\n┃ *Total Member : ${groupMembers.length}*\n┃ *Nama Group : ${groupName}*\n┃\n┗⬣\n\n┏━━⬣ 𝙏𝘼𝙂 𝘼𝙇𝙇\n┃`+teks+'┃\n┗⬣', members_id, false)
break
					
case 'welcome':
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (args.length < 1) return reply(`*Input Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
if ((args[0]) === 'on') {
	if(isWelcom) return reply('udah on')
	_welcom.push(from)
	fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
	reply(`*_Succses Aktifkan Fitur!_*`)
} else if ((args[0]) === 'off') {
	if (!isWelcom) return reply('udah off')
	_welcom.splice(from, 1)
	fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
reply(`*_Succses NonAktifkan Fitur!_*`)
} else if ((args[0]) === '-help') {
mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} on*\n*${prefix + command} off*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
} else {
reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
}
break

case 'left':
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (args.length < 1) return reply(`*Input Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
if ((args[0]) === 'on') {
	if (isLeft) return reply('udah on')
	left.push(from)
	fs.writeFileSync('./data/left.json', JSON.stringify(_welcom))
	reply(`*_Succses Aktifkan Fitur!_*`)
} else if ((args[0]) === 'off') {
	if (!isLeft) return reply('udah off')
	left.splice(from, 1)
	fs.writeFileSync('./data/left.json', JSON.stringify(_welcom))
reply(`*_Succses NonAktifkan Fitur!_*`)
} else if ((args[0]) === '-help') {
mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} on*\n*${prefix + command} off*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
} else {
reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
}
break

case 'antilink':
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isGroup) return reply(group())
if (args.length < 1) return reply(`*Input Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
if (args[0] == 'on') {
if (_antilink.includes(from)) return reply('*_Sudah Aktif!_*')
_antilink.push(from)
fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
reply('_Sukses mengaktifkan Antilink Whatsapp digroup ini_')
} else if (args[0] == 'off') {
let off = _antilink.indexOf(from)
_antilink.splice(off, 1)
fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
reply('_Sukses menonaktifkan Antilink Whatsapp digroup ini_')
} else if ((args[0]) === '-help') {
mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} on*\n*${prefix + command} off*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
} else {
reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
}
break


case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = Fg.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'banchat':
if (!isGroup) return reply(group())
if (!isOwner)return reply(ownerB()) 
//if (!isBotGroupAdmins) return reply(Badmin())
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./data/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break

case 'unbanchat':
if (!isOwner)return reply(ownerB())
if (!isBanchat) return reply(`udah di UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./data/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
break

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await Fg.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break
case 'enable':
if(!isGroupAdmins && !isOwner)return reply(admin())
if(!isBotGroupAdmins)return reply(Badmin())
if(!isGroup)return reply(group())
if (args.length < 1) return reply(`*Format Salah!*\n\n*Example :*\n • ${prefix + command} welcome\n\n*List Opinion!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
if ((args[0]) === 'welcome') {
	if(isWelcom) return reply('udah on')
	_welcom.push(from)
	fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
	reply(`*_Succses Aktifkan Fitur Welcome!_*`)
}else if((args[0]) == 'antidelete'){
if (antidel === true) return
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
reply('*_Succses Aktifkan Fitur Antidelete!_*')
}else if((args[0]) === 'antilink'){
if (_antilink.includes(from)) return reply('*_Sudah Aktif!_*')
_antilink.push(from)
fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
reply('_Sukses mengaktifkan Antilink Whatsapp digroup ini_')
}else if((args[0]) === 'banchat'){
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./data/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
} else {
reply(`*Input (${args[0]}) Tidak Tersedia!!**\n\n*Example :*\n • ${prefix + command} welcome\n\n*List Opinion!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
}
break

case 'disable':
if(!isGroupAdmins && !isOwner)return reply(admin())
if(!isBotGroupAdmins)return reply(Badmin())
if(!isGroup)return reply(group())
if (args.length < 1) return reply(`*Format Salah!*\n\n*Example :*\n • ${prefix + command} welcome\n\n*List Opinion!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
if ((args[0]) === 'welcome') {
if (!isWelcom) return reply('udah off')
_welcom.splice(from, 1)
fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
reply(`*_Succses NonAktifkan Fitur!_*`)
}else if((args[0]) == 'antidelete'){
if (antidel === false) return
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
}else if((args[0]) === 'antilink'){
let offf = _antilink.indexOf(from)
_antilink.splice(offf, 1)
fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
reply('_Sukses menonaktifkan Antilink Whatsapp digroup ini_')
}else if((args[0]) === 'banchat'){
let ank = bancht.indexOf(from)
bancht.splice(ank, 1)
fs.writeFileSync('./data/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
} else {
reply(`*Input (${args[0]}) Tidak Tersedia!!**\n\n*Example :*\n • ${prefix + command} welcome\n\n*List Opinion!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
}
break

case 'group': case 'grup':
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
if (args[0] === 'open') {
 reply(monospace('Succses Open Group!'))
Fg.groupSettingChange(from, GroupSettingChange.messageSend, false)
	} else if (args[0] === 'close') {
reply(monospace('Succses Close Group!'))
Fg.groupSettingChange(from, GroupSettingChange.messageSend, true)
	} else if ((args[0]) === '-help') {
mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} open*\n*${prefix + command} close*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
} else {
reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
}
break
				
case 'infogc': case 'groupinfo':
case 'infogrup': case 'grupinfo':
Fg.updatePresence(from, Presence.composing)
if (!isGroup) return reply(group())
  try {
	ppUrl = await Fg.getProfilePicture(from)
		} catch {
	ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  	}
y =`*Nama Group : ${groupName}*\n*Dibuat : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*\n*Owner Grup : @${groupMetadata.owner.split('@')[0]}*\n*Total Member : ${groupMembers.length}*\n*Total Admin : ${groupAdmins.length}*\n\n*Welcome : ${isWelcom ? 'Aktif':'NonAktif'}*\n*Left : ${isLeft ? 'Aktif':'NonAktif'}*\n*Antilink : ${isAntilink? 'Aktif':'NonAktif'}*\n\n*Deskripsi Group :*\n ${groupDesc}`
buffer = await getBuffer(ppUrl)
Fg.sendMessage(from, buffer, image, {quoted: mek,caption:y, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
			
case 'pm': case 'promote':
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
Fg.groupMakeAdmin(from, mentioned)
break
					
case 'dm': case 'demote':
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
Fg.groupDemoteAdmin(from, mentioned)
break
					
case 'jadian':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isGroup) return reply(group())
lope = 'https://i.ibb.co/2gXBp4B/9401b0c64ab7.jpg'
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Cieee yang baru jadian @${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]}`
jds.push(akuu.jid)
jds.push(diaa.jid)
y = await getBuffer(lope)
mentions(teks, jds, true)
break

case 'bisakah':
if (!value) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi ganteng`)
const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
reply('Pertanyaan : bisakah ' + value + '\n\nJawaban : ' + keh)
break

case 'kapankah':
if (!value) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi wibu`)
const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
reply('Pertanyaan : kapankah ' + value + '\n\nJawaban : ' + koh)
break

case 'apakah':
if (!value) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply('Pertanyaan : apakah ' + value + '\n\nJawaban : ' + kah)
break

case 'rate':
if (!value) return reply(`Penggunaan ${command} text\n\nContoh : ${command} kegantengan saya`)
const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const te = ra[Math.floor(Math.random() * ra.length)]
reply('Pertanyaan : ' + value + '\n\nJawaban : ' + te + '%')
break

case 'hobby':
if (!value) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Rara`)
const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
reply(`Pertanyaan : hobby` + value + '\n\nJawaban : ' + by)
break

case 'getstatus': case 'getbio':
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await Fg.getStatus(`${mentioned}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Status Profile Not Found")
  } 
} else {
reply('Reply pesan atau tag member')
}
break
				
case 'getpic':
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	try {
	pic = await Fg.getProfilePicture(mentioned[0])
	} catch {
	pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
	}
thumb = await getBuffer(pic)
Fg.sendMessage(from, thumb,image,{quoted : mek})
} else {
reply('Reply pesan atau tag member')
}
break
				
case 'me': case 'profile':
try {
ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second`:'Not Premium'
teks = `❒ *「 Profile User 」* ❒ 

❒ *「 User ${pushname} 」*
├ *Tag : @${sender.split("@")[0]}*
├ *Status : ${isPremium ? 'Premium':'Free'}*
├ *Status Bot : ${isOwner ? 'Owner':'User'}*
├ *Expired : ${prmm}*
├ *Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*
├ *Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*
└ *Balance User : $${getBalance(sender, balance)}*`
its = await getBuffer (ppimg)
Fg.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [sender]},quoted: mek, caption: teks
})
break
  
case 'del' : case 'delete': case 'd':
try{
if(!isQuotedMsg)return reply('Reply pesan Bot!')
pp = {id:mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
if (!isGroupAdmins && !isOwner)return reply(admin())
Fg.deleteMessage(from,pp)
} catch(e) {
reply('reply pesan botnya ')
reply(e)
console.log(e)
}
break

case 'getsider':
try {
if (!isGroup) return reply('Hanya bisa didalam gruop')
if (!isQuotedMsg) return reply('Reply pesan botnya')      
infom = await Fg.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 
//buat index bulan
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];
var myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];  
// fecha
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = `「 *Telah Dibaca* 」\n\n`
for (let i of hemm) {
teksx += `${shp} Nama : @${i.jid.split('@')[0]}\n${shp} Waktu : ${toTime(i.t, true)}\n${shp} fecha : ${toBulan(i.t, true)}\n\n`
}
teksx1 = `「 *Belum DiBaca* 」\n\n`
for (let i of hemms){
teksx1 += `${shp} Nama : @${i.jid.split('@')[0]}\n`
teksx1 += `${shp} Waktu : ${toTime(i.t, true)}\n${shp} fecha : ${toBulan(i.t, true)}\n\n`
}
Fg.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: mek, thumbnail: gambar3, contextInfo: { forwardingScore:999, isForwarded:false, mentionedJid: readdin }})
Fg.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: mek, thumbnail: gambar3, contextInfo: { forwardingScore:999, isForwarded:false, mentionedJid: readon }})
} catch(e) {
reply('reply pesan botnya ')
reply(e)
console.log(e)
}
break
					
case 'read': case 'sider':
if (!isGroupAdmins && !isOwner)return reply(admin())
if (!isGroup) return reply(group())
if (!isQuotedMsg)return reply('Reply pesan bot')
infom = await Fg.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '⬡'+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ⬡ Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'hidetag': case 'h':
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner)return reply(admin())
if (!value)return reply('Ingfonya apa?')
var group = await Fg.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Fg.sendMessage(from, options, text)
break

case 'totag':
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner)return reply(admin())
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
var group = await Fg.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: teks,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Fg.sendMessage(from, options, text)
break

case 'tagme':
mentions(`@${sender.split("@")[0]}`, [sender], true)
break

case 'mention':
if(!value)return reply('nomernya?')
mentions(`@${value.split("@")[0]}`, [`${value}@s.whatsapp.net`], false)
break

//******************** 》 STORAGE 《 ********************\\
                     
//--------𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢--------
              case 'addcmd': 
case 'setcmd':
case 'stickcmd':
if (!isOwner && !mek.key.fromMe) return reply(ownerB())
if (isQuotedSticker) {
if (!value) return reply(`✳️ Responde a un sticker con *${prefix + command}* _${prefix}comando_\n\n📌 Ejemplo *${prefix + command}* ${prefix}menu`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, value)
reply("✅ Comando guardado")
} else {
reply(`✅ Responde a un sticker con *${prefix + command}* _${prefix}comando_\n\n📌 Ejemplo *${prefix + command}* ${prefix}menu`)
}
break
case 'delcmd':
case 'delstickcmd':
if (!isOwner && !mek.key.fromMe) return reply(ownerB())
if (!isQuotedSticker) return reply(`✳️ Responde al sticker comando para eliminar\n\n📌 Uso del comamdo : ${prefix + command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./data/stickcmd.json', JSON.stringify(scommand))
reply("✅ Comando eliminado")
break
case 'listcmd':
case 'liststickcmd':
if (!isOwner && !mek.key.fromMe) return reply(ownerB())
let teksnyee = `「 *LISTA DE STICKER CMD* 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `

❉─────────────────────❉ 
*🔮 ID :* ${i.id}
*🛡️ Comando :* ${i.chats}
❉─────────────────────❉`
}
reply(teksnyee)
break

case 'getstik': case 'getstikcmd': case 'getcmd':
if(!value)return reply(`Example : ${prefix + command} menu`)
try {
ga = fs.readFileSync(`./src/stickcmd/${value}.webp`)
Fg.sendMessage(from, ga, sticker,{quoted:mek})
} catch {
reply('Sticker Command tidak terdaftar / Command yg anda gunakan memakai prefix!')
}
break
			

case 'addstick':
if (!isGroup) return reply(group())
if (!isQuotedSticker) return reply('Reply stiker nya')
svst = args.join('')
if (!svst) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Fg.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./src/stick/${svst}.webp`, delb)
fs.writeFileSync('./data/stick.json', JSON.stringify(setiker))
Fg.sendMessage(from, `Sukses Menambahkan Sticker`, MessageType.text, { quoted: mek })
break

case 'dellstick':
if (!isGroup) return reply(group())
if (!value) return reply(mess.wrongFormat)
	try {
fs.unlinkSync(`./src/stick/${value}.webp`)
setiker.splice(value,1)
fs.writeFileSync('./data/stick.json', JSON.stringify(setiker))
reply(`Succes delete sticker ${value}!`)
	} catch (err) {
reply(`Gagal delete sticker ${value}!`)
	}
break
					
case 'liststick':
if (!isGroup) return reply(group())
teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
	}
teks += `\n*Total : ${setiker.length}*`
Fg.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
break

//******************** 》Owner Prem《 ********************\\

case 'addprem':
if (!isOwner)return reply(ownerB()) 
if (!value)return reply(`*Format Error!*\n\n*Example :*\n• *${prefix + command} @tag 10d*\n\n*Note :*\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n\n*Tq To : ${fake}*`)
expired = value.split(" ")[1]
const pnom = {id: `${value.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./data/premium.json',JSON.stringify(premium))
reply(`_Succses_`)
break

case 'delprem':
  if(!isOwner) return reply('Only Owner!')
user = value.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./data/premium.json', JSON.stringify(premium))
mentions(`Succes delete premium @${user.split("@")[0]}`,[user],true)
}
}
break

case 'listprem':
if(!isGroup)return reply(group())
Fg.updatePresence(from, Presence.composing)
let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `*ID :* @${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
  }
mentions(txt, men, true)
break

case 'cekprem': case 'cekpremium':
if (!isPremium) return reply(`Kamu bukan user premium`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
try {
ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
its = await getBuffer (ppimg)
Fg.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: mek, caption: teks
})
break

//******************** 》Limit《 ********************\\

case 'topbalance':
if(!isGroup)return reply(group())
Fg.updatePresence(from, Presence.composing)
let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
  }
mentions(txot, mebn, true)
break

case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
break

case 'buylimit':{
if (!value) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (value.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(value)) return reply(`Harus berupa angka`)
let ane = Number(nebal(value) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(value), limit)
reply(monospace(`Pembeliaan limit sebanyak ${value} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
}
break

case 'buyglimit':{
if(!value)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
const koinPerlimit = 100
const total = koinPerlimit * value
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, value, glimit)
reply(monospace(`Pembeliaan game limit sebanyak ${value} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
  }
break

case 'giftlimit':
if(!isOwner)return
if (!value)return reply(`Example : ${prefix + command} @tag 10`)
lim = value.split(" ")[1]
const tag1 = `${value.split(" ")[0].replace("@",'')}@s.whatsapp.net`
giveLimit(tag1, lim, limit)
reply('Succes')
break

//******************** 》 GAME 《 ********************\\
case  'tictactoe': case 'ttc':
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(group())
if (fs.existsSync(`./libreria/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `T i c t a c t o e  G a m e..
     
Sedang ada sesi permainan digrup ini!!

Info : 
  Player ❎ : @${boardnow.X}
  Player ⭕ : @${boardnow.O}
     

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
          
Ketik nyerah untuk Menyerah..
Ketik ${prefix}delttc untuk menghapus session Game..`;
Fg.sendMessage(from, monospace(chatMove), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
  boardnow.X + "@s.whatsapp.net",
  boardnow.O + "@s.whatsapp.net",
  ],
  },
 });
return;
  }
if (argss.length === 1)
return reply(`Tag yang ingin jadi lawan anda!\n\nPenggunaan : *${prefix}tictactoe @TagMember*`
                         );
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./libreria/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2));
const strChat = `T i c t a c t o e  G a m e..

@${sender.replace("@s.whatsapp.net","")} menantang ${argss[1]} untuk Menjadi lawan Game!!
     
${argss[1]}  Ketik Y/N 

Note : 
  • N : menolak tantangan..
  • Y : Terima tantangan..`;
Fg.sendMessage(from, monospace(strChat), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
 },
});
gameAdd(sender, glimit)
break
                    
case  'delttc':
if (!isGroup) return reply(group())
if (fs.existsSync("./libreria/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./libreria/tictactoe/db/" + from + ".json");
reply(`Berhasil menghapus sesi di grup ini!`);
  } else {
reply(`Tidak ada sesi yg berlangsung, mohon ketik ${prefix}tictactoe`);
  }
break
                  
case 'tebakgambar':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(group())
if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
let tbg = await axios.get(`https://api.zeks.xyz/api/tebakgambar?apikey=${Vkey}`)
const petunjuk = tbg.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
sendMediaURL(from, tbg.data.result.soal, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), mek)
let anih = tbg.data.result.jawaban.toLowerCase()
game.addgambar(from, anih, gamewaktu, tebakgambar)
gameAdd(sender, glimit)
	}
break
						
case 'caklontong':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(group())
if (game.isCkl(from, ckl)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://lindow-api.herokuapp.com/api/kuis/caklontong?apikey=LindowApi`)
const petunjuk = anu.data.result.jawaban.replace(/[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z]/gi, '_')
reply(`*Soal :*\n_${anu.data.result.soal}_\n*Petunjuk :* ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
let anih = anu.data.result.jawaban.toLowerCase()
game.addckl(from, anih, gamewaktu, ckl)
gameAdd(sender, glimit)
	}
break
						
case 'math':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(group())
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
if (!value) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${value}`)
//	const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
	}
break

case 'family100':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(group())
if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
let anoh = anu.data.result.aswer
let rgfds = []
for (let i of anoh){
let fefs = i.split('/') ? i.split('/')[0] : i
let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
  }
game.addfam(from, rgfds, gamewaktu, family100)
gameAdd(sender, glimit)
  }
break

case 'hbd': case 'zodiak': case 'zodiac':
let textus = args.join(" ")
if (!value) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const date = new Date(textus)
if (date == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, fecha] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && fecha === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(monospace(teksh))
break



case 'breakwall':
                    case 'icecold':
                    case 'luxury':
                    case 'cloud':
                    case 'summersand':
                    case 'horrorblood':
                    
		           reply(`espero`)
                    if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)  
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Fg.sendMessage(from, ini_buffer, image, {quoted: mek})
                    break

default:
if (budy.startsWith('>')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{value
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}

if (chats.startsWith('$ ')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
if (!value)return 
var itsme = `${sender}`
var split = `*Fg-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(value, (err, stdout) => {
if (err) return Fg.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
Fg.sendMessage(from, stdout, text, term)
}
})
}

if(chats.startsWith(`! `)){
if(!value) return reply('Masukkan nomo urutnya!')
if(!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
reply('_Tunggu sebentar Video Sedang di Kirim!_')
quee = 'Y T  D O W N'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
 try{
 pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
 downm = await ytv(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
 const { dl_link, thumb, title, filesizeF, filesize } = downm
 if(Number(filesize) >= 30000){
 short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 //return sendMediaURL(from, thumb, `*P L A Y V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
 reply(`*Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
 }
 teks = `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}`
 //wa.sendFileFromUrl(from, thumb, tod, teks)
 sendMediaURL(from, dl_link, teks)
 }catch(e){
 reply(mess.error)
}
}
}

if(chats.startsWith(`# `)){
if(!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
if(!value) return reply('Masukkan nomo urutnya!')
reply('_Tunggu sebentar Music Sedang di Kirim!_')
quee = 'Y T  D O W N'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
 try{
 pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
 downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
 const { dl_link, thumb, title, filesizeF, filesize } = downm
 if(Number(filesize) >= 30000){
 short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
// return sendMediaURL(from, thumb, `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
reply(`*Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
 }
teks = `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
 //sendMediaURL(from,thumb,teks)
 sendMediaURL(from, dl_link)
 }catch(e){
 reply(mess.error)
}
} 
}

if(chats.startsWith('cekprefix')){
y = `*Prefix yg sedang digunakan adalah : ${single ? `${prefa}` : multi ? 'Multiprefix' : 'NoPrefix'}*`
reply(y)
}

if (chats.startsWith('=>')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
}catch(err){
e = String(err)
reply(e)
}
}
if (chats.startsWith('x')){
try {
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
return Fg.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}

if (isGroup && budy != undefined) {
//	console.log(color('[TEXT]', 'yellow'), 'Chat!', color(sender.split('@')[0]))
} else {
return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
}
