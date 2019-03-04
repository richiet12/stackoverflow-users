import { css } from 'emotion';

import colours from '../../styles/colours';
import sizes from '../../styles/sizes';

const header = css`
  background: ${colours.primary};
  color: ${colours.secondary};
  padding: ${sizes.spacing.small} ${sizes.spacing.medium};
`;

const title = css`
  font-size: ${sizes.fonts.large};
  text-align: center;
`;

export default { header, title };
