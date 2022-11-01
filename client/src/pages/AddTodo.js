import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODOS } from '../utils/mutations';


const AddTodo = () => {
  // const [formState, setFormState] = useState({ todoName: '', recurrence: '', dailyReset: ''});
  // const [addSingleTodo, { error }] = useMutation(ADD_TODOS);

  // update state based on form input
  // const handleFormInput = (e) => {
  //   console.log('hello');
  // }

  return (
    <div className='card'>
      <h1>Add A New Todo ✏️</h1>
        <label for='todo-recurrent'> 
          Recurrence Type:
        </label>

        <select name='todo-menu' id='todo-recurrent'>
          <option value='daily'>Daily</option>
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </select>
        
        {/* !!!!!!!!! */}
        {/* ADD A CONDITIONAL: if user choses 'Daily' then show this dropdown */}
        <p>Reset Daily?</p>
        <input type="radio" id="reset" name="daily-reset" value="yes" />
        <label for="yes">Yes</label>
        <input type="radio" id="reset" name="daily-reset" value="no" />
        <label for="yes">No</label> 
    </div>
  );
};

export default AddTodo;
