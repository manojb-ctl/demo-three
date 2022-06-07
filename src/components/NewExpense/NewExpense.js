import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // Data from child to parent...
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log("From NewExpense File: ", expenseData);
    // for passing data child to parent...
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* Using 'onSaveExpenseData' for data child to parent */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

// Flow Parent to Child:-
// App.js -> NewExpense.js -> ExpenseForm.js
