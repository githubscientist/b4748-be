const fs = require('fs');

const content = '\nThe content to be written in the file!';

fs.writeFile('./test.txt', content, { flag: 'a' }, (err) => {
    if (err) console.log(err);
    console.log('content written successfully!');
});