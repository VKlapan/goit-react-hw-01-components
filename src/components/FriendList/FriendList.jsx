import PropTypes from 'prop-types';
import { FriendBoard } from './FriendList.styled';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => (
  <FriendBoard>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
    ))}
  </FriendBoard>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
