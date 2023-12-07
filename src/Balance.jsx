export default function Balance({ incomeSum, expenseSum }) {
    return (
        <div className="w-screen my-10">
            <h2 className="text-center">Your Balance is: ${incomeSum - expenseSum}</h2>
        </div>
    )
}