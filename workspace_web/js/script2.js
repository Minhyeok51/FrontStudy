//let ->대부분의 변수 값 밑에서 다시 바꿀수 있음
//const ->상수형 (한번 값이 들어가면 바뀔일이 없는 경우. 바꾸면 오류남 반복문안에서도 못씀 처음값이랑 달라지기때문에)

// function gugudan3() {
//   for (let i = 1; i <= 9; i++) {
//       console.log(`3*${i}=${3 * i}`);
//   }
// }
// gugudan3();
// console.log();

//   const funcGugudan4=function () {
//     for (let i = 1; i <= 9; i++) {
//         console.log(`4*${i}=${4 * i}`);
//     }
//   }
//   funcGugudan4();
//   console.log();

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

function gugudan(dan) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan}*${i}=${dan * i}`);
    }
  }
  gugudan(9);
  