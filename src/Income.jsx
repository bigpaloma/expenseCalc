import { useState } from "react";
export default function Income({ incomeList, addIncome }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const incomeSum = incomeList.reduce((accumulator, income) => {
    return accumulator + income.amount;
  }, 0);

  const updateLabel = (evt) => {
    setLabel(evt.target.value);
  };

  const updateAmount = (evt) => {
    setAmount(parseFloat(evt.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ id: crypto.randomUUID(), label: label, amount: amount });
    setAmount("");
    setLabel("");
  };

  return (
    <div className="m-6">
      <h2>Total Income: ${incomeSum}</h2>
      <ul>
        {incomeList.map((income) => (
          <li key={income.id}>
            <p>
              {income.label}: ${income.amount}
            </p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="incomeLabel">For:</label>
        <input
          onChange={updateLabel}
          type="text"
          name="incomeLabel"
          id="incomeLabel"
          value={label}
        ></input>
        <label htmlFor="incomeAmount">Amount:</label>
        <input
          onChange={updateAmount}
          type="number"
          name="incomeAmount"
          id="incomeAmount"
          value={amount}
        ></input>
        <button className="text-white bg-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Add
        </button>
      </form>
    </div>
  );
}
