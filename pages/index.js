import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../store/users';

import Header from '../components/Header';
import UserCardList from '../components/UserCardList/index';
import StarLegend from '../components/StarLegend/index';

import pageStyles from '../styles/page';

const title = 'Top Stackoverflow users';

const Index = ({ users }) => (
  <Fragment>
    <div className={pageStyles.container}>
      <Header text={title} />
      <StarLegend />
      <UserCardList users={users} />
    </div>
  </Fragment>
);

Index.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      reputation: PropTypes.number,
      profileImage: PropTypes.string
    })
  ).isRequired
};

Index.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getUsers());
  return {};
};

export default connect(
  ({ users }) => ({ users }),
  { getUsers }
)(Index);
