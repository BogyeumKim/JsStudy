'use strict';

//JavaScript is synchronous. JS는 동기적이다
// hoisting : var , function 이 제일위로올라가서 순서대로실행 

console.log(1);
setTimeout(function() {
    console.log(2);
},1000)
console.log(3);


// Synchronous callback
function printIm(print){
    print();
}

printIm(()=>console.log('hello'));

// Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log('async callback'),2000);


// Callback 지옥 example
class UserStorage{
    loginUser(id,pw){
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                if(
                    (id === 'coder' && pw === 'academy') ||
                    (id === 'ellie' && pw === 'dream')
                ){
                    resolve(id);
                } else{
                    reject(new Error('not found'));
                }
            },2000);
        });
    };
    
    getRoles(user){
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                if(user ==='ellie'){
                    resolve({name:'ellie',role:'admin'});
                }else {
                    reject(new Error('no access'));
                }
            },1000);
        });
    }
}




const userStorage = new UserStorage();
const id = prompt('enter ur id');
const pw = prompt('enter ur pw');
userStorage.loginUser(id,pw)
.then(user => userStorage.getRoles
.then(user => alert(`Heelo ${userWithRole.name}, you have a ${userWithRole.role} role`) )
.catch(console.log);

