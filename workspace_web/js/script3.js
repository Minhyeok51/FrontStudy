// function sum(num1,num2){
//     let result = num1+num2;
//     return result;
// }
//화살표 함수형식으로 수정.
// const sum =(num1,num2)=>{
//     let result = num1+num2;
//     return result;
// };
const sum = (num1, num2) => num1 + num2; //리턴으로 인식
const result = sum(10, 20);
console.log("out: " + result);

const sub = (num1, num2) => num2;
const result2 = sub(30, 15);
console.log("out: " + result2);

printHello(); //let and const는 호이스팅이 되지 않음
function printHello() {
  console.log("hello");
}

(function init(num1) {
  console.log("initialized!");
  console.log(num1);
})(30);
