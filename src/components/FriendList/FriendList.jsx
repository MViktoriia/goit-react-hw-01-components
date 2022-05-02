import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import friends from '../../friends.json'

function FriendList(friends) {
    return (
        <ul className="friend-list">            
            {friends.map(friend => (
                <li key={friend.id} class="item">    
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline ={friend.isOnline}
                    />
                </li>    
                )
                )}
                
        </ul>
    )
};

console.log(FriendList(friends));

FriendList.propTypes = {
    id: PropTypes.number.isRequired,
    
}



export default FriendList;