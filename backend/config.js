const providers = ['twitter', 'facebook'];

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === 'production'
    ? `https://PRODUCTION_SITE/${provider}/callback`
    : `https://localhost:3000/${provider}/callback`
});

const [twitterURL, facebookURL] = callbacks

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://PRODUCTION_SITE'
  : ['https://127.0.0.1:3000', 'https://localhost:3000'];

exports.TWITTER_CONFIG = {
  consumerKey: process.env.TWITTER_KEY,
  consumerSecret: process.env.TWITTER_SECRET,
  callbackURL: twitterURL,
};

// exports.FACEBOOK_CONFIG = {
//   clientID: process.env.FACEBOOK_KEY,
//   clientSecret: process.env.FACEBOOK_SECRET,
//   profileFields: ['id', 'emails', 'name', 'picture.width(250)'],
//   callbackURL: facebookURL
// }
