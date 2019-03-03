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

const UserCard = ({ user: { display_name, reputation, profile_image } }) => {
  return (
    <div className={styles.userCard} data-testid="user-card">
      <Image
        src={replaceImageSize(profile_image, 375)}
        altText={`${display_name} profile image`}
        styles={styles.profileImg}
      />
      <div className={styles.details}>
        <p className={styles.name}>{display_name}</p>
        <StarRatings
          rating={starRating(reputation)}
          starRatedColor={colours.primary}
          numberOfStars={5}
          name="rating"
          starDimension="25"
          starSpacing="2"
          data-testid="reputation"
        />
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    display_name: PropTypes.string,
    reputation: PropTypes.number,
    profile_image: PropTypes.string
  }).isRequired
};

export default UserCard;
