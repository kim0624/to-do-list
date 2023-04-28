import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import CustomBtn from './components/CustomBtn';
 
function App() {
  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      title: '제목',
      contents: '내용',
    },
    {
      id: Date.now() + 1,
      title: 'test',
      contents: 'contents',
    },
  ]);
 
  const [doneTodo, setDoneTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const addTodoHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
    };
    if (title === '' && contents === '') alert('내용을 입력해주세요');
    else setTodo([...todo, newTodo]);
  };
 
  // 할일삭제기능
  const deleteTodoHandler = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
 
  // 완료삭제기능
  const deleteDoneTodoHandler = (id) => {
    setDoneTodo(doneTodo.filter((dt) => dt.id !== id));
  };
 
  // 할일완료기능
  const doneTodoHandler = (dt) => {
    const newDoneTodo = {
      id: dt.id,
      title: dt.title,
      contents: dt.contents,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((t) => t.id !== dt.id));
  };
 
  // 완료취소기능
  const doneCancelHandler = (t) => {
    const newTodo = {
      id: t.id,
      title: t.title,
      contents: t.contents,
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter((dt) => t.id !== dt.id));
  };
 
  return (
    <div className='Wrap'>
      <h1>My Todo List</h1>
      <div className='InputArea'>
        제목
        <input
          className='Input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
              내용
        <input
          className='Input'
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        ></input>
        <CustomBtn buttonColor='white' onClick={addTodoHandler}>
          추가하기
        </CustomBtn>
      </div>
      <div className='Outer'>
        <h2 className='title'>Todo</h2>
        <div className='Scroll'>
          {todo.map((todo) => {
            return (
              <Todo
                todo={todo}
                title={todo.title}
                key={todo.id}
                contents={todo.contents}
                firstHandler={deleteTodoHandler}
                secondHandler={doneTodoHandler}
                firstButton='삭제하기'
                secondButton='완료하기'
                color='orange'
              />
            );
          })}
        </div>
        <h2 className='title'>Done</h2>
        <div className='Scroll'>
          {doneTodo.map((doneTodo) => {
            return (
              <Todo
                todo={doneTodo}
                title={doneTodo.title}
                key={doneTodo.id}
                contents={doneTodo.contents}
                firstHandler={deleteDoneTodoHandler}
                secondHandler={doneCancelHandler}
                firstButton='삭제하기'
                secondButton='취소하기'
                color='#5DA37F'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
 
export default App;