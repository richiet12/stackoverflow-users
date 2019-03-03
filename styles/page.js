import { css } from 'emotion';

import colours from './colours';

const container = css`
  background: ${colours.background};
  color: ${colours.text};
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  @media (min-width: 420px) {
    max-width: 1028px;
    margin: 0 auto;
  }
`;

export default { container };
