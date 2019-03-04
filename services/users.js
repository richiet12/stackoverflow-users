import fetch from 'isomorphic-unfetch';

const apiPath = 'https://api.stackexchange.com/2.2/users';
const pageSize = 20;
const order = 'desc';
const sort = 'reputation';
const site = 'stackoverflow';

const url = `${apiPath}?pagesize=${pageSize}&order=${order}&sort=${sort}&site=${site}`;

export default () => fetch(url).then(res => res.json());
