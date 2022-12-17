const { generateWaChatUrl } = require('./data/wame')
const { yts: youtubeSearch, ytv: youtubeVideoDownload, yta: youtubeAudioDownload } = require('./data/yt')
// const { igPostDownload, igStoryDownload } = require('./data/instagram')

module.exports = {
  youtubeSearch: yts,
  youtubeVideoDownload: ytv,
  youtubeAudioDownload: yta,
  generateWaChatUrl: generateWaChatUrl
};
