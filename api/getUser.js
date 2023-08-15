const buildApiUrl = require('../util/apiUtils');
const apiEndpoint = require('kickJS/util/endPoint');

async function getUser(username) {
    const apiUrl = buildApiUrl(`${apiEndpoint.apiEndpointV1}channels/${username}`);

    return apiUrl;
}

module.exports = getUser;