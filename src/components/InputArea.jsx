import React from "react";

function InputArea(props) {
  //const [inputText, setInputText] = useState("")


  return (
    <div className="form">
      <input onChange={props.change} type="text" value={props.value} />
      <button onClick={() =>{
        props.addingItem()
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
