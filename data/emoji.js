const emojis = require('../lib/emojis')

/*function emojiToImage(emoji, type) {
 if (!emoji) throw new Error("#EMOJI_ARG : Missing 'emoji' argument.")
 if (!type) throw new Error("#TYPE_ARG : Missing 'type' argument.")
 
}*/

function getEmojiInfo(emoji) {
 if (!emoji) throw new Error("#EMOJI_ARG : Missing 'emoji' argument.")
 const found = emojis.find(em => em.emoji === emoji);
 if (!found) return false;
 return found;
}

function findEmojiByName(emoji) {
 if (!emoji) throw new Error("#EMOJI_ARG : Missing 'emoji' argument.")
 const found = emojis.find(e => e.name.toLowerCase() === name.toLowerCase());
 return found || false;
}

function findEmojiByUnicode(unicode) {
 if (!emoji) throw new Error("#UC_ARG : Missing 'unicode' argument.")
 const emoji = unicodeToEmoji(unicode)
 const found = emojis.find(e => e.unicode.toLowerCase() === unicode.toLowerCase());
 return found || false;
}

function emojiToUnicode(emoji) {
 if (!emoji) throw new Error("#EMOJI_ARG : Missing 'emoji' argument.")
 if (emoji.length === 1) return emoji.charCodeAt(0).toString(16);
 let comp = ((emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000);
 if (comp < 0) return emoji.charCodeAt(0).toString(16);
 return comp.toString(16).toUpperCase();
}

function unicodeToEmoji(unicode) {
 if (!unicode) throw new Error("#UC_ARG : Missing 'unicode' argument.")
 return String.fromCodePoint(parseInt(unicode, 16));
}
