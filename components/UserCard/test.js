import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import UserCard from './index';

const user = {
  displayName: 'Richard',
  reputation: 500,
  profileImage: '/path-to-image.png'
};

const { getByTestId, getByText } = render(<UserCard user={user} />);

describe('UserCard', () => {
  describe('Given a user is provided', () => {
    it('renders a UserCard', () => {
      expect(getByTestId('user-card')).toBeInTheDocument();
    });

    it('renders the users profile image', () => {
      expect(getByTestId('image')).toHaveAttribute('alt', 'Richard profile image');
      expect(getByTestId('image')).toHaveAttribute('src', '/path-to-image.png');
    });

    it('renders the users name', () => {
      expect(getByText('Richard')).toBeInTheDocument();
    });

    it('renders the users reputation in stars', () => {
      expect(getByTestId('user-card')).toContainHTML('<div class="star-ratings"');
    });
  });
});
