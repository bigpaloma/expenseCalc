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
    Number(evt.target.value) === 0 ? setAmount("") : setAmount(Number(evt.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(e, { id: crypto.randomUUID(), label: label, amount: amount });
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
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            placeholder="Name of Income"
            onChange={updateLabel}
            type="text"
            name="incomeLabel"
            id="incomeLabel"
            value={label}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></input>
        </div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              placeholder="0.00"
              onChange={updateAmount}
              type="number"
              name="incomeAmount"
              id="incomeAmount"
              value={amount}
              step=".05"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className=" text-white bg-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 ">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

{/* <div>
  <label for="incomeLabel" class="block text-sm font-medium leading-6 text-gray-900">For:</label>
  <div class="relative mt-2 rounded-md shadow-sm">
    <input
          onChange={updateLabel}
          type="text"
          name="incomeLabel"
          id="incomeLabel"
          value={label}
        ></input>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">$</span>
    </div>
  </div>
</div> */}