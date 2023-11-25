export default function Navbar() {
  return (
    <div className="bg-gradient-to-br from-light-600 to-light-800 py-5 px-3 flex flex-row justify-between">
      <div className="grow-[1]">
        <p className="bold text-primary font-sans text-5xl">Your Tracker</p>
      </div>
      <div className="max-w-sm flex flex-row justify-between items-center grow-[2]">
        <p className="text-primary font-sans text-3xl">Dashboard</p>
        <p className="text-primary font-sans text-3xl">Income</p>
        <p className="text-primary font-sans text-3xl">Expenses</p>
      </div>
      <div className="flex items-center grow-[1] justify-end">
        <p className="text-primary font-sans text-3xl">Login</p>
      </div>
    </div>
  );
}
