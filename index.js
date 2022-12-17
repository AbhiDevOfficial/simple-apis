const { generateWaChatUrl } = require('./data/wame')
const { youtubeSearch, youtubeVideoDownload, youtubeAudioDownload } = require('./data/yt')
// const { igPostDownload, igStoryDownload } = require('./data/instagram')

module.exports = {
  youtubeSearch: youtubeSearch,
  youtubeVideoDownload: youtubeVideoDownload,
  youtubeAudioDownload: youtubeAudioDownload,
  generateWaChatUrl: generateWaChatUrl
};
