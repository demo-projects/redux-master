const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function apiRequest(config) {
  const {url, method} = config;
  return fetch(`${BASE_URL}/${url}`, {method}).then( response => response.json());
}
