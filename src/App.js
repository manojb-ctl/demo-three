import "./App.css";
import React, { useState } from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Desk Paper",
    amount: 94.12,
    date: new Date(2020, 1, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 923.5,
    date: new Date(2021, 5, 24),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 150.66,
    date: new Date(2021, 7, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Data from child to parent...
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
    // setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <h2>App js File (demo three)</h2>
      {/* Using 'onAddExpense' for data child to parent */}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
