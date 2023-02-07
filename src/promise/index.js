/*
const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
});
*/

const cows = 11;

countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows!`);
    } else {
        reject("There are not enough cows!");
    }
});


countCows.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
}).finally(()=>console.log("Finally!"));

