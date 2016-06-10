exports.debug = (title, obj, status) => {
  const moment = require('moment');
  const fs = require('fs');
  // this will help format the json
  const utils = require('util');

  // This willl make the console more structured with time other options
  // require('console-stamp')(console,
  //   {
  //     colors: {
  //       stamp: 'yellow',
  //       label: 'white',
  //     },
  //   });

  const time = moment().format("ddd, MM/Do/YY, h:mm:ssa");
  const seperator = '\n--------------\n';
  const pkg = '['+time+']'+' '+title+ ' ' + utils.format('%j', obj) + ' ' + status + seperator;

  // if developer passes DEBUG=true it will show logging and will save to log file.
  if (process.env.DEBUG) {
    // using the file system to append to existing file with a flage of append.
    // passing in the package string.
    fs.appendFile('logs/logfile.log', pkg, { flags: 'a' }, (err) => {
      if (err) throw err;
      console.log(pkg);
    });
  }
};
