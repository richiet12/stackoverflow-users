import { css } from 'emotion';

import colours from '../../styles/colours';

const header = css`
  background: ${colours.primary};
  color: ${colours.secondary};
  padding: 5px 20px;
`;

const title = css`
  font-size: 42px;
  text-align: center;
`;

export default { header, title };
