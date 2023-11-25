import { useState } from "react";

export default function Expense({ expenseList, addExpense }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const expenseSum = expenseList.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
  }, 0);

  const updateLabel = (evt) => {
    setLabel(evt.target.value);
  };

  const updateAmount = (evt) => {
    setAmount(parseFloat(evt.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ id: crypto.randomUUID(), label: label, amount: amount });
    setAmount("");
    setLabel("");
  };

  return (
    <div className="m-6">
      <h2>Total Expense: ${expenseSum}</h2>
      <ul>
        {expenseList.map((expense) => (
          <li key={expense.id}>
            <p>
              {expense.label}: ${expense.amount}
            </p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="expenseLabel">For:</label>
        <input
          onChange={updateLabel}
          type="text"
          name="expenseLabel"
          id="expenseLabel"
          value={label}
        ></input>
        <label htmlFor="expenseAmount">Amount:</label>
        <input
          onChange={updateAmount}
          type="number"
          name="expenseAmount"
          id="expenseAmount"
          value={amount}
        ></input>
        <button className="text-white bg-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Add
        </button>
      </form>
    </div>
  );
}
