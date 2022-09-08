import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [locations, setLocations] = useState([
    "건물 1층",
    "옆으로 3분",
    "옆으로 4분",
    "길건너 5분",
    "길건너 5.5분"
  ])
  let [stores, setStores] = useState([
    "달식당",
    "맘스터치",
    "김밥나라",
    "동천홍",
    "싸다돼지마을",
  ]);

  // let [likeCnt, setLikeCnt] = useState(0);
  let [likeCnts, setLikeCnts] = useState([0, 0, 0, 0,0]);
  // let [stores, setStores] = useState("맘스터치");
  //[변수자리,<-를 이용하는함수자리] State 함수 화면바꿀때 좋다
  // let [stroes, setStores] = useState("김밥나라");
  let [showMenu, setShowMenu] = useState(false);
  let [menuStore, setMenuStore] = useState("");
  let [storeIndex, setStoreIndex] = useState(0);
  // let [locationIndex, setLocationIndex] = useState(0);
  let [inputText,setInputText] = useState("");

  return (
    // html과 다른점 1.class ->className으로 적음
    <div className="App">
      <div className="darkNav">
        <h4>천안역 맛집</h4>
      </div>

      <div>
        <input onChange={(e)=>{
          // console.log(e.target.value)
          setInputText(e.target.value)
        }}></input>
        
        
        <button onClick={()=>{
          // console.log(inputText)
          let temp = [...stores]; 
          temp.unshift(inputText);
          setStores(temp);
          locations.unshift('뛰어서 7분')
          likeCnts.unshift(0) //setStores 때 다시 그리기때문에 이것도 포함돼서 새롭게 그려짐
          // setLocations(locations[i]); ,likeCnts
          
        }}>저장</button>
      </div>

      {stores.map(function (data, i) {
        return (
          <div className="list">
            <h3
              onClick={() => {
                setShowMenu(!showMenu);
                setMenuStore(stores[i]);
                setStoreIndex(i);
                
                
                // setLocationIndex(i);
                // setShowMenu(true);
              }}
            >
              {stores[i]}
            </h3>
            <p>{locations[i]}</p>
            
            <p>
              <span
                onClick={() => {
                  // likeCnt+=1;
                  // setLikeCnt(likeCnt);
                  let temp = [...likeCnts];
                  temp[i] += 1;
                  setLikeCnts(temp);
                }}
              >
                좋아요♥
              </span>
              {likeCnts[i]}
            </p>
            <button onClick={()=>{
              locations.splice(i,1)
              likeCnts.splice(i,1)
              
              let temp =[...stores] //배열복사
              temp.splice(i,1)      //값 조정
              setStores(temp)       //다시 세팅
            }}>삭제</button>
            {/* splice(1,0,'대천반점')
              시작인덱스, 시작인덱스로부터 지울개수,추가할거 */}
          </div>
        );
      })}

      {/*div className="App"안에서 변수 사용하려면 중괄호 열고 써야함, 주석도 다르다 */}
      {/* <div className="list">
        <h3 onClick={()=>{
          setShowMenu(!showMenu)
          // setShowMenu(true);
        }}>{stores[0]}</h3>
        <p>건물 1층</p>
        <p>
          <span
            onClick={() => {
              likeCnt += 1;
              setLikeCnt(likeCnt);
              console.log(likeCnt);
            }}
          >
            좋아요♥
          </span>
          {likeCnt}
        </p>
      </div>
      <div className="list">
        <h3>{stores[1]}</h3>
        <p>옆으로 2분</p>
        <p>
          <span
            onClick={() => {
              likeCnt += 1;
              setLikeCnt(likeCnt);
              console.log(likeCnt);
            }}
          >
            좋아요♥
          </span>
          {likeCnt}
        </p>
      </div>
      <div className="list">
        <h3>{stores[2]}</h3>
        <p>옆으로 3분</p>
        <p>
          <span
            onClick={() => {
              likeCnt += 1;
              setLikeCnt(likeCnt);
              console.log(likeCnt);
            }}
          >
            좋아요♥
          </span>
          {likeCnt}
        </p>
      </div>
      <div className="list">
        <h3>{stores[3]}</h3>
        <p>건너편 5분</p>
        <p>
          <span
            onClick={() => {
              likeCnt += 1;
              setLikeCnt(likeCnt);
              console.log(likeCnt);
            }}
          >
            좋아요♥
          </span>
          {likeCnt}
        </p>
      </div> */}

      <button
        onClick={() => {
          // stores[0]="봉평옹심이"
          //값,주소
          //stores(주소) = stores
          //stores(주소)   stores[0]=봉평옹심이
          // setStores(stores)

          let temp = [...stores]; //배열복사 주소를 복사한게 아니라 새로 만든거
          temp[0] = "봉평옹심이";
          setStores(temp);
          // console.log(stores[0]);
          // setStores([
          //   "봉평옹심이",
          //   "맘스터치",
          //   "김밥나라",
          //   "동천홍",
          // ]);
        }}
      >
        변경하기
      </button>

      <button
        onClick={() => {
          let temp = [...stores]; //배열복사 주소를 복사한게 아니라 새로 만든거
          temp[1] = "햄버거집";

          setStores(temp);

          // setStores([
          //   "달식당",
          //   "햄버거집",
          //   "김밥나라",
          //   "동천홍",
          // ]);
        }}
      >
        변경하기2
      </button>
      <button
        onClick={() => {
          let temp = [...stores];
          temp.sort();
          setStores(temp);
        }}
      >
        변경하기3
        {/* 변경하기3을 누르면 음식점들이 사전순으로 정렬
        배열복사,배열정렬,state변수 다시 설정*/}
      </button>
      <div>
        <br></br>
        {/* <p style={{color:"green",fontSize:"24px"}}>글씨에 스타일</p>
                      객체형식으로 키:"밸류" 처럼 넣어야함
          <div style={{width:'100px',height:'100px',backgroundColor:'red'}}></div> */}
      </div>

      

      {showMenu == true ? (
        <Menu
          title={menuStore}
          stores={stores}
          storeIndex={storeIndex}
          fontColor="blue"
          locations={locations}
        ></Menu>
      ) : null}
    </div>
  );
}

//메뉴화면을 나타내는 컴포넌트(Component)= 자바에서 클래스같은것
//props = 컴포넌트간에 전달해주는 매개변수 역할
//부모가 자식한테 물려줄수만 있음
//title데이터 ->state화 ==>데이터를 사용하는 모든component들 중에 가장최상위 부모가 생성해야함
function Menu(props) {
  // 최상단에 div하나만 리턴됨
  return (
    <div className="menu">
      <h4 style={{ color: props.fontColor }}>{props.title}</h4>
      <p>{props.stores[props.storeIndex]}</p>
      <p>{props.locations[props.storeIndex]}</p>
      <p>돈까스</p>
      <p>우동</p>
    </div>
  );
}
export default App;
