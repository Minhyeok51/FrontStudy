let arr = [10, 20, 30];
arr.push(50);
console.log(arr);
arr.splice(3,0,40); //추가인덱스,지우는 부분 (추가되는 인덱스순서 부터 입력받은 수 만큼 삭제) ,추가하는것
console.log(arr);

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// //동적으로 값을 넣고 빼고 하고 싶을때
// console.log(arr);
// arr.push(40); //배열의 마지막에 요소를 추가하는것
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.pop(); //제일 마지막에 있는 요소 제거
// console.log(arr);

// arr.unshift(9); //맨앞에 추가
// console.log(arr);
// arr.shift(); //맨앞에 있는 요소 빼냄
// console.log(arr);
// arr.reverse(); //요소들 반대로 나열
// console.log(arr);
// arr.sort(); //요소들을 오름차순으로 정렬(앞자리 숫자만 보고-사전순)
// console.log(arr);

// let strArr = ["back", "car", "apple"];
// console.log(strArr);
// strArr.sort(); //사전순으로 정렬
// console.log(strArr);

let arrEx= [10,40,60,70];
let num1 = 30;
let num2 = 50;
arrEx.splice(1,0,num1);
arrEx.splice(3,0,num2);
console.log(arrEx); //10,30,40,50,60,70