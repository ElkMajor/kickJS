const baseUrl = `https://kick.com/`;
const apiEndpointV1 = `${baseUrl}api/v1/`;
const apiEndpointV2 = `${baseUrl}api/v2/`;
const tokenProviderURL = `${baseUrl}kick-token-provider`;
const kickWSS = 'wss://ws-us2.pusher.com/app/eb1d5f283081a78b932c?protocol=7&client=js&version=7.6.0&flash=false';

module.exports = { baseUrl, apiEndpointV1, apiEndpointV2, tokenProviderURL, kickWSS }