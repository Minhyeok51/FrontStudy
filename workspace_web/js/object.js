// const names =['김동하', '빙예은', '정혜연'];    //배열
// console.log(names[0]);

// const student = {       //객체
//     name:"홍준표",      //키 : 밸류
//     phone:01023215524   //접근할때 student.name ,, student.phone
// }
// student["name"]; >>>'홍준표'
// student.name
// student.phone

const person = {
  name: {
    //키값에 또 객체 넣기
    firstName: "Gildong",
    lastName: "Hong",
  },
  likes: ["apple", "samsung"], //밸류에 배열
  printHello: function () {
    //밸류에 함수(메소드)
    return "hello";
  },
};
console.log(person["printHello"]());
console.log(person.printHello());
console.log(person["name"]["firstName"]);
console.log(person["likes"][0]);
console.log(person.likes[1]);
console.log();
person.name.lastName = "Kim"; //밸류 변경하기
console.log(person.name.lastName);
