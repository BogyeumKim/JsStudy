'use strict';

// 1. Object to JSON

// stringify(obj)
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birtDate : new Date(),
    jump: ()=>{
        console.log(`${name} can jump`);
    }
}

json= JSON.stringify(rabbit,["name","color","size"]);
console.log(json);

json= JSON.stringify(rabbit,(key,value)=>{
    console.log(key);
    console.log(value);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

//2. JSON to OBJ
// parse(json)

console.clear();
json=JSON.stringify(rabbit);


    const obj = JSON.parse(json);

console.log(obj);

const obj2 = JSON.parse(json,(key,value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birtDate' ? new Date(value) : value;
});

console.log(obj2);

rabbit.jump();

//obj.jump는 안됨 제이슨은데이터만들어감

console.log(rabbit.birtDate.getDate());

console.log(obj2.birtDate.getDate());


