// let strText = " test! naver.com";
// console.log(strText.trim());    //앞뒤 공백제거

// let strSpace = "string";
// console.log(strSpace);
// console.log(strSpace.trim());
// console.log(strSpace.length);
// console.log(strSpace.trim().length);

// if(strText.includes("@") === false){
//     console.log("이메일 형식이 아닙니다.")
// }
// console.log(strSpace.toUpperCase());
// console.log(strSpace.toLowerCase());
// //대소문자 구분이 있으면 상관 x

// let strHello ='hi world';
// console.log(strHello.replace("hi","hello").toUpperCase())

let strUrl = "http://www.naver.com";
let splitUrl=strUrl.split("//");    //변수에 따로 담아줘야함 .배열형태로 반환
// console.log(splitUrl[1]);

if (splitUrl[0].indexOf("http") === -1) {
  //-1이면 "//"가 없다는것  인덱스 숫자로 세어서 비교해서 인덱스 번호로 넘겨줌
} else if (splitUrl[0].indexOf("https") === -1) {
  console.log("http로 접속했습니다.");
  //http로 접속 > http다
  //https로 접속 > https다
} else {
    console.log("https로 접속했습니다.");
}

if (strUrl.includes("com") === true) {  //true false로 반환해줌
  console.log(`${strUrl.replace("com", "net")}`);
}
