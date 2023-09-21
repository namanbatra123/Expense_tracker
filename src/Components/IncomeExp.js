import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const IncomeExp = () => {
    const { transactions } = React.useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Savings</h4>
                <p className="money plus">₹{income}</p>
            </div>
            
            <div>
                <h4>Expense</h4>
                <p className="money minus">₹{expense}</p>
            </div>
        </div>
    )
}
