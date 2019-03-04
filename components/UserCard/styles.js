import { css } from 'emotion';

import sizes from '../../styles/sizes';
import colours from '../../styles/colours';
import breakpoints from '../../styles/breakpoints';

const userCard = css`
  border: ${sizes.spacing.xSmall} solid ${colours.tertiary};
  display: block;
  text-align: center;
  margin: ${sizes.spacing.medium} 0;
  padding: ${sizes.spacing.medium} 0;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    text-align: left;
    padding: 0;
    margin: ${sizes.spacing.medium} 40px;
  }
`;

const details = css`
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 ${sizes.spacing.medium};
    width: 50%;
  }
`;

const name = css`
  font-size: ${sizes.fonts.small};
  display: 'block';
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${sizes.fonts.medium};
  }
`;

const profileImg = css`
  display: block;
  clear: both;
  margin: 0 auto;
  width: 50%;
  @media (min-width: ${breakpoints.tablet}) {
    margin: 0;
    height: 200px;
    width: auto;
  }
`;

export default { userCard, details, name, profileImg };
