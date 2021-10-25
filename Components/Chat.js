import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';

class Chat extends Component {
    state = { chats: [] }

    componentDidMount() {
        this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
            cluster: process.env.PUSHER_APP_CLUSTER,
            encrypted: true
        });

        this.channel = this.pusher.subscribe('chat-room');
    }
}