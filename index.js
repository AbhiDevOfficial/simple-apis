const { generateDirectLink } = require('./data/smlink')
const { imageToPDF } = require('./data/pdf')

module.exports = {
  imageToPDF: imageToPDF,
  generateDirectLink: generateDirectLink
};
