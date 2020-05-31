// Namespace tokens passing prefix
// ex.
//      UserAuth.setPrefix('customer');
//      UserAuth.setData({ token: 123, uid: 123, client: 'sample' });
//      UserAuth.getData(); // will prefix variables with 'customer'
//      UserAuth.isLoggedIn();
//      UserAuth.clearData();
//
// These three values are needed to be authorized in the api, passed as headers
// token, uid, client
//
// ex passed as headers in request.
//  headers: {
//      'access-token': token,
//      'uid': uid,
//      'client': client,
//      'token_type': 'Bearer'
//  }

const getData = () => {
  const prefix = localStorage.getItem('prefix') || '';

  const token = localStorage.getItem([prefix, 'token'].join('_'));
  const uid = localStorage.getItem([prefix, 'uid'].join('_'));
  const client = localStorage.getItem([prefix, 'client'].join('_'));

  return { token, uid, client, prefix };
};

const clearData = () => {
  const prefix = localStorage.getItem('prefix');

  localStorage.removeItem([prefix, 'token'].join('_'));
  localStorage.removeItem([prefix, 'uid'].join('_'));
  localStorage.removeItem([prefix, 'client'].join('_'));
};

const setData = ({ token, uid, client }: { token: string; uid: string; client: string; }) => {
  const prefix = localStorage.getItem('prefix');

  localStorage.setItem([prefix, 'token'].join('_'), token);
  localStorage.setItem([prefix, 'uid'].join('_'), uid);
  localStorage.setItem([prefix, 'client'].join('_'), client);
};

const setPrefix = (prefix: string) => {
  localStorage.setItem('prefix', prefix);
};

const isLoggedIn = () => {
  const { token, uid, client } = getData();
  return !!token && !!uid && !!client;
};

export const UserAuth = {
  getData,
  clearData,
  setData,
  setPrefix,
  isLoggedIn,
};
