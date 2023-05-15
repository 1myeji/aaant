import React from 'react';
import Header from '../components/Header';
import InputTodo from '../components/InputTodo';

function Main() {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo />
      </div>
    </div>
  );
}

export default Main;
