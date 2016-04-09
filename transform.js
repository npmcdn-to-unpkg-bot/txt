var R = require('ramda');
var fs = require('fs');

const post = /^\d{4}-\d{2}-\d{2}.*/

fs.readdir('pages', (err, files) => {
  console.log(files);

  const markdownFiles = R.compose(
    R.tap(x => console.log(x)),
    R.filter(R.test(post))
  )(files);
  
  R.forEach((file) => {
    console.log(file);
  }, files);
})
