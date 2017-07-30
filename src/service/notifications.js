const EventEmitter = require( "events" );

/*
 * Simple Notifivation Service
 */
export class Notifications extends EventEmitter {

    constructor() {
        super();
        this.messages = [];
    }

    add( message, type = 'info') {
        let messageObject = {
            type: type,
            message: message,
            timestamp: Date.now()
        }

        this.messages.push( messageObject );
        this.emit('notification', messageObject);
    }
}

export let notifications = new Notifications();
