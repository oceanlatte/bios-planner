import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';


interface Values {
  taskName: string;
  description: string;
  dueDate: string;
}

const AddTodo = () => {
  return (
    <body style={{ backgroundColor: "#846a91", width: "75%vw", minHeight: "75%vw", padding: "12px 20px",
    margin: "8px 0"}}>
    <div className="frm_flex">
      <h1>Add new Todo!!</h1>
      <Formik
        initialValues={{
          taskName: '',
          description: '',
          dueDate: '',
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
          <Field id="taskName" class="inputBox" name="taskName" placeholder=" Add: Todo" />
          <Field id="description" class="inputBox" name="description" placeholder="Add Description: I need todo this!" label= "Description" />
          <Field id="dueDate" class="inputBox" name="dueDate" placeholder="Add Due Date: 11/02/2022" />
          <button class="add-btn submit-btn" type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </body>
  );
};

export default AddTodo;
