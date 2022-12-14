## Simple APIs
Simple and useful apis for developers.

### Get Started:

```
> npm install @abhidevofficial/simple-apis
```

```js
const simpleApis = require('@abhidevofficial/simple-apis')
```

### APIs

#### Download posts from instagram using its url:

```js
let url = 'https://www.instagram.com/p/....../?igshid=.....='
let post = simpleApis.igPostDownload(url);

console.log(post);
```

#### Download story from instagram using username:

```js
let username = '_abhi.76_'
let story = simpleApis.igStoryDownload(username);

console.log(story);
```

#### Convert Emoji to Image:

```js
let emoji = '🤩' // Required: Enter emoji
let type = 'apple' // Optional: Enter the preview/type of emoji
/*
Valid types are:
- whatsapp
- facebook
- twitter
- skype
- microsoft
- apple
- google
- samsung
- joypixel
- openemoji
- lg
*/
let emoji = simpleApis.emojiToImage(emoji, type);

console.log(emoji)
/* Returns:

IF YOU LEAVE TYPE ARGUMENT EMPTY,
YOU WILL GET URLS OF ALL TYPES.
THE RESULT WILL BE SAME AS SHOWN BELOW
BUT THE 'image' STRING WILL BE 'images'
WHOSE VALUE IS AN OBJECT WITH TYPE AS STRING
AND URL/IMAGE AS VALUE.

{
  "status": true,
  "creator": "@AbhiDevOfficial",
  "npm": "@abhidevofficial/simple-apis",
  "message": "success",
  "result": {
     "name": "", 
     "emoji": "🤩",
     "unicode": "U+1F929",
     "desc": "",
     "image": ""
  }
}
*/
```

#### Get direct WhatsApp Chat URL ( wa.me link generator ):

```js
let number = '91xxxx' // Required: Enter WhatsApp number with country code ( OMIT SYMBOLS LIKE PLUS, HYPHENS AND BRACKETS )
let text = 'Hey' // Optional: Prefillied message
let result = simpleApis.generateWaChatUrl(number, text);

console.log(result);
// Returns:
// https://wa.me/91xxxx?text=Hey
```

### Thank You:

- [axios](https://npmjs.com/package/axios)

- [cheerio](https://npmjs.com/package/cheerio)

- [qs](https://npmjs.com/package/qs)

**Thank You for using [@abhidevofficial/simple-apis](https://npmjs.com/package/@abhidevofficial/simple-apis)!**

**Please feel free to give a STAR 🌟 for our [@abhidevofficial/simple-apis](https://github.com/AbhiDevOfficial/simple-apis).**
