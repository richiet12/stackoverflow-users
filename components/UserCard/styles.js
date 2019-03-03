import { css } from 'emotion';

const userCard = css`
  border: 1px solid #ced4de;
  display: block;
  text-align: center;
  margin: 20px 0;
  padding: 20px 0;
  @media (min-width: 420px) {
    display: flex;
    flex-direction: row;
    text-align: left;
    padding: 0;
    margin: 20px 40px;
  }
`;

const details = css`
  @media (min-width: 420px) {
    padding: 0 20px;
    width: 50%;
  }
`;

const name = css`
  font-size: 20px;
  //   text-decoration: underline;
  //   float: left;
  display: 'block';
  @media (min-width: 420px) {
    // text-align: left;
    font-size: 30px;
  }
`;

const stars = css`
  //   width: 200px;
  //   //   float: left;
  //   display: 'block';
  //   margin: 0 auto;
`;

const profileImg = css`
  display: block;
  clear: both;
  margin: 0 auto;
  width: 100%;
  width: 50%;
  @media (min-width: 420px) {
    margin: 0;
    height: 200px;
    width: auto;
  }
`;

export default { userCard, details, name, stars, profileImg };
