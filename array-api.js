'use strict';


//1. 배열을 String으로 만들기
const frt = [ 'aaple ', 'banana ', 'orange'];
const frt2 = frt.join(' and '); // 배열을 String으로 변환 그리고 파라미터안에 값을 지정해서 구분할수도있음

console.log(frt2);

//내가 쓴 답
console.log(frt.toString());


//2 스트링을 배열로만들기

const q2 = ' 🍕,🍔,🍟,🌭';

const q2array = new Array();
q2array.concat(q2);

console.log(q2array);

//엘리님 답

const result = q2.split(','); // 스트링에 들어간 구분자를넣어야함 안넣으면 하나의배열로 만들어짐
console.log(result);

//3. 거꾸로만들기
const array=[1,2,3,4,5];
console.log(array.reverse());


//4. 배열 2개제외하고 나머지 새로운배열만들기
const q4 = [1,2,3,4,5];
const q4result=q4.slice(2);
console.log(q4result);

//엘리님 답 
const q4el= q4.splice(0,2); // splice는 q4자체를 바꾸는거기때문에 새로운배열이아님
//console.log(q4el);
//console.log(q4);

// 클래스문제

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];


// 문제5 50점이상인학생들

if(Student.age>90){
    console.log(students); // ..?
}



//엘리님답
// find는 콜백이라 리턴시켜야함 그리고 해당하는 첫번째값을 리턴시킴
const q5el = students.find((st)=>{
    return st.score >= 90;
});
console.log(q5el);

// 문제6 학생들중 수업 등록한[true인애들]만 찾아서 배열만들기
//엘리님 답 
// filter도 콜백으로 리턴시키자
const q6 = students.filter((st2)=>{
    return st2.enrolled === true;
});
console.log(q6);



// 문제7 점수만 뽑아와서 새로운 배열만들기
// 원하는 요소만빼올때는 map
const q7 = students.map((st3) => st3.score);
console.log(q7);

// 문제8 50점보다 이하인 학생있나 if로 check 

// for(let i of students){
//     if(students[i].score >50){
//         console.log('test');
//     }
// }

// 엘리님 답
// some 만족하는값 하나있으면 true 
const q8 = students.some((st4)=>st4.score<50);
console.log(q8);

// every 만족하는값 모두있으면  true
const q81 = students.every((st4)=>st4.score>=50);
console.log(q81); // false 45점있으니까

//문제9 학생들 평균점수
// reduceright은 끝부터시작
const q9 = students.reduce((prev,curr)=>{
    console.log(prev+'val');
    console.log(curr);
    return prev+curr.score;
},0);

console.log(q9/ students.length);

// 문제 10 학생들의 점수값이 50점인 이상인애들만 String으로 변환

const q10 = students.map(student => student.score).filter((score)=>score>=50).join();
console.log(q10);

// 보너스문제 학생들 점수값 낮은점수부터 점수만배열로변환

const q11 = students.map((students)=>students.score).sort((a,b)=>a-b);
console.log(q11);
