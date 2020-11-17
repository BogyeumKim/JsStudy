'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 =[1,2];

// 2. Index position

const fruits=['사과','바나나'];
console.log(fruits);
console.log(fruits.length);


// 3. Loop array

for (let i of fruits){
    console.log(i);
}

// 4. for Each
fruits.forEach((fruit) => console.log(fruit));

// 5. Addtion  , deletetion , copy
// push : add
fruits.push('파인애플');
console.log(fruits);

// pop : remove
fruits.pop();
console.log(fruits);


// // ///////// shift , unshift는 pop이랑 push보다 느림



// 앞에서 추가
// unshift

fruits.unshift('딸기');
console.log(fruits);

// 앞에서빼기 
// shift
fruits.shift();
console.log(fruits);

// 도중에 수정
// splice
fruits.splice(0,1); // 인덱스0부터 1개만삭제됨
console.log(fruits);


fruits.splice(0,1,'자두','수박','레몬'); // 0에서 1개삭제후에 뒤에 3개 삽입
console.log(fruits);

// 배열붙이기 concat
const fruits2=['아보카도','호두'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching [ index ]

console.clear();
console.log(fruits);
console.log(fruits.indexOf('수박')); // 인덱스위치 1뜸
console.log(fruits.includes('사과')); // 배열에 있나없나 확인 사과없으니 false뜸




