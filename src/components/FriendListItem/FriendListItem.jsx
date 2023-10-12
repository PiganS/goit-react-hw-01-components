import { Friend, Status, Name } from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? 'green' : 'red';
  
    return (
        <Friend>
        <Status style={{ backgroundColor: status}}>
        </Status>
        <img src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </Friend>
    );
  };
