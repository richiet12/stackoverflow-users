/* eslint-env jest */

import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Image from './index';

const { getByTestId, rerender } = render(<Image altText="alt text" src="/path-to-image.png" />);

describe('Image', () => {
  describe('Given a src and altText is provided', () => {
    it('renders an image with the src', () => {
      expect(getByTestId('image')).toHaveAttribute('src', '/path-to-image.png');
    });

    it('renders an image with the alt text', () => {
      expect(getByTestId('image')).toHaveAttribute('alt', 'alt text');
    });
  });

  describe('Given no src is provided', () => {
    it('renders an image with the missing-image src', () => {
      rerender(<Image altText="alt text" />);

      expect(getByTestId('image')).toHaveAttribute('src', '/static/missing-image.png');
    });
  });
});
