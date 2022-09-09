import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendListStyled, Item } from './FriendList.styled';


function FriendList({ friends }) {
    return (
        <FriendListStyled>            
            {friends.map(friend => (
                <Item key={friend.id}>    
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline ={friend.isOnline}
                    />
                </Item>
            ))}                
        </FriendListStyled>
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