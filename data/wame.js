function generateDirectLink(id, sm) {
  if (!id) throw new Error("#ID_ARG : ID argument seems to be missing.")
  if (!sm) throw new Error("#SM_ARG : SM argument seems to be missing.")
  sm = sm.toLowerCase().replace(/\s+/g, '')
  var link = false
  if (sm == 'whatsapp') {
    if (id.includes('+')) id = id.replaceAll('+', '')
    if (id.includes('-')) id = id.replaceAll('-', '')
    if (id.includes('(') || id.includes(')')) id = (id.replaceAll('(', '') || id.replaceAll(')', ''))
    if (isNaN(id)) throw new Error("#ID_NAN : Number argument must be a number.")
    link = 'https://wa.me/' + id;
  } else if (sm == 'telegram') {
    link = 'https://t.me/' + id;
  } else if (sm == 'instagram') {
    link = 'https://www.instagram.com/' + id;
  } else if (sm == 'facebook') {
    link = 'https://facebook.com/' + id;
  } else if (sm == 'twitter') {
    link = 'https://twitter.com/' + id;
  } else if (sm == 'linkedin') {
    link = 'https://linkedin.com/in/' + id;
  } else if (sm == 'github') {
    link = 'https://github.com/' + id;
  } else if (sm == 'gitlab') {
    link = 'https://gitlab.com/' + id;
  } else if (sm == 'bitbucket') {
    link = 'https://bitbucket.org/' + id;
  } else if (sm == 'quora') {
    link = 'https://quora.com/profile/' + id;
  } else if (sm == 'reddit') {
    link = 'https://reddit.com/user/' + id;
  } else if (sm == 'discord') {
    link = 'https://discord.gg/' + id;
  } else if (sm == 'snapchat') {
    link = 'https://www.snapchat.com/add/' + id;
  } else if (sm == 'line') {
    link = 'https://line.me/R/ti/p/' + id;
  } 
  if (!link) throw new Error("404: FAILED")
  return link;
}

module.exports = { generateDirectLink };
