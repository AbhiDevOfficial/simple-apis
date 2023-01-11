const yts = require('yt-search')
const ytdl = require('ytdl-core')
const fs = require('fs')

async function youtubeSearch(q) {
  var query = await yts(q)
  query = query.all;
  if (query.length < 1) return false;
  return query;
}

async function youtubeVideoDownload(q) {
 var VID = '';
 VID = await youtubeSearch(q);
 VID = VID[0].url
 var tsts = VID.replace(/[watch?v=]/g, '')
 var alal = tsts.split('/')[3]
 VID = alal
 return ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
}


async function youtubeAudioDownload(q) {
 var VID = '';
 VID = await youtubeSearch(q);
 VID = VID[0].url
 var tsts = VID.replace(/[watch?v=]/g, '')
 var alal = tsts.split('/')[3]
 VID = alal
  var yt = ytdl(VID, {filter: format => format.container === 'mp3' })
  yt.pipe(fs.createWriteStream('./' + VID + '.mp3'))
  var result = yt.on('end', async () => fs.readFileSync('./' + VID + '.mp3'))
  return result;
}

module.exports = { youtubeSearch, youtubeVideoDownload, youtubeAudioDownload }
