
const promise = new Promise(function (resolve,reject) {
    resolve(`HEY`)
});

const cows = 9;

const countCows = new Promise(function (resolve,reject){
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There is no cows on the farm");
    }
});

countCows.then( resultad => {
    console.log(resultad);
}).catch( (error) => {
    console.error(error);
}).finally( () => console.log('Finally'))
