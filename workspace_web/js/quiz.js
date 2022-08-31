let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

console.log(strUrl1.replace("https://", "https://secure."));

// let sptlitUrl1 = strUrl1.split("://")
// let sptlitUrl2 = strUrl2.split()
// let sptlitUrl3

const strUrl ={
  "https://":"https://secure." ,
  "http://":"https://open.",
  "http.":"경로가 잘못되었습니다."
}
function changeLink(input) {
  
  return input;
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));
