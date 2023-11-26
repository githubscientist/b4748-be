/*  
    Blocking (sync) Vs Non-Blocking (async)
        - Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. 
        - Non-blocking means that multiple requests can be handled concurrently.
    
*/

// const fs = require('fs');

// fs.readFile('/Users/sathish/Desktop/b4748-be/test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.split('\n'));
// });

const fs = require('fs/promises');

async function readFileData() {
    const data = await fs.readFile('/Users/sathish/Desktop/b4748-be/test.txt', 'utf8');

    console.log(data);
}

readFileData();