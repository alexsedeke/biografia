import React from 'react';
import update from 'immutability-helper';
import { notifications } from '../../service/notifications';

class Notification extends React.Component {
    state = {
        notifications: {}
    }

    componentDidMount() {
        notifications.on('notification', (notification) => {
            this.setState({
                notifications: update( this.state.notifications, {[notification.timestamp]: {$set: notification}})
            });
            this.closeTimeout( notification.timestamp );
        });
    }

    closeTimeout( key ) {
        setTimeout(() => {
            this.closeNotification( key );
        }, 3000);
    }

    listNotifications() {
        return Object.entries(this.state.notifications).map( notification => {
            return <li key={notification[0]} className={notification[1].type}>
                        {notification[1].message}
                        <span onClick={() => this.closeNotification(notification[0])}>close</span>
                    </li>
        });
    }

    closeNotification( key ) {
        let _notifications = this.state.notifications;
        delete _notifications[key];
        this.setState({
            notifications: _notifications
        });
    }

    render() {
        return (
            <div className="notifications">
                <ul className="notification-list">{ this.listNotifications() }</ul>
            </div>
        );
    }
}

export { Notification };
