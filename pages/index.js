import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../store/users';

import Header from '../components/Header';
import UserCardList from '../components/UserCardList/index';
import StarLegend from '../components/StarLegend/index';

import pageStyles from '../styles/page';

const title = 'Top Stackoverflow users';

const Index = ({ users, isError, isLoading }) => {
  return (
    <Fragment>
      <div className={pageStyles.container}>
        <Header text={title} />
        <StarLegend />
        <UserCardList users={users} isError={isError} isLoading={isLoading} />
      </div>
    </Fragment>
  );
};

Index.propTypes = {
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

Index.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getUsers());
  return {};
};

export default connect(
  ({ users, isError, isLoading }) => ({ users, isError, isLoading }),
  { getUsers }
)(Index);
