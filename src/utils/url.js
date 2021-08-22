let baseURL, homeURL, portfolioURL, google_clientID, github_url;
if (process.env.REACT_APP_NODE_ENV === 'production') {
  baseURL = 'https://api.sumitk.site/api/v1/user';
  homeURL = 'https://api.sumitk.site/api/v1/home';
  portfolioURL = 'https://api.sumitk.site/api/v1/profile';
  google_clientID = '905781434968-a39oe1dq0rnsu8hcib2dei44s9ilq5nr.apps.googleusercontent.com';
  github_url = 'https://github.com/login/oauth/authorize?client_id=7befdbe2c69ddcb7658f';
} else {
  baseURL = 'http://localhost:4000/api/v1/user';
  homeURL = 'http://localhost:4000/api/v1/home';
  portfolioURL = 'http://localhost:4000/api/v1/profile';
  google_clientID = '71989194000-96fsiacaer3ggn1bhhk9364l1ctpijir.apps.googleusercontent.com';
  github_url = 'https://github.com/login/oauth/authorize?client_id=66cfc66a4b84d65fe880';
}

export { baseURL, homeURL, portfolioURL, google_clientID, github_url };


// for development
// 71989194000-96fsiacaer3ggn1bhhk9364l1ctpijir.apps.googleusercontent.com
// for production 
// 905781434968-a39oe1dq0rnsu8hcib2dei44s9ilq5nr.apps.googleusercontent.com