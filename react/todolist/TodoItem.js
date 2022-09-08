import { useState } from "react";

function TodoItem({ todoData, data, setTodoData, buttonStyle, dataId }) {
  //여기서만 필요한 애들은
  //여기서 별도로 useState 만들어서 사용하면 됨.
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

  const handleSubmit = (e) => {
    e.preventDefault();
    //1.저장하려는 텍스트를 불러와야한다.
    console.log(inputName);
    //2.텍스트를 저장하려는 todoData대상에 itemName에 저장한다.
    //찾는 기준은 유니크한 id를 기준으로 todoData에서 찾아서 바꾸면 됨
    let temp = todoData.map((tempData) => {
      if (tempData.id === dataId) {
        tempData.itemName = inputName;
      }
      return tempData;
    });
    setTodoData(temp);
    // data.itemName=inputName 이것도 됨
    //3.저장 다했으면 ,수정화면x 목록보이는 화면전환1
    setIsModifying(false);
    setInputName("");
  };

  if (isModifying === true) {
    return (
      <div style={itemStyle(false)} className="todoItem">
        <form>
          {/* <form onSubmit={(e)=>{
            console.log('이 폼의 서브밋은 나다')
            e.preventDefault();
        }}>           submit효과의 주체는 폼이다 onSubmit()걸 수 있는건 form태그에만
          <input type="text" value={inputName} onChange={(e)=>{
            setInputName(e.target.value)
          }} autoFocus></input>
          <button>submit확인</button> */}
          <button
            type="button"
            style={buttonStyle}
            onClick={() => {
              setIsModifying(false);
            }}
          >
            취소
          </button>
          <button style={buttonStyle} onClick={(e) => {
            handleSubmit(e)
          }}>
            저장
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div key={dataId} style={itemStyle(data.finished)} className="todoItem">
        <p>
          <input
            type="checkbox"
            defaultChecked={data.finished}
            onChange={() => {
              let temp = todoData.map((tempData) => {
                if (tempData.id === data.id) {
                  //if문안에 들어오면 전체 리스트 중에서 현재 선택된 id와 동일한 경우
                  tempData.finished = !tempData.finished;
                }
                return tempData;
              });
              setTodoData(temp);
            }}
          />
          {data.itemName}
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
          <button
            style={buttonStyle}
            onClick={() => {
              setIsModifying(true);
              setInputName(data.itemName);
            }}
          >
            수정
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
