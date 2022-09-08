import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let [num, setNum] = useState(0);
  // let [arrColor, setArr] = useState([
  //   "red",
  //   "orange",
  //   "yellow",
  //   "green",
  //   "blue",
  //   "navy",
  //   "purple",
  // ]);
  // ---------------------------------------------
  // let [plusBox, setPlusBox] = useState([]);
  // ---------------------------------------------2022.09.08퀴즈
  let [inputText, setInputText] = useState([""]);
  let [text, setText] = useState([""]); //[""] 이렇게 돼있으면 처음에 공백값하나 생긴후 그 다음 인덱스부터 생성됨 뭔가 입력하면 0인덱스는 공백 1인덱스는 인풋값
  return (
    <div>
      {/* <button
        onClick={() => {
          num += 2;
          setNum(num);
        }}
      >
        짝수출력
      </button>
      <span style={{ color: "red" }}>{num}</span> */}

      {/* 번외 퀴즈 */}
      {/* {arrColor.map(function (data, i) {
        return (
          // <div className="list">
          // <div>
            // {setArr[i]}
            <Boxes color={data}></Boxes>
          // </div>
        );
      })}  */}
      {/* ------------------------------------------- */}
      {/* <button
        onClick={() => {
          let temp = [...plusBox];
          temp.push(<Boxes></Boxes>);
          setPlusBox(temp);
        }}
      >
        클릭
      </button>
      {plusBox.map(function (data, i) {
        return <Boxes></Boxes>;
      })} */}
      
      {/* 2022.09.08퀴즈 */}
      <form> {/* form태그 안에서는 인풋에 값 입력하고 엔터치면 자동으로 버튼 눌림*/}
        글자:
        <input
          value={inputText}
          placeholder="글자를 입력하세요"
          id="inputId"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          
        />
        <button id="input"
          onClick={(e) => {
            e.preventDefault()
            let temp = [...text];
            temp.push(inputText);
            setText(temp);

            //1.DOM을 통해 접근해서 지운다
            // document.querySelector("span>input").value="";
            //2.데이터 바인딩 특정요소=특정변수값 매핑
            setInputText('');
          }}
        >
          저장
        </button>
      </form> 
      <div style={{ backgroundColor: "lightgray" }}>
        {text.map((data, i) => {
          return (
            <div>
              <h3>{data}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// function Boxes(props) {
//   return <div className="box" style={{ display:"inline-block"}}>박스
//   </div>;
// }

export default App;
