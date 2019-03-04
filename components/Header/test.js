import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Header from './index';

describe('Header', () => {
  it('Displays the title', () => {
    const { container } = render(<Header text="page title" />);

    expect(container).toHaveTextContent('page title');
  });
});
