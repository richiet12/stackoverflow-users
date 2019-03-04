// Component - User card list
// Render list of user cards

import PropTypes from 'prop-types';

import UserCard from '../UserCard/';

const UserCardList = ({ users }) => {
  return users.map(user => UserCard({ user }));
};

UserCardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      reputation: PropTypes.number,
      profileImage: PropTypes.string
    })
  ).isRequired
};

export default UserCardList;
