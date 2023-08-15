const buildApiUrl = require('../util/apiUtils');
const apiEndpoint = require('kickJS/util/endPoint');

async function getLinks(username) {
    const apiUrl = buildApiUrl(`${apiEndpoint.apiEndpointV1}channels/${username}/links`);

    return apiUrl;
}

module.exports = getLinks;