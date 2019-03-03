import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ text }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{text}</h1>
    </header>
  );
};
Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
