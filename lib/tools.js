const https = require('http');
module.exports = {
  // apps(route, callback) {
  //
  // },
  // status(stat) {
  //   return `${stat.first}, ${stat.last}`;
  // }

  loadWiki(person, callback) {
    const url = `http://localhost:3000/api/${person.first}_${person.last}`;

    https.get(url, (res) => {
      let body = '';
      res.setEncoding('UTF-8')

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        callback(body);
      });
    });

  }
};
