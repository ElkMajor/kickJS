const buildApiUrl = require('../util/apiUtils');
const apiEndpoint = require('kickJS/util/endPoint');

async function getChatroom(username) {
    const apiUrl = buildApiUrl(`${apiEndpoint.apiEndpointV2}channels/${username}/chatroom`);

    return apiUrl;
}

module.exports = getChatroom;