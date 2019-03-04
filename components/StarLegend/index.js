// Component - Star legend
// Render information regarding the stars

import React from 'react';
import StarRatings from 'react-star-ratings';

import { chunk } from '../../util/starRating';

import colours from '../../styles/colours';
import styles from './styles';

const StarLegend = () => {
  return (
    <div className={styles.starLegend}>
      <StarRatings
        rating={1}
        starRatedColor={colours.primary}
        numberOfStars={1}
        name="rating"
        starDimension="25"
        starSpacing="2"
      />
      <p className={styles.starLegendText}>is equal to {chunk} reputation</p>
    </div>
  );
};

export default StarLegend;
