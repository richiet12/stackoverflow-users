import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Title from '../components/title';
import Image from '../components/image';

const Index = ({ isLoading, users }) => (
  <Fragment>
    <Title />
    {users.map(user => (
      <div>
        <p>{user.display_name}</p>
        <p>{user.reputation}</p>
        <Image src={user.profile_image} altText={`${user.display_name} profile image`} />
      </div>
    ))}
  </Fragment>
);

function mapStateToProps(state) {
  console.log(state);
  const { isLoading, users } = state;
  return { isLoading, users };
}

export default connect(mapStateToProps)(Index);
