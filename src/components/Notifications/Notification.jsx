import PropTypes from 'prop-types';


const Notification = ({ message }) => {
    return (
        <p className="title">{message}</p>
    );
}

Notification.protoType = {
    message: PropTypes.string,
}

export default Notification;