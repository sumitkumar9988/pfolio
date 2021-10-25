let api,baseURL, homeURL, profileURL;
if (process.env.REACT_APP_NODE_ENV === 'production') {
  api='https://api.sumitk.site/api/v1'
  baseURL = 'https://api.sumitk.site/api/v1/user';
  profileURL = 'https://api.sumitk.site/api/v1/profile';

} else {
  api='http://localhost:3000/api/v1'
  baseURL = 'http://localhost:3000/api/v1/user';
  profileURL = 'http://localhost:3000/api/v1/profile';

}

export { baseURL, homeURL, profileURL ,api};


// production
// google_clientID = '905781434968-a39oe1dq0rnsu8hcib2dei44s9ilq5nr.apps.googleusercontent.com';
// github_url = 'https://github.com/login/oauth/authorize?client_id=7befdbe2c69ddcb7658f';

// development
// google_clientID = '71989194000-96fsiacaer3ggn1bhhk9364l1ctpijir.apps.googleusercontent.com';
// github_url = 'https://github.com/login/oauth/authorize?client_id=66cfc66a4b84d65fe880';