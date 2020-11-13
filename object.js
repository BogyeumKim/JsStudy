


const obj1={}; // 오브젝트 리터럴 
const obj2= new Object(); // 오브젝트 컨스트럭터 신택스


// const name = 'bogyeum';
// const age= 4;
// print(name,age);
function print(person){
    console.log(person.name);
    console.log(person.age);
    
}

const bg = { name : 'bogyeum', age :4};
print(bg);

bg.hasJob = true; // 동적으로 새로 생성가능함
console.log(bg.hasJob);

delete bg.hasJob;
console.log(bg.hasJob);

// Computed properties
console.log(bg.name);
console.log(bg['name']);

bg['job']=true;
console.log(bg['job']);

function printValue(obj,key){
    console.log(obj[key]);
}

printValue(bg,'name');


//3. Property value shorthand

const person1 = { name : 'bob', age : 2};
const person2 = { name : 'steve', age : 3};
const person3 = { name : 'dave', age : 4};
const person4 = new Person('Lee',30);

console.log(person4);


//4. COnstructor function
function Person(name,age){
    // this ={};
    this.name=name;
    this.age=age;
    //return this
}


//5. in operator 키가 있나 없나 확인
console.log('name' in bg); // true
console.log('age' in bg); // true 
console.log('random' in bg); // false
console.log(bg.random); // undefined



// 6. for ..in vs for ..of 
// for (key in obj)


console.clear();
for ( key in bg ){
    console.log(key);
}

// for ( value of iterable)
const array = [1,2,4,5];
for ( let i=0; i<array.length; i++){
    console.log(array[i]);
}

console.log('===============')
for (i of array){
    console.log(i)
}


// 7. Fun cloning
const user = { name : 'Kim', age: 25};
const user2 = user;
user2.name='coder';
console.log(user);

//old way
const user3={};
for(key in user){
    user3[key] = user[key];
}

console.log(user3);


//new way

const user4=Object.assign({},user);
console.log(user4);


// antoehr example
const fruit1= {color : 'red'};
const fruit2 = {color : 'blue', size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color); // blue 뒤에있는게 계속 덮어씌움( fruit2가 fruit1 를)
console.log(mixed.size); // big 
