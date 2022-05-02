import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            {isOnline ? <span className="status is-online"></span> : <span className="status is-ofline"></span>}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </>
            
    )
    
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;