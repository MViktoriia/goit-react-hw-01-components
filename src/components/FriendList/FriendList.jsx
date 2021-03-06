import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';


function FriendList({ friends }) {
    return (
        <ul className={style.friendlist}>            
            {friends.map(friend => (
                <li key={friend.id} className={style.item}>    
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline ={friend.isOnline}
                    />
                </li>
            ))}                
        </ul>
    )
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),    
}

export default FriendList;