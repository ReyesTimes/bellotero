export default function executeRequest({
    path, data = {}, method = 'GET', responseType, auth = false
  }) {
    fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json', { method: 'GET' })
    .then((res) => {
        console.log(res);
    })
  }
  