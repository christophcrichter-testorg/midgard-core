import http from '../http/main';

/**
 * authenticate with oAuth password flow
 * @param credentials - user credentials (username/password)
 * @param options - the app client id and the oauth token url
 */
const authenticateWithCredentials = (credentials, options) => {
  let {
    username,
    password
  } = credentials;
  let {
    clientId,
    tokenUrl,
  } = options;
  let oauthData = new FormData();
  oauthData.set('grant_type', 'password');
  oauthData.set('username', username);
  oauthData.set('password', password);
  oauthData.set('client_id', clientId);

  let httpClientOptions = {
    method: 'POST',
    data: oauthData
  };
  return http.request(tokenUrl, httpClientOptions);
};

export default authenticateWithCredentials;
