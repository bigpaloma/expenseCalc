import { useState } from "react";
import Income from "./Income";
import Expense from "./Expense";
export default function Dashboard() {
  const [income, setIncome] = useState([
    { id: crypto.randomUUID(), label: "wage", amount: 2000 },
    { id: crypto.randomUUID(), label: "sneakers", amount: 800 },
  ]);
  const [expense, setExpense] = useState([
    { id: crypto.randomUUID(), label: "rent", amount: 1200 },
    { id: crypto.randomUUID(), label: "food", amount: 523.55 },
  ]);

  const addIncome = (newIncome) => {
    setIncome((currIncome) => {
      return [...currIncome, newIncome];
    });
  };

  const addExpense = (newExpense) => {
    setExpense((currExpense) => {
      return [...currExpense, newExpense];
    });
  };

  return (
    <>
      {/* <Balance income={incomeCum} expense={expenseCum} /> */}
      <Income incomeList={income} addIncome={addIncome} />
      <Expense expenseList={expense} addExpense={addExpense} />
    </>
  );
}
