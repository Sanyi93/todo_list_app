import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});


    //If the condition in the if statement is met, this line updates the state variable todos. 
    //It spreads the existing todos array (todos) into a new array using the spread syntax (…todos) and appends a new object to it. 
    //The new object contains a heading property set to the value of headingInput and a lists property initialized as an empty array.
    const handleAddTodo = () => {
        if(headingInput.trim() !== '') {
            setTodos([...todos, {heading: headingInput, lists: [] }]);
            
            //After adding a new todo item, this line clears the headingInput state variable,
            //resetting the text input field for the user to enter a new todo item heading.
            setHeadingInput('');
        }
    }
  
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value = {headingInput} //binding the value of the input field to the "headingInput" state variable
            onChange={(e) => {setHeadingInput(e.target.value);}} //adding change event handler to update headingInput state -> taking event "e" as an argument
                                                                //"e.target.value" retrieves the current value of the input element that triggered the event
                                                                //whereas "setHeadingInput" is called to trigered the headingInput state
            
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        //iterating over the "todo" list of objects in order to display the respective todo.headings
        {todos.map((todo, index) => {
            <div key={index} className="todo-card">
                <div className="heading_todo">
                    <h3>{todo.heading}</h3> //displaying the heading of a "todo" object
                    <button className="delet-button-heading" onClick={handleDeleteTodo(index)}>Delete Heading</button>
                </div>
            </div>
        })}
        
        
      </div>
    </>
  );
};

export default TodoList;
