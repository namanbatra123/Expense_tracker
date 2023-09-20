import './App.css';
import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExp } from './Components/IncomeExp';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Balance />
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
