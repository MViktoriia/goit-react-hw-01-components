import user from '../database/user.json';
import Profile from './Profile/Profile';
import data from '../database/data.json'
import Statistics from './Statistics/Statistics';
import friends from '../database/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from '../database/transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 15,
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}    
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title= "Upload stats"
        stats = {data}
      />
      <FriendList
        friends = {friends}
      />
      <TransactionHistory
        items = {transactions}      
      />
    </div>
  );
};


