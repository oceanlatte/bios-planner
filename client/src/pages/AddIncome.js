import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_INCOME } from '../utils/mutations';


const AddIncomeForm = () => {
  
  const [incomeState, setIncomeState] = useState({ total: ''});

  

  const [addIncome, { error }] = useMutation(ADD_INCOME);
   
  // submit form
  const handleFormInput = (e) => {
    const { name, value } = e.target;

    console.log( 'name:', name, 'value:', value);
    const newValue = parseInt(value)
    console.log(newValue)
    setIncomeState({
      ...incomeState,
       [name]: parseInt(value),
    })
    console.log('incomeState:', incomeState)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try{
      const { data } = await addIncome({
        variables: { ...incomeState },
      });

    } catch (e) {
      console.error(e);
    }
  };

return (
  <div className='card'>

    <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <label className="title" htmlFor ='total'>Income: </label>
        <input
          placeholder="Add Income here"
          name='total'
          type='input'
          value={incomeState.total}
          className="form-input col-12 col-md-9 input-box"
          onChange={handleFormInput}
        ></input>
        <button className="btn col-12 col-md-3 add-btn submit-btn" type="submit">
          Submit
        </button>
      </form>
  </div>
);
};

 
export default AddIncomeForm;