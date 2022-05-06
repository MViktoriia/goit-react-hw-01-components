import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            {isOnline ? <span className={`${style.status} ${style.isonline}`}></span> : <span className={`${style.status} ${style.isofline}`}></span>}
            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
        </>
            
    )
    
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;