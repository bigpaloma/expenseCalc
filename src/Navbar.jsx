export default function Navbar() {
  return (
    <div className="text-light bg-gradient-to-br from-light-600 to-light-800 py-5 px-3 flex flex-row justify-between">
      <div className="grow-[1]">
        <p className="bold font-sans text-5xl">Your Tracker</p>
      </div>
      <div className="max-w-sm flex flex-row justify-between items-center grow-[2] font-sans text-3xl">
        <p>Dashboard</p>
        <p>Income</p>
        <p>Expenses</p>
      </div>
      <div className="flex items-center grow-[1] justify-end">
        <p className="font-sans text-3xl">Login</p>
      </div>
    </div>
  );
}
