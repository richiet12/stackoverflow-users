import { css } from 'emotion';

import sizes from '../../styles/sizes';

const starLegend = css`
  display: flex;
  margin: ${sizes.spacing.medium} auto;
  width: 240px;
  align-items: center;
`;

const starLegendText = css`
  margin-left: ${sizes.spacing.small};
`;

export default { starLegend, starLegendText };
