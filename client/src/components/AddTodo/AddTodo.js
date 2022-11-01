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
          <Field id="taskName" name="taskName" placeholder=" Add: Todo" />
          <Field id="description" name="description" placeholder="Add Description: I need todo this!" label= "Description" />
          <Field id="dueDate" name="dueDate" placeholder="Add Due Date: 11/02/2022" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </body>
  );
};

ReactDOM.render(<AddTodo />, document.getElementById('root'));

export default AddTodo;
