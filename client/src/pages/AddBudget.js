import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';


interface Values {
  amount: string;
  category: string;
}

const AddBudget = () => {
  return (
    <body style={{ backgroundColor: "#846a91", width: "75%vw", minHeight: "75%vw", padding: "12px 20px",
    margin: "8px 0"}}>
    <div className="frm_flex">
      <h1>Add new Budget!!</h1>
      <Formik
        initialValues={{
          amount: '',
          category: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form >
          <Field id="amount" className="input-box" name="amount" placeholder=" Enter Amount: 9999.99" />
          <Field id="category" className="input-box" name="category" placeholder="This will be a dropdown: you pick on from array of items" />
          <button className="add-btn submit-btn" type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </body>
  );
};

export default AddBudget;