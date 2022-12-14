const { EmojiAPI } = require('emoji-api');

function emojiToImage(emoji, type) {
  return new Promise(async(resolve, reject) => {
    var emR = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    if (!emoji.match(emR)) throw new Error("#INVALID_CHARACTER : Character does not seems to be an emoji.")
    let emo = new EmojiAPI();
    try {
     emo.get(emoji).then(em => {
        var emm = em.emoji
        var unc = em.unicode
        var name = em.name
        var desc = em.description
        var apple = em.images[Object.keys(em.images)[0]].url;
        var google = em.images[Object.keys(em.images)[1]].url;
        var samsung = em.images[Object.keys(em.images)[2]].url;
        var microsoft = em.images[Object.keys(em.images)[3]].url;
        var wa = em.images[Object.keys(em.images)[4]].url;
        var twter = em.images[Object.keys(em.images)[5]].url;
        var fb = em.images[Object.keys(em.images)[6]].url;
        var skype = em.images[Object.keys(em.images)[7]].url;
        var jp = em.images[Object.keys(em.images)[8]].url;
        var oe = em.images[Object.keys(em.images)[9]].url;
        var lg = em.images[Object.keys(em.images)[10]].url;
        if (type || type !== undefined) type = type.toLowerCase();
        var img;
        if (type == 'whatsapp') img = wa
        else if (type == 'facebook') img = fb
        else if (type == 'twitter') img = twter
        else if (type == 'skype') img = skype
        else if (type == 'microsoft') img = microsoft
        else if (type == 'apple') img = apple
        else if (type == 'google') img = google
        else if (type == 'samsung') img = samsung
        else if (type == 'joypixel' || type == 'joypixels') img = jp
        else if (type == 'openemoji') img = oe
        else if (type == 'lg') img = lg
        else if (type !== 'whatsapp' && type !== 'facebook' && type !== 'twitter' && type !== 'skype' && type !== 'microsoft' && type !== 'apple' && type !== 'google' && type !== 'samsung' && type !== 'openemoji' && type !== 'joypixels' && type !== 'lg' && type !== 'all') throw new Error("#TYPE&_ARG : Invalid type given.")

        if (!type || type == 'all') resolve({ status: true, creator: "@AbhiDevOfficial", npm: '@abhidevofficial/simple-apis', message: "success", result: { name: name, emoji: emm, unicode: unc, desc: desc, images : { whatsapp: wa, facebook: fb, twitter: twter, microsoft: microsoft, skype: skype, joyPixels: jp, openEmoji: oe, apple: apple, google: google, samsung: samsung, LG: lg }} })
        else resolve({ status: true, creator: "@AbhiDevOfficial", npm: '@abhidevofficial/simple-apis', message: "success", result: { name: name, emoji: emm, unicode: unc, desc: desc, image : img } })
     })
   } catch { throw new Error("#CHAR_NOT_SUP : Emoji/Character is not supported.") }
  })
}

module.exports = { emojiToImage };
