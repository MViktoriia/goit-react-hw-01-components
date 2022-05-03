import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';


function FriendList({ friends }) {
    return (
        <ul className="friend-list">            
            {friends.map(friend => (
                <li key={friend.id} className="item">    
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