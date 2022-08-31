// const random = Math.floor((Math.random()*6))+1; //정수 뽑아내는 방식이 자바와 다르다
// console.log(random);

// console.log(Math.floor(5.6));   //버림
// console.log(Math.ceil(5.2));    //올림
// console.log(Math.round(5.6));   //반올림
// console.log(Math.round(5.2));   //반올림

// console.log();

// const date = new Date();
// console.log(date);

// const date1 = new Date(2022,08,31); //월 부분 0이 1월로 시작
// console.log(date1);

// const date2 = new Date(2022,07,31,10,41,38);    //시간 부분 한국기준이 아님
// console.log(date2);

// console.log(date2.toLocaleDateString());
// console.log(date2.toLocaleTimeString());

// const date3= new Date('2022-08-31');
// console.log(date3);
// const date4= new Date('2022-08-31 10:49:15');
// console.log(date4);
// console.log();
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getDate());    //일
// console.log(date.getDay()); //요일
//                             //일(0)월(1)화(2)수(3)목(4)금(5)토(6)
//-------------------------------------------------------------------------------
const date1 = new Date('2022-08-31');   //오늘
const date2 = new Date('2022-09-19');   //UI 1차 프로젝트 시작일

const dateDiff =date2.getTime() - date1.getTime();
console.log(dateDiff);  //1000 이 1초

// const interval = dateDiff /(24*60*60*1000) //일
// const interval = dateDiff /(60*60*1000) //시
// const interval = dateDiff /(60*1000) //분
const interval = dateDiff /1000 //초

console.log(interval);