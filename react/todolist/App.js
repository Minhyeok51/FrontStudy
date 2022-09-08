import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const buttonStyle = {
    color: "white",
    border: "none",
    padding: "5px",
    cursor: "pointer",
    float: "right",
    backgroundColor: "lightGray",
    marginLeft:"3px"
  };

  

  let [todoData, setTodoData] = useState([
    { id: "1", itemName: "점심먹기", finished: false },
    { id: "2", itemName: "커피마시기", finished: false },
    { id: "3", itemName: "낮잠자기", finished: false },
  ]);

  let [inputValue,setInputValue] = useState("")

  return (
    <div className="container">
      <div className="todoHeader">
        <div>
          <h1>Todo List</h1>
          <button style={buttonStyle} onClick={()=>{

            setTodoData([]);
            // let temp = [...todoData]
            // temp=temp.filter((todoData)=>{
            //   return 
            // })
            // setTodoData(temp)
          }}>전체삭제</button>
        </div>
      </div>
      <div className="todoSection">
        <form>
          <input value={inputValue} type="text" name="value" placeholder="해야할 일" onChange={(e)=>{
            setInputValue(e.target.value)
            // setTodoData({inputValue})
          }}/>
          <button onClick={(e)=>{
            e.preventDefault() //form양식에서 버튼이 눌리면(submit) ->submit일어나면 페이지 갱신됨.
            
            //여기서 먼저 값이 있는지 체크
            //안되는 경우면 수행이 안되도록 미리 필터링.
            if(inputValue.trim() ===""){
              return;
            }
            let addItem ={
              id:todoData.length+1,
              itemName:inputValue,
              finished:false
            }
            
            let temp = [...todoData];
            temp.push(addItem)
            setTodoData(temp)
            setInputValue('');

          }}>저장</button>
        </form>
        <br></br>

        

        {todoData.map((data, i) => {
          return (
           <TodoItem key={data.id} dataId={data.id} todoData={todoData} data={data} setTodoData={setTodoData} buttonStyle={buttonStyle}
           ></TodoItem>
          );
        })}
      </div>
    </div>
  );
}


export default App;
