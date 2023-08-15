const buildApiUrl = require('../util/apiUtils');
const apiEndpoint = require('kickJS/util/endPoint');

async function getLivestream(username) {
    const apiUrl = buildApiUrl(`${apiEndpoint.apiEndpointV2}channels/${username}/livestream`);

    return apiUrl;
}

module.exports = getLivestream;