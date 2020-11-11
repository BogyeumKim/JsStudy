'use strict'


//선언 
 class Person{
    //생성자
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    //메서드
    spaek(){
        console.log(`${this.name} : hello!`)
    }
 }

 const bogyeum = new Person('bogyeum',26);
 console.log(bogyeum.name);
 console.log(bogyeum.age);

 bogyeum.spaek();




// Getter and Setters

class User {
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if(value<0){
        //     throw Error('age는 0이상이여야 합니다.')
        // }
        // this._age=value;
        this._age = value < 0 ? 0 : value;
    }
}

 const user1= new User('Steve','Job',-1);
 console.log(user1.age);

 // public , private( 최신부라우저도 거의 지원안한다해서 바벨이용해야함 )

 class Experiment{
     publicField = 2;
     #privateField =0;
 }

 const experiment = new Experiment();
 console.log(experiment.publicField);
 console.log(experiment.privateField);

 // Static 

 class Article{
     static publisher = ' Coder ';
     constructor(articleNumber){
         this.articleNumber=articleNumber;
     }


     static printPublisher(){
         console.log(Article.publisher);
     }
 }

 const article1 = new Article(1);
 const article2 = new Article(2);

 Article.printPublisher();


 // Inheritance

 class Shape {
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
 }

 class Rectangle extends Shape{}
class triangel extends Shape{

    draw(){
        super.draw();
        console.log('★');
    }

    getArea(){
        return (this.width * this.height) /2;
    }


    toString(){
        return `Triangel : color : ${this.color}`
    }

}



    const rectangel = new Rectangle(20,30,'red');
    rectangel.draw();
    console.log(rectangel.getArea())
    
    ;
    const triangle = new triangel(30,20,`green`);
    triangle.draw();
    console.log(triangle.getArea()); // 위에 트라이앵글에서 겟아레아를 오버라이딩으로 다시 바꿈

 
    // instanceOf

    console.log(rectangel instanceof Rectangle); // true
    console.log(triangle instanceof Rectangle); // false
    console.log(rectangel instanceof Shape); // true 상속받는것도 포함
    console.log(triangle.toString());