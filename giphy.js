const Giphy = require('giphy-js-sdk-core');
const client = Giphy(process.env.GIPHY_KEY);


/**
 *
 * @param{string} text: Value to be translated to string
 */
const getTranslatedGif = ( text ) => {
  return client.translate('gifs', { s: text });
};

module.exports = getTranslatedGif;
