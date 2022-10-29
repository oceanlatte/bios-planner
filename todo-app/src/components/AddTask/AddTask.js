import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';


interface Values {
  taskName: string;
  description: string;
  dueDate: string;
}

const AddTask = () => {
  return (
    <body style={{ backgroundColor: "#846a91", width: "75%vw", minHeight: "75%vw", padding: "12px 20px",
    margin: "8px 0"}}>
    <div class="frm_flex">
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
          <label htmlFor="taskName">Task Name</label>
          <Field id="taskName" name="taskName" placeholder="Todo" />

          <label htmlFor="decription">Desciption</label>
          <Field id="description" name="description" placeholder="I need todo this!" />

          <label htmlFor="dueDate">dueDate</label>
          <Field id="dueDate" name="dueDate" placeholder="11/02/2022" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </body>
  );
};

ReactDOM.render(<AddTask />, document.getElementById('root'));

export default AddTask;