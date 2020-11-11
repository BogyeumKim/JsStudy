

function change(obj){
    obj.name='coder';
}

const bg = { name : ' bogyeum'};
change(bg); // bg의 name이 coder로 바뀜
console.log(bg);


console.log("===============");

function showMsg(msg,from = 'unknown'){
console.log(`${msg} by ${from}`)
}
showMsg('hi'); 

function all(...args){

    args.forEach((arg) => console.log(arg))
}

all('test1','test2','test3');


console.log("=======함수안함수========");

// 함수안 함수에서는 부모함수 변수를 자식함수에서 쓸수있지만  자식변수를 부모에서 사용불가하다 아래 예제

function mother(){
    let msge = 'mother';
    console.log(msge);
        function chiled(){
            console.log(`hi + ${msge}`);
            let chiledlet = ' chiled';
        }

}
mother();



console.log("========리턴=======");
function sum(a,b){
    return a+b;
}
console.log(sum(3,5));

console.log("=======Early return========");

// if조건문안에 처리되는 과정을 블록안에 넣기보다는 밖에다가 빼는게 더 좋다

function user(user) {
    if(user.point > 10){
        // 쏼라쏼라 << if 블럭안에 쓰는건 별로안좋음
    }
}

function user(user){
    if (user.point<=10){
        return ;
    }
    // point가 10이상일때 쏼라쏼라 
}

console.log("========펑션 익스프레션=======");

// 펑션을 할당하는거임 할당된다음부터 쓸수있음 

//test(); // 에러날거임 test가 할당안됨
const test = function(){
        console.log('const test에 펑션을 저장')
} 

test();
const test2=test;
test2();



console.log("========콜백=======");

function Quiz(answer,yes,no){
    if(answer === 'you'){
        yes();
    }
    else{
        no();
    }
}

const yes = function(){ // anonymous 펑션
    console.log('yes!');
}

const no = function print(){ // named 펑션 디버깅할때 함수이름이 나옴
    console.log('no!');
}

Quiz('you',yes,no);
Quiz('me',yes,no);

console.log("========Arrow 함수(개꿀이라고함)=======");

 const simple = function () {
     console.log('simplePrint');
 }

// 위에 simple 함수를 매우 개꿀로 바꿀수있음

const simple2 = () => console.log('WOW');
simple();
simple2();

const add = (a,b) => a+b; // ()안에 파라미터 =>옆에 리턴값
console.log(add(10,4));


console.log("========IIFE=======");
(function hello() {
    console.log('IIFE');
})();

// 함수앞에 ( )붙이고 끝날때 () 붙이면 바로 실행


console.log("========혼자하는퀴즈=======");

// 콜백으로 계산기 만들기

const Calculate = function(command, a,b){
    if(command === add2){
       add2();
    }
    else if(command === substract){
        substract();
    }
    else if(command === multiply){
        multiply();
    }
    else if(command === remainder){
        remainder();
    }
    else {
        not();
    }
}





function add2(a,b){
    console.log(a+b);
}


const substract = (a,b) => cosnole.log(a-b);
const multiply = (a,b) => a*b;
const remainder = (a,b) => a/b;
const not = () => console.log('없음');


Calculate(add2,3,5); // NAN뜬다... 타입스크립트를생각해야하나..


function calcal(command,a,b){
    switch (command){
        case 'add':
            return a+b;
        case 'substaract':
            return a-b;
        case `divide`:
            return a/b;
        case 'multiply':
            return a*b;
        default:
            console.log('없는계산식');
            
    }
}

console.log(calcal('add',4,4));