

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


console.log("===============");

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