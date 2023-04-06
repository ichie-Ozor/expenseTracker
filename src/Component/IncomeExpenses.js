import React, { useContext } from 'react'
import { GlobalContext } from "../Context/GlobalState";


const IncomeExpenses = () => {
const {transactions} = useContext(GlobalContext)

const income = transactions.map(transaction => transaction.amount).filter(amt => amt > 0).reduce((acc,item) => (acc+=item),0)
const expense = transactions.map(transaction => transaction.amount).filter(amt => amt < 0).reduce((acc, item) => (acc+=item),0)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -${Math.abs(expense)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses