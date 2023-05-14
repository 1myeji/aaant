import React, { useState } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';

function Main() {
  const [todoListData, setTodoListData] = useState([]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
}

export default Main;
