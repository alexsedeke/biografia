import React from 'react';
import update from 'immutability-helper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { notifications } from '../../service/notifications';
import './notification.css';

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
        }, 10000);
    }

    listNotifications() {
        return Object.entries(this.state.notifications).map( notification => {
            return <li key={notification[0]} className={`notification ${notification[1].type}`}>
                        <div className="notification__message">
                            {notification[1].message}
                        </div>
                        <div className="notification__buttonbar">
                            <span className="close-button" onClick={() => this.closeNotification(notification[0])}>
                                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="577bfde8ec933b8116905ad8032a52ae" transform="translate(-1.000000, -1.000000)" fillRule="nonzero">
                                        <path d="M13.8034271,10.9752551 L20.3888054,4.38970881 C21.1703982,3.60809609 21.1703982,2.34282225 20.3888054,1.56120954 C19.6072126,0.779596822 18.3419711,0.779596822 17.5603783,1.56120954 L10.975,8.14675582 L4.3896217,1.56120954 C3.60802893,0.779596822 2.34278736,0.779596822 1.56119458,1.56120954 C0.779601806,2.34282225 0.779601806,3.60809609 1.56119458,4.38970881 L8.14657288,10.9752551 L1.56119458,17.5608014 C0.779601806,18.3424141 0.779601806,19.6076879 1.56119458,20.3893007 C1.95301133,20.7790866 2.46318938,20.975 2.97540814,20.975 C3.48762691,20.975 3.99780496,20.7790866 4.3896217,20.3893007 L10.975,13.8037544 L17.5603783,20.3893007 C17.9501543,20.7790866 18.4623731,20.975 18.9745919,20.975 C19.4868106,20.975 19.9969887,20.7790866 20.3888054,20.3893007 C21.1703982,19.6076879 21.1703982,18.3424141 20.3888054,17.5608014 L13.8034271,10.9752551 Z" id="Shape"></path>
                                    </g>
                                </svg>
                            </span>
                        </div>
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
                <ul className="notification-list">
                    <ReactCSSTransitionGroup transitionName="notification" transitionEnterTimeout={1700} transitionLeaveTimeout={1700}>
                        { this.listNotifications() }
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}

export { Notification };
