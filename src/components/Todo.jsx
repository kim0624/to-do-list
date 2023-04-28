import React from 'react';
import '../App.js';
import CustomBtn from './CustomBtn.jsx';
 
function Todo(props) {
  const { title, contents, todo, firstButton, secondButton, color } = props;
  //두번째 버튼이 취소하기면 버튼 색상 변경하기
  if (secondButton === '취소하기')
    return (
      <div style={{ borderColor: color }} className='Box'>
        <p>{title}</p>
        <p>{contents}</p>
        <p>
          <CustomBtn
            buttonColor='teal'
            onClick={() => props.firstHandler(todo.id)}
          >
            {firstButton}
          </CustomBtn>
          <CustomBtn
            buttonColor='teal'
            onClick={() => props.secondHandler(todo)}
          >
            {secondButton}
          </CustomBtn>
        </p>
      </div>
    );
  return (
    <div style={{ borderColor: color }} className='Box'>
      <p>{title}</p>
      <p>{contents}</p>
      <p>
        <CustomBtn
          buttonColor='orange'
          onClick={() => props.firstHandler(todo.id)}
        >
          {firstButton}
        </CustomBtn>
        <CustomBtn
          buttonColor='orange'
          onClick={() => props.secondHandler(todo)}
        >
          {secondButton}
        </CustomBtn>
      </p>
    </div>
  );
}
 
export default Todo;