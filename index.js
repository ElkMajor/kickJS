const client = require('./client/client');
const getUser = require('./api/getUser');
const getLinks = require('./api/getLinks');
const getLiveStreams = require('./api/getLiveStreams');
const getChatRoom = require('./api/getChatRoom');
const userHasAccess = require('./client/cmdAccess');
const sendMessage = require('./api/sendMessage');
const endPoint = require('./util/endPoint');

module.exports = { client, getUser, getLinks, getLiveStreams, getChatRoom, userHasAccess, sendMessage, endPoint };