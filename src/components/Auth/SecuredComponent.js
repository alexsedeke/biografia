import { isAuthenticated } from '../../helper/auth';

/**
 * Return children of this component if user is authenticated.
 * Otherwise return null.
 */
export const IsSecured = (props) => {
    if (isAuthenticated()) {
        return (props.children);
    }

    return null;
}

/**
 * Return children of this component if user is NOT authenticated.
 * Otherwise return null.
 */
export const IsUnsecured = (props) => {
    if (!isAuthenticated()) {
        return (props.children);
    }

    return null;
}
