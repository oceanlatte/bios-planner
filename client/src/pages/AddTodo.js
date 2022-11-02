import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TODOS } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";

const AddTodo = () => {
  const { data: userData } = useQuery(QUERY_USER);

  // currentUser username, set to empty object if null
  const currentUser = userData? userData.currentUser.username : {};
  console.log("Current User log:", currentUser);

  // Mutation to add the todo input to DB
  const [addTodos, { error }] = useMutation(ADD_TODOS);

  // useState variables 
  const [formState, setFormState] = useState({ 
    todoName: "", 
    recurrence: "daily", 
    dailyReset: "",
    username: currentUser 
  });
  const [dailyReset, setDailyResetVal] = useState(true);

  // update state based on form input
  const handleFormInput = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
      dailyReset: dailyReset,
    })
    console.log("form state??:", formState)
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
    // clear form values
    setFormState({
      todoName: "", 
      recurrence: "daily", 
      dailyReset: "",
      username: currentUser 
    });
  };

  return (
    <div >
      <h2>Add A New Todo ✏️</h2>
      <form onSubmit={handleFormSubmit} className="add-form">
        <label htmlFor="todoName">Todo Name: </label>
        <input
          className="form-input"
          placeholder="Add a new to-do here"
          name="todoName"
          type="input"
          id="addTodoName"
          value={formState.todoName}
          onChange={handleFormInput}
        />

        <label htmlFor="recurrence"> 
          Recurrence Type:
        </label>
        <select name="recurrence" onChange={handleFormInput} value={formState.recurrence}>
          <option value="" selected disabled hidden>Choose here</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        
        {/* !!!!!!!!! */}
        {/* ADD A CONDITIONAL: if user choses "Daily" then show this dropdown */}
        <p className="mb-1 mt-3" onChange={handleFormInput} >Reset Daily?</p>
        <div className="d-flex" >
          <input type="radio" name="dailyReset" onClick={() => setDailyResetVal(true)} />
          <label htmlFor="dailyReset" className="px-2">Yes</label>
          <input type="radio" name="dailyReset" onClick={() => setDailyResetVal(false)} />
          <label htmlFor="dailyReset" className="px-2">No</label> 
        </div>

        <button type="submit">Save Changes</button>
        {error && <div>Please check your entries.</div>}
        </form>
    </div>

  );
};

export default AddTodo;
