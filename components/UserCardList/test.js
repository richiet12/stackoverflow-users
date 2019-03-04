import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import UserCardList from './index';

const users = [
  {
    displayName: 'Alice',
    reputation: 500,
    profileImage: '/path-to-image.png'
  },
  {
    displayName: 'Andy',
    reputation: 400,
    profileImage: '/path-to-image.png'
  }
];

const { getByText } = render(<UserCardList users={users} />);

describe('UserCardList', () => {
  describe('Given a list of twos users is provided', () => {
    it('renders UserCards for all users', () => {
      expect(getByText('Alice')).toBeInTheDocument();
      expect(getByText('Andy')).toBeInTheDocument();
    });
  });
});
