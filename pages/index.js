import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

import Header from '../components/Header';
import UserCard from '../components/UserCard/index';

import pageStyles from '../styles/page';

const title = 'Top Stackoverflow users';

const Index = ({ isLoading, users }) => (
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

function mapStateToProps(state) {
  console.log(state);
  const { isLoading, users } = state;
  return { isLoading, users };
}

export default connect(mapStateToProps)(Index);
