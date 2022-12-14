const { generateWaChatUrl } = require('./data/wame')
const { igPostDownload, igStoryDownload } = require('./data/instagram')

module.exports = {
  igPostDownload: igPostDownload,
  igStoryDownload: igStoryDownload,
  generateWaChatUrl: generateWaChatUrl
};
