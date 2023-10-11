export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? 'green' : 'red';
  
    return (
        <li className="item">
        <span className="status" style={{ 
           backgroundColor: status,
           display: "block",
           width: '10px', 
           height: '10px', 
           borderRadius: '50px'}}>
        </span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  };
