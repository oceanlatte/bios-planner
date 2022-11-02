// import 'react-app-polyfill/ie11';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Formik, Field, Form, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BUDGET_TOTAL } from '../utils/mutations';


const AddBudgetForm = () => {
  
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
      >
        <label htmlFor ='total'>Budget: </label>
        <input
          placeholder="Add budget here"
          name='total'
          type='input'
          value={budgetState.total}
          className="form-input col-12 col-md-9"
          onChange={handleFormInput}
        ></input>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
  </div>
);
};

 
export default AddBudgetForm;
// interface Values {
//   amount: string;
//   category: string;
// }

// const AddBudget = () => {
//   return (
//     <body style={{ backgroundColor: "#846a91", width: "75%vw", minHeight: "75%vw", padding: "12px 20px",
//     margin: "8px 0"}}>
//     <div className="frm_flex">
//       <h1>Add new Budget!!</h1>
//       <Formik
//         initialValues={{
//           amount: '',
//           category: '',
//         }}
//         onSubmit={(
//           values: Values,
//           { setSubmitting }: FormikHelpers<Values>
//         ) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 500);
//         }}
//       >
//         <Form >
//           <Field id="amount" name="amount" placeholder=" Enter Amount: 9999.99" />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//     </body>
//   );
// };

// export default AddBudget;