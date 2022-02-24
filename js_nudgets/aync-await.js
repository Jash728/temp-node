const datas = [
    { name: 'Jash ', profession: 'Full stack developer' },
    { name: 'Dhruvil ', profession: 'Full stack developer' },
];

function getDatas() {
    setTimeout(() => {
        let output = " ";
        datas.forEach((data, index) => {
            output += `<li> ${data.name} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            // callback();
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject("Anything is wrong in your code!!!");
            }
        }, 2000);
    });
}

async function start() {
    await createData({ name: 'Samyak ', profession: 'Full stack developer' });
    getDatas();
}

start();


// createData({ name: 'Samyak ', profession: 'Full stack developer' }).then(getDatas).catch(err => console.log(err));