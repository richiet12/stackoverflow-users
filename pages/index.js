import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Title from '../components/title';

const Index = ({ isLoading, users }) => (
  <Fragment>
    <Title />
    {users.map(user => (
      <p>{user}</p>
    ))}
  </Fragment>
);

function mapStateToProps(state) {
  console.log(state);
  const { isLoading, users } = state;
  return { isLoading, users };
}

export default connect(mapStateToProps)(Index);
