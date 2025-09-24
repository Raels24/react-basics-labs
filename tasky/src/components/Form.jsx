import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form>
        <label>
            Task title:
            <input type="text" name="title" required />
        </label>
        <br />
        <label>
            Due date:
            <input type="date" name="deadline" required />
        </label>
        <br />
        <label>
            Details:
            <input type="text" name="description" />
        </label>
         <br />
        <label>
            Priority:
            <input type="text" name="priority" required />
        </label>
        <br />
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
