import "./Expenses.css";
import Card from "./Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseCharts from "./NewExpense/ExpensesChart";

const Expenses = (props) => {
  console.log(props.items);
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <div>
    <Card mainClass='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseCharts expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    </div>
  );
};

export default Expenses;
