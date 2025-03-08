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

    const handleAddList = (index) => {
        if(listInputs[index] && listInputs[index].trim() !== ''){
            const newTodos = [...todos];

            //Accesses the todo item at the specified index in the newTodos array and pushes the value of listInputs[index] into its lists array.
            //This push assumes that each todo item has a lists property, an array containing the items within that todo.
            newTodos[index].lists.push(listInputs[index]);
            setTodos = newTodos;
            //setListInput resetting "listInput" state variable, clearing the text input field for addin new list items
            setListInputs({...listInputs, [index]: value });
        }
    };


    //index of todo Item and its new input value
    //the function updates the listInput state object with the new value for the input at the specified index,
    //thus ensuring that each todo item´s list is tracked individually
    const handleListInputChange = (index, value) => {
        setListInputs({...listInputs, [index]: value});
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
        {todos.map((todo, index) => (
            <div key={index} className="todo-card">
                <div className="heading_todo">
                    <h3>{todo.heading}</h3> {/* Display the heading here */}
                    <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                </div>
                <ul>
                    {todo.lists.map((list, listIndex) => (
                        <li key={listIndex} className="todo_inside_list">
                            <p>{list}</p>
                        </li>
                    ))}
                </ul>
                <div className="add_list">
                    <input 
                       type="text"
                       className="list-input"
                       placeholder="Add List"
                       value={listInputs[index] || ''}
                       onChange={(e) => {handleListInputChange(index, e.target.value);}} />
                    <button className="add-list-button" onClick={() => handleAddList}>Add List</button>

                </div>

                
            </div>
  ))}
      </div>

    </>
  );
};

export default TodoList;
