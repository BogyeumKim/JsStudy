console.log('my' + 'cat');
console.log('1'+2);
console.log(`1+2 = 
'''
${1 + 2}`); // 빽틱으로하면 스트링 리터럴만들수있음

console.log("===============")
const value1= false;
const value2 = 4<2;

function check(){
    for(let i=0; i<10; i++){
        console.log('끝');
    }
    return true;
}

console.log(`or[||] : ${value1 || value2 || check()}`); // 마지막 체크는 트루로반환 중요한건 우선순위가 맨앞부터시작
// value1이 true면 '끝' 안나옴 가벼운것부터 배치하고 함수같이 무거운건 뒤쪽에두자

console.log(`and[&&] : ${value1 || value2 || check()}`); // 맨앞 value1이 false면 무조건 false 똑같이 우선순위적용으로 
// 가벼운거앞에


// !(not)
console.log(!value2)
console.log("===============")
const StringFive='5';
const NumberFive=5;


// == 연산 타입을 변경해서 검사함 (안에들어있는 값만 검사)
console.log(`스트링==넘버 :${StringFive==NumberFive}`);  

// === 연산 타입까지 신경씀 
console.log(`스트링===넘버 :${StringFive===NumberFive}`);

const equality1 = { name : 'test'};
const equality2 = { name : 'test'};
const equality3 =  equality1;

console.log(`이퀄리티1==이퀄리티2 : ${equality1 == equality2}`); // false
console.log(`이퀄리티1===이퀄리티2 : ${equality1 === equality2}`); // false
console.log(`이퀄리티1==이퀄리티3 : ${equality1 == equality3}`); // ture



console.log("===============")
console.log(0 == false); // true 0은 펄스니까
console.log(0 === false); // 타입이다름 false 
console.log('' == false); // 공백은 펄스니까 true
console.log('' === false); // 타입다름 false
console.log(null == undefined); // 널은 언디파인 true
console.log(null === undefined); // 타입다름 false

console.log("===============")

// Teranary operator : ?

const name= 'bogyeum'
console.log(name === 'bogyeum'?'yes' : 'no') // 코드의 가독성 떨이지니까 많은값이 있을땐 하지말자 값많을땐 if, switch

console.log("===============")

const swc = '4';
switch(swc) {
    case '1':
        console.log('1번입니다');
        break;
    case '2':
        console.log('2번')
        break;
    default :
        console.log('없음')
        break;
}

console.log("===============")

let i=3;

while (i>0){ // 조건을 먼저 실행
    console.log(`while : ${i}`); 
    i--;
}

do {
    console.log(`do while:${i}`); // 블럭을 먼저 실행 
    i--;
} while(i>0);



