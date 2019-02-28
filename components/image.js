// Component - Image
// Render image, when src is null use default missing image

import React from 'react';
import PropTypes from 'prop-types';

const missingImgPath = '/static/missing-image.png';

const Image = ({ src, altText }) => {
  return <img src={src} alt={altText} />;
};

Image.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string.isRequired
};

Image.defaultProps = {
  src: missingImgPath
};

export default Image;
