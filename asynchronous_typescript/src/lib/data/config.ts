import { AxiosResponse } from 'axios';

export const API = '/api';

const apiUrl = API;

const parseList = <T>(response: AxiosResponse) => {
  if (response.status !== 200) throw Error(response.statusText);
  if (!response.data) return [];
  let list: T[] = response.data;
  if (typeof list !== ' object') {
    console.log('list type is not an object: ', list);
    list = [];
  }
  return list;
};

export { apiUrl, parseList };
