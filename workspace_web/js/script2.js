//let ->대부분의 변수 값 밑에서 다시 바꿀수 있음
//const ->상수형 (한번 값이 들어가면 바뀔일이 없는 경우. 바꾸면 오류남 반복문안에서도 못씀 처음값이랑 달라지기때문에)

// function gugudan3() {
//   for (let i = 1; i <= 9; i++) {
//       console.log(`3*${i}=${3 * i}`);
//   }
// }
// gugudan3();
// console.log();

const funcGugudan4 = function (dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan}*${i}=${dan * i}`);
  }
};
funcGugudan4(4);
console.log();

function gugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan}*${i}=${dan * i}`);
  }
}
gugudan(9);

//   const funcGugudan6= () => {
//     for (let i = 1; i <= 9; i++) {
//         console.log(`6*${i}=${6 * i}`);
//     }
//   }
//   funcGugudan6();

//-------------------------------------------
// function sum(num1,num2){
//     let result =num1 + num2;
//     console.log("sum = "+result);
// }
// sum(10,20);

let arr1 = [10, "20", 30];
let arr2 = [10, "20", 30];
let arr3 = [10, 20, 30];
let arr4 = ["10", "20", "30"];

const compareArr = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i]}===${arr2[i]}`); // == 일때랑 ===일때 차이
  }
};
console.log("비교 1");
compareArr(arr1, arr2);
console.log("비교 2");
compareArr(arr3, arr4);
console.log("비교 3");
compareArr(arr2, arr4);
