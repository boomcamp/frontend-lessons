export const clientId = process.env.GATSBY_GOOGLE_CLIENT_ID;

// gapi is made available via a script tag in html.js

let authClient;

function loadAuthClient(clientType = 'auth2') {
  return new Promise((resolve, reject) => {
    window.gapi.load(clientType, {
      callback: () => resolve(clientType),
      onerror: reject,
    });
  });
}

export const getAuth = (scope = 'profile email') => {
  if (!authClient) {
    return loadAuthClient('auth2').then(clientType => {
      return window.gapi[clientType]
        .init({
          clientId,
        })
        .then(res => {
          authClient = res;
          return res;
        });
    });
  } else {
    return Promise.resolve(authClient);
  }
};
