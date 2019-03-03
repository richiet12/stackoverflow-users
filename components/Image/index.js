// Component - Image
// Render image, when src is null use default missing image

import React from 'react';
import PropTypes from 'prop-types';

const missingImgPath = '/static/missing-image.png';

const Image = ({ src, altText, styles }) => {
  return <img src={src} alt={altText} className={styles} data-testid="image" />;
};

Image.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string.isRequired,
  styles: PropTypes.string
};

Image.defaultProps = {
  src: missingImgPath,
  styles: ''
};

export default Image;
