import { useState } from "react";
import Income from "./Income";
import Expense from "./Expense";
import Balance from "./Balance";
export default function Dashboard() {
  const [income, setIncome] = useState([
    { id: crypto.randomUUID(), label: "wage", amount: 2000 },
    { id: crypto.randomUUID(), label: "sneakers", amount: 800 },
  ]);
  const [expense, setExpense] = useState([
    { id: crypto.randomUUID(), label: "rent", amount: 1200 },
    { id: crypto.randomUUID(), label: "food", amount: 523.55 },
  ]);

  const addEntry = (e, newEntry) => {
    let setFunc = e.target[0].name === "expenseLabel" ? setExpense : setIncome;
    setFunc((currEntry) => {
      return [...currEntry, newEntry];
    });
  }

  const incomeSum = income.reduce((accumulator, income) => {
    return accumulator + income.amount;
  }, 0);

  const expenseSum = expense.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
  }, 0);

  return (
    <>
      <Balance incomeSum={incomeSum} expenseSum={expenseSum} />
      <div className="mx-5 flex justify-evenly">
        <Income incomeList={income} addIncome={addEntry} incomeSum={incomeSum} />
        <Expense expenseList={expense} addExpense={addEntry} expenseSum={expenseSum} />
      </div>
    </>
  );
}
