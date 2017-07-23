import * as firebase from 'firebase';

/**
 * Verify user is authenticated.
 * First verify firebase auth currentUser. This could take a time,
 * specially when page reloads. For this reason we strore user uid brwosers
 * localStorage. So when one of each exists, the user is authenticaed.
 */ 
export const isAuthenticated = () => {
    return !!firebase.auth().currentUser || !!localStorage.getItem('user');
}
