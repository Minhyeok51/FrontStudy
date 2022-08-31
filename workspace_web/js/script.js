// // document.write('외부 스크립트');
// // console.log("hello");
// var a=10; //Old 한애    거의 안쓰는 추세

// let b=20; //새로생김
// const c=30; //새로생김

// let num=10;

// console.log(a);
// console.log(b);
// console.log(c);

// let str1 ="큰따옴표 '작은따옴표'문자열";
// let str2 = '작은 따옴표 \'작은따옴표도\' "큰따옴표" 문자열';
// let str3 =`백틱 문자열 - 물결표 밑에있는거 "큰따옴표" '작은따옴표'`;
// let str4= num+"더하기"+num + "은" + (num+num) + "이다";
// let str5 =`${num} 더하기 ${num}은 ${num+num}이다`

// // console.log(str1);
// // console.log(str2);
// // console.log(str3);
// console.log(str4);
// console.log(str5);
// // let num1 =10;
// // let num2 =2.5;
// // num2=4;

// // console.log(num1);
// // console.log(num2);

// let bool1 = true;
// let bool2 = false;
// let bool3 = 10!=5;

// console.log(bool1);
// console.log(bool2);
// console.log(bool3);
// console.log();
// let empty1 =null;
// let empty2;
// console.log(empty1+ "\n");
// console.log(empty2);

// let arrScores = [10,20,30,40,50];
// console.log(arrScores);
// console.log(arrScores[0]);
// console.log(arrScores[1]);
// console.log(arrScores[2]);

// let studentScore = {
//     koreanScore:80,
//     englishScore:70,
//     mathScore:90,
//     sicenceScore:60
// };

// console.log(studentScore);
// console.log(studentScore.englishScore);
// console.log(studentScore['sicenceScore']);

// let num = -10;
// num= -num;
// console.log(num);

// let incre =10;
// console.log(incre++); //10
// console.log(++incre);   //12
// console.log(incre--);   //12
// console.log(--incre);   //10

// let nNum = 10; //숫자형
// let strNum = "10"; //문자형
// if (nNum == strNum) {   //값이 같은지
//   console.log("같습니다.");
// } else {
//   console.log("다릅니다.");
// }

// if (nNum === strNum) {  //값과 자료형(타입)이 같은지
//     console.log("같습니다.");
//   } else {
//     console.log("다릅니다.");
//   }

// let score = 80;
// let grade = score>= 90 ? 'A' : 'B';
// console.log(grade);

// let sum= 10+"10";
// console.log(sum)

// let sum2 = 10+Number("10");
// console.log(sum2)

// let sum3 = 10+String(10);       //명시적 형변환
// console.log(sum3);

// let num = 5;

// //양수, 음수, 0
// if (num > 0) {
//   console.log("양수");
// } else if (num < 0) {
//   console.log("음수");
// } else {
//   console.log("0임");
// }

// //짝수 , 홀수
// if (num % 2 === 0) {
//   console.log("짝수");
// } else {
//   console.log("홀수");
// }

/* ----------------------------switch문 ->case
    90~94:A
    95~100:A+
 */

// let score = 95;
/*switch(true){
        case score<=94 :
            console.log('A')
        break;
        case score>=95 :
            console.log('A+')
            break;
    }*/
// switch (score) {
//   case 100:
//   case 99:
//   case 98:
//   case 97:
//   case 96:
//   case 95:
//     console.log("A+");
//     break;
//   case 94:
//   case 93:
//   case 92:
//   case 91:
//   case 90:
//     console.log("A");
// }

/*do{
    console.log('do while 문 내부');
}while(false);

while(조건식){
    실행할 코드
    무한이 아닌이상 조건식이 거짓이 되는 키이스가 발생하게끔 만들어 주기.
}
1. while문으로 1~100까지 출력
        2. 1~100까지의 합 출력
    
    */
// let num=1;
let sum = 0;

// while(num <=100){
//     console.log(num);
//     sum +=num;
//     num++;
// }
// console.log(sum);
//0~20까지의 수중에서 홀수만큰수부터 차레대로 출력하기
for (let num = 20; num >= 0; num--) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

for (let i = 10; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

let arr = ["banana", "apple", "orange"];
let arr2 = [10, 20, 30, 40, 50];
/*  자바 for(String s: arrays) >> arrays  안에 있는 값이나옴
        JS for(Const item in arr) >> arr 값 x, 인덱스 0 1 2가 나옴
    */
for (let key in arr) {
  //in은 인덱스 번호를 key변수에 넣어줌
  console.log(key);
}
for (let key of arr) {
  //of는 인덱스 값을 key 변수에 넣어줌
  console.log(key);
}

// for(let i= 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// for(let i= 0; i<arr2.length; i++){
//     console.log(arr2[i]);
// }

console.log();
let obj = { name: "철수", age: "20", phone: "01023124352" };
console.log(obj.phone);
console.log();

for (let key in obj) {
  console.log(key + ":" + obj[key]);
}

let num = 1;
while (true) {
  console.log(num);
  if (num > 5) {
    break;
  }
  num++;
}
