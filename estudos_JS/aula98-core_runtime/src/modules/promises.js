const { resolve, reject } = require("core-js/fn/promise");

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ola');
            resolve();
        }, 2000)
    })
}

export default async function () {
    await promise();
    console.log('terminou')
}