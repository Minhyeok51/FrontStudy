const person = {
  name: "Gildong",
  likes: "apple",
};

console.log(person.name);
person.name = "Hong Killdong";  //person주소 안에 name key의 value가 바뀐것이지
                                //person의 주소가 바뀐것이 아니라 변수타입이 const인데도 괜찮.
console.log(person.name);

person.age=30;      //키 추가하기
console.log(person);
delete person.age;  //지우기
delete person.likes;
delete person.name;
console.log(person);

let num1 =10;
let num2 =num1;
num1=20;    //num1을 num2에 저장한 후 num1을 바꿔도 num2는 처음 저장한 값을 가지고있음.
            //- 깊은 복사(한쪽이 변경되어도 서로 영향을 미치지 않는 복사)
console.log(num1);
console.log(num2);

