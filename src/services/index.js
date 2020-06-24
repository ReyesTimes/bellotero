const BASE_URL = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master';

export default function executeRequest({ path = '' }) {
    return fetch(`${BASE_URL}/${path}`)
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
  }
  