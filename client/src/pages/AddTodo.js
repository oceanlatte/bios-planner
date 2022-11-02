import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODOS } from '../utils/mutations';
import { Navigate, useParams } from 'react-router-dom';

const AddTodo = username => {
  const { username: userParam } = useParams();
  console.log('PROPS IN ADDTODO:', username)

  const [formState, setFormState] = useState({ 
    todoName: '', 
    recurrence: '', 
    dailyReset: '',
    username: username 
  });

  const [dailyReset, setDailyResetVal] = useState(true);

  const [addTodos, { error }] = useMutation(ADD_TODOS);

  // update state based on form input
  const handleFormInput = (e) => {
    const { name, value } = e.target;

    console.log('name:', name, 'value:', value);
    
    setFormState({
      ...formState,
      [name]: value,
      dailyReset: dailyReset,
    })
    console.log('form state??:', formState)
  }

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTodos({
        variables: { ...formState },
      });
      
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div >
      <h2>Add A New Todo ✏️</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='todoName'>Todo Name: </label>
        <input
          className="form-input"
          placeholder="Add a new to-do here"
          name="todoName"
          type="input"
          id="addTodoName"
          value={formState.todoName}
          onChange={handleFormInput}
        />

        <label htmlFor='recurrence'> 
          Recurrence Type:
        </label>
        <select name='recurrence' onChange={handleFormInput} value={formState.recurrence}>
          <option value="" defaultValue disabled hidden>Choose here</option>
          <option value='daily'>Daily</option>
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </select>
        
        {/* !!!!!!!!! */}
        {/* ADD A CONDITIONAL: if user choses 'Daily' then show this dropdown */}
        <p className='mb-1 mt-3' onChange={handleFormInput} >Reset Daily?</p>
        <div className='d-flex' >
          <input type="radio" name="dailyReset" onClick={() => setDailyResetVal(true)} />
          <label htmlFor="dailyReset" className='px-2'>Yes</label>
          <input type="radio" name="dailyReset" onClick={() => setDailyResetVal(false)} />
          <label htmlFor="dailyReset" className='px-2'>No</label> 
        </div>

        <button type='submit'>Save Changes</button>
        </form>
    </div>

  );
};

export default AddTodo;
