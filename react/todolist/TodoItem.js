import { useState } from "react";

function TodoItem({ todoData, data, setTodoData, buttonStyle, dataId }) {
  //여기서만 필요한 애들은
  //여기서 별도로 useState만들어서 사용하면 됨
  //수정중인지 체크랑, 수정중인 텍스트
  let [isModifying, setIsModifying] = useState(false);
  let [inputName, setInputName] = useState("");

  const itemStyle = (finished) => {
    return {
      textDecoration: finished ? "line-through" : "none",
      borderBottom: "1px solid black",
      padding: "5px",
    };
  };

  if( isModifying ===true){
<div style={itemStyle(false)} className="todoItem">
        
        <form>
           <input type="text"></input>
           <button type="button" style={buttonStyle} onClick={()=>{
            setIsModifying(false)
           }}>취소</button>
           <button type="button" style={buttonStyle}>저장</button>
          
        </form>
        
      </div>
  }else{
    return (
        
          <div key={dataId} style={itemStyle(data.finished)} className="todoItem">
            <p>
              <input
                type="checkbox"
                defaultChecked={data.finished}
                onChange={() => {
                  //1번안
                  // data.finished =!(data.finished)
                  // finsihed = true;
                  // finsihed = false;
                  // fininsed = true;
                  // let temp =[...todoData]
                  // setTodoData(temp)
                  //2번안
                  // let temp = [...todoData]
                  // temp[i].finished =!temp.finished
                  // setTodoData(temp)
                  //3번안
                  //이 체크박스에 체크가 되어있느냐 아니냐 비교해서
                  //finished = true, false
                  //4번안 -> data.finished  temp[i].finished
                  //id를 기준으로 찾아서 지우기
                  // id를 기준으로 찾아서 finished 설정을 바꾸고. 다시 그려지도록
                  let temp = todoData.map((tempData) => {
                    if (tempData.id === data.id) {
                      //if문안에 들어오면 전체리스트 중에서 현재 선택된 id와 동일한 경우
                      tempData.finished = !tempData.finished;
                    }
                    return tempData;
                  });
                  setTodoData(temp);
                }}
              />
              {data.itemName}
              {/* {todoData[i].itemName} */}
              <button
                style={buttonStyle}
                onClick={() => {
                  let temp = [...todoData];
                  temp = temp.filter((tempData) => {
                    return tempData.id !== data.id;
                  });
                  setTodoData(temp);
                }}
              >
                삭제
              </button>
              <button style={buttonStyle} onClick={()=>{
                setIsModifying(true);
              }}>수정</button>
            </p>
          </div>
        
      );
  }
  
}

export default TodoItem;
