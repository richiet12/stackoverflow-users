import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from 'next/head';
import { getUsers } from '../store/users';

import Header from '../components/Header';
import UserCard from '../components/UserCard/index';

import pageStyles from '../styles/page';

const title = 'Top Stackoverflow users';

const Index = ({ users }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet" />
    </Head>
    <div className={pageStyles.container}>
      <Header text={title} />
      {users.map(user => UserCard({ user }))}
    </div>
  </Fragment>
);

Index.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      display_name: PropTypes.string,
      reputation: PropTypes.number,
      profile_image: PropTypes.string
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
