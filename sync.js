// const fs = require('fs');

// try {
//     const data = fs.readFileSync('/Users/sathish/Desktop/b4748-be/test.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }

// asynchronous
// const fs = require('fs/promises');

// async function readFileFunction(){
//     const data = await fs.readFile('./test.txt', 'utf-8');
//     console.log(data);
// }

// sayHello = () => {
//     console.log('hello');
// }

// readFileFunction();
// sayHello();

const fs = require('fs');

const data = fs.readFileSync('./test.txt', 'utf-8');
console.log(data);

sayHello = () => {
    console.log('hello');
}

sayHello();