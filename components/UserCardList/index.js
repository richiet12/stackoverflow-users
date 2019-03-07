// Component - User card list
// Render list of user cards
import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard/';

const UserCardList = ({ users, isError, isLoading }) => {
  if (isError) {
    return <p>Something has gone wrong</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return users.map(user => UserCard({ user }));
};

UserCardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      reputation: PropTypes.number,
      profileImage: PropTypes.string
    })
  ).isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default UserCardList;
