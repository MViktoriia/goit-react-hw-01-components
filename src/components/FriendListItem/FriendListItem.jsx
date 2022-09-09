import PropTypes from 'prop-types';
import { Status, Avatar, Name} from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            <Status isOnline ={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </>
            
    )
    
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;