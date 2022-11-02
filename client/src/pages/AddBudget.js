import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { ADD_BUDGET_TOTAL } from '../utils/mutations';


const AddBudgetForm = () => {
  const { data: userData } = useQuery(QUERY_USER);

   // currentUser username, set to empty object if null
   const currentUser = userData? userData.currentUser.username : {};
   console.log('Current User loggg:', currentUser);

  const [budgetState, setBudgetState] = useState({ total: ''});


  const [addBudget, { error }] = useMutation(ADD_BUDGET_TOTAL);
   
  // submit form
  const handleFormInput = (e) => {
    const { name, value } = e.target;

    console.log( 'name:', name, 'value:', value);
    const newValue = parseInt(value)
    console.log(newValue)
    setBudgetState({
      ...budgetState,
       [name]: parseInt(value),
    })
    console.log('budgetstate:', budgetState)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try{
      const { data } = await addBudget({
        variables: { ...budgetState },
      });

    } catch (e) {
      console.error(e);
    }
  };

return (
  <div>

    <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      > </form>
        {/* <Form >
          <Field id="amount" className="input-box" name="amount" placeholder=" Enter Amount: 9999.99" />
          <Field id="category" className="input-box" name="category" placeholder="This will be a dropdown: you pick on from array of items" />
          <button className="add-btn submit-btn" type="submit">Submit</button>
        </Form>
      </Formik> */}
    </div>
    
  );
};

 
export default AddBudgetForm;
