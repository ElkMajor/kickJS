    const WebSocket = require('ws');

    const kickWSS = 'wss://ws-us2.pusher.com/app/eb1d5f283081a78b932c?protocol=7&client=js&version=7.6.0&flash=false';

    const getUser = require('../api/getUser');

    class client {
      constructor(clientOptions) {
            this.ws = new WebSocket(kickWSS);
  
            this.ws.on('open', () => {
                console.log('Connected to the server');
                this.subscribeToUserChannels(clientOptions.channels);
            });
        
            this.ws.on('message', (data) => {
              this.handleMessage(data);
            });
        
            this.ws.on('close', () => {
              console.log('Connection closed');
            });
        
            this.ws.on('error', (error) => {
              console.error('WebSocket error:', error);
            });
        
            this.eventHandlers = {};
        
            this.on('pusher:ping', (message) => {
              this.sendPong();
            });
          }

          subscribeToUserChannels(usernames) {
            usernames.forEach(async (username) => {
                const chatRoomData = await getUser(username);
                const chatRoomId = chatRoomData.chatroom.id;
                const channel = `chatrooms.${chatRoomId}.v2`;
                this.subscribe('', channel);
            });
          }
        
          subscribe(auth, channel) {
            this.ws.send(JSON.stringify({ event: 'pusher:subscribe', data: { auth, channel } }));
            console.log('subscribed:', channel);
          }
        
          on(event, handler) {
            if (!this.eventHandlers[event]) {
              this.eventHandlers[event] = [];
            }
            this.eventHandlers[event].push(handler);
          }
        
          handleMessage(data) {
            try {
                const message = JSON.parse(data);
                const event = message.event;
        
                if (this.eventHandlers[event]) {
                    this.eventHandlers[event].forEach((handler) => {
                        handler(message);
                    });
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        
          sendPong() {
            this.ws.send(JSON.stringify({ event: 'pusher:pong', data: {} }));
          }
        
          closeConnection() {
            this.ws.close();
          }

    }
      
      module.exports = client;
