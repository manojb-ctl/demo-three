import "./App.css";
import React from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "New Desk Paper",
      amount: 94.12,
      date: new Date(2020, 1, 14),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 923.5,
      date: new Date(2021, 5, 24),
    },
    {
      id: 3,
      title: "New TV",
      amount: 150.66,
      date: new Date(2021, 7, 9),
    },
  ];

  // Data from child to parent...
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <h2>App js File (demo two)</h2>
      {/* Using 'onAddExpense' for data child to parent */}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
