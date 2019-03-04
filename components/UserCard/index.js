// Component - User card
// Render user card

import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import starRating from '../../util/star-rating';
import replaceImageSize from '../../util/replace-image-size';
import Image from '../Image/';

import colours from '../../styles/colours';
import styles from './styles';

const UserCard = ({ user: { displayName, reputation, profileImage } }) => {
  return (
    <div className={styles.userCard} data-testid="user-card">
      <Image
        src={replaceImageSize(profileImage, 375)}
        altText={`${displayName} profile image`}
        styles={styles.profileImg}
      />
      <div className={styles.details}>
        <p className={styles.name}>{displayName}</p>
        <StarRatings
          rating={starRating(reputation)}
          starRatedColor={colours.primary}
          numberOfStars={5}
          name="rating"
          starDimension="25"
          starSpacing="2"
          data-testid="reputation"
        />
        <p>({reputation})</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    reputation: PropTypes.number,
    profileImage: PropTypes.string
  }).isRequired
};

export default UserCard;
