import PropTypes from 'prop-types';
import { Avatar, FriendCard, Name, Status, Image } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => (
  <FriendCard>
    <Avatar>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt={name}></Image>
    </Avatar>
    <Name>{name}</Name>
  </FriendCard>
);

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
