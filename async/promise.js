'user strict';

// 1. Producer
// 새로운 Promise 만들면 인터넷 켜질때 바로 실행됨
const promise = new Promise((resolve,reject) => {
    // doing some heavy work(network, read files) 비동기코드시작
    console.log('doing something');
    setTimeout(()=>{
        resolve('ellie');
        reject(new Error('no network'));
        },2000);
});

//2. Consumers : then, catch, finally
// then : 성공시 실행됨
// catch : 실패시 실행
// finally : 그냥 성공하든 실패하든 실행
promise.then((value)=>{console.log(value);})
        .catch(error=>{console.log(error);})
        .finally(()=>{console.log('finally');});


// 3. Promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000); // 1초있다가 숫자1을 전달
})

fetchNumber.then(num => num*2)
            .then(num => num*3)
            .then(num => {
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>resolve(num-1),1000);
                });
            })
            .then(num => console.log(num));



// 4. Error Handling
const getHen = () =>
            new Promise((resolve,reject)=>{
                setTimeout(()=>resolve('닭'),1000);
            });
const getEgg = hen =>
            new Promise((resolve,reject)=>{
                //setTimeout(()=> resolve(`${hen}=>알`),1000); // 성공
                setTimeout(()=> reject(new Error(`error ! ${hen}=>알`)),1000); // 실패
            });
const cook = egg =>
            new Promise((resolve,reject)=>{
                setTimeout(()=> resolve(`${egg} => 돋보기`),1000);
            });


// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));


getHen()
.then(getEgg)
.catch(error =>{
    return '계란 에러날때나는거임'
})
.then(cook)
.then(console.log)
.catch(console.log);
