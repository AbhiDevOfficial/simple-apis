const { generateDirectLink } = require('./data/smlink')
const { imageToPDF } = require('./data/pdf')
const { youtubeSearch, youtubeVideoDownload } = require('./data/yt')

module.exports = {
  imageToPDF: imageToPDF,
  youtubeSearch: youtubeSearch,
  youtubeVideoDownload: youtubeVideoDownload,
  generateDirectLink: generateDirectLink
};
