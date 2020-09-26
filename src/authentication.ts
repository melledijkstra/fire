import config from './config'

/**
 * Initialize the GAPI environment
 * @param success When client has loaded and retrieval of token is successful
 * @param failure When loading the client failed of retrieval of the token failed
 */
export function initializeGAPI(success?: () => void, failure?: (error?: any) => void) {
  gapi.load('client', () => {
    gapi.client.init({
      'apiKey': config.apiKey,
      'discoveryDocs': config.discoveryDocs
    }).then(() => {
      retrieveToken(success, failure, false); // retrieve token non-interactively
    }, failure);
  })
}

/**
 * Retrieves the token and sets it for the gapi
 * @param success callback when token is successfully retrieved
 * @param failure callback when something went wrong getting the token
 * @param interactive if asking for token should be interactive
 */
export function retrieveToken(success?: (token: string) => void, failure?: () => void, interactive = true) {
  chrome.identity.getAuthToken({ interactive }, (token) => {
    if (token) {
      gapi.auth.setToken(<gapi.auth.GoogleApiOAuth2TokenObject>{ access_token: token });
      success?.(token)
    } else {
      failure?.()
    }
  });
}

export function removeToken(callback?: () => void) {
  let t = gapi.client.getToken();
  if (!t) return;
  chrome.identity.removeCachedAuthToken({
    token: t.access_token
  }, callback);
}
