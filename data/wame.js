function generateWaChatUrl(number, text) {
  if (!number) throw new Error("#NUMBER_ARG : Number argument seems to be missing.")
  if (number.includes('+')) number = number.replaceAll('+', '')
  if (number.includes('-')) number = number.replaceAll('-', '')
  if (number.includes('(') || number.includes(')')) number = (number.replaceAll('(', '') || number.replaceAll(')', ''))
  if (isNaN(number)) throw new Error("#NUMBER_NAN : Number argument must be a number.")
  if (text !== '') text = encodeURIComponent(text);
  var baseURL = 'https://wa.me/'
  var textUrl = '?text='
  if (!text) return baseURL+number;
  return baseURL+number+textUrl+text;
}

module.exports = { generateWaChatUrl };
