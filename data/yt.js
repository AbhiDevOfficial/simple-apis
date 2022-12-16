const ytdl = require('ytdl-core')
const fs = require('fs');

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
 let readVideo = yt.on('end', async () => fs.readFileSync('./' + url + '.mp4'));
 return readVideo;
}

