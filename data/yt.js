const ytdl = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const fs = require('fs')

function youtubeVideoDownload(url) {
 if (!url) throw new Error("URL_ARG : Missing 'url' argument.")
 if (!url.startsWith('http://') && !url.startsWith('https://') && !url.includes('youtu')) throw new Error("INV_URL : Invalid url.")
 if (!url.includes('watch')) url = url.replace('watch?v=', '')
 let video;
 try {
  video = ytdl(url, { filter: format => format.container === 'mp4' && ['1080p', '720p', '480p', '360p', '240p', '144p'].map(() => true)});
 } catch {
  video = false;
 }
 if (!video) throw new Error("INV_URL : Invalid url or the entered url has a problem.")
 video.pipe(fs.createWriteStream('./' + url + '.mp4'));
 let readVideo = video.on('end', async () => fs.readFileSync('./' + url + '.mp4'));
 return readVideo;
}

function youtubeAudioDownload(url) {
 if (!url) throw new Error("URL_ARG : Missing 'url' argument.")
 if (!url.startsWith('http://') && !url.startsWith('https://') && !url.includes('youtu')) throw new Error("INV_URL : Invalid url.")
 if (!url.includes('watch')) url = url.replace('watch?v=', '')
 let reader;
 try {
   reader = ytdl(url, { filter: 'audioonly' });
 } catch {
   reader = false;
 }
 if (!reader) throw new Error("INV_URL : Invalid url or the entered url has a problem.")
 let audio = ffmpeg(reader).format('mp3').audioBitrate('128').save('yta-'+url+'.mp3').on('end', () => fs.readFileSync('yta-'+url+'.mp3'))
 return audio;
}

function youtubeSearch(query) {
 return new Promise((resolve, reject) => {
  if (!query) throw new Error("QUERY_ARG : Missing 'query' argument.")
  try {
    var ytsResult = await yts(query);
  } catch {
    throw new Error("NOT_FOUND : Couldn't find result for this query.")
  }
  let result = ytsResult.all
  resolve({ status: true, creator: 'AbhiDevOfficial', npm: '@abhidevofficial/simple-apis', message: 'success', result: result })
 })
}
