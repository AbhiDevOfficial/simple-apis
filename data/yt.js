const yts = require('yt-search')
const ytld = require('ytld-core')
const fs = require('fs')

async function youtubeSearch(q) {
  var query = await yts(q)
  query = query.all;
  if (query.length < 1) return false;
  return query;
}

async function youtubeVideoDownload(q) {
 var VID = '';
 try {
   if (q.includes('watch')) {
     var tsts = q.replace('watch?v=', '')
     var alal = tsts.split('/')[3]
     VID = alal
   } else {     
     VID = q.split('/')[3]
   }
  } catch {
    return false;
  }
  var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)})
  yt.pipe(fs.createWriteStream('./' + VID + '.mp4'))
  var result = yt.on('end', async () => fs.readFileSync('./' + VID + '.mp4'))
  return result;
}
