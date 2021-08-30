// Función de respuesta

//-- 
const wait = () => { 
return '*⌛ _Cargando..._ ▬▬▬▭*\n\n*🧘🏻‍♂️ Espere por favor,* esto puede tomar unos segundos.'
}
//--
/*const pagado = () => {
  return '*💎 -1 Diamante*'
}*/

//--
const fdiama = (prefix) => {
  return `❎ Lo siento, sus diamantes 💎 se agotaron, *repita la compra.* con el comando *${prefix}buy*`
}

//--
const stick = () => {
  return '❎ Los siento ocurrió Error, repita después de este mensaje'
}

//--
const errorfg = (prefix) => {
  return `❎ Error! \n🔍 Intentalo de nuevo mas tarde`
}

//-- 
const group = () => {
  return '❎  Este comando es solo para grupos'
}

//-- 
const banf = () => {
  return '❎ Estás en la lista de baneados, Lo siento no puedes usar ningun comando'
}

//--
const ownerB = () => {
  return '❎  Esta función es solo para *FG98*'
}

//--
const premi = (prefix) => {
  return '❎ Esta función es específicamente para usuarios Premium'
}

//--
const userB = (prefix) => {
  return `▢ No estas Verificado como usuario del bot, para usar los comandos primero verificate\n\n┌─⊷ *VERIFICACIÓN* ⊶\n├╼ Escribe *${prefix}Verify*\n└─────────────`
}

//--
const admin = () => {
  return '❎ Esta función es solo para administradores de grupo'
}

//--
const Badmin = () => {
  return '❎ ¡Para usar este comando debo ser *Administrador!*'
}

//--
const leveloff = () => {
  return '❎ La nivelación no está habilitado en el grupo'
}
const lvlnul = () => {
  return '❎ Tu nivel aun está vacio'
}
const fgnsfw = () => {
  return 'Lo siento pero no puedo ejecutar este comando, este grupo no permite contenido +18'
}

module.exports =  { wait, stick, errorfg, group, banf, ownerB, premi, userB, admin, Badmin, leveloff, lvlnul, pagado, fdiama, fgnsfw} 