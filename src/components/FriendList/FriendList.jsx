import { FriendBoard } from './FriendList.styled';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => (
  <FriendBoard>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
    ))}
  </FriendBoard>
);
