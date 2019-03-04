import fetch from 'isomorphic-unfetch';

export default () =>
  fetch(
    'https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow'
  ).then(res => res.json());
