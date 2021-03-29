import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className = "container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <h3>Code by: <a href="https://github.com/waseem602">
                        WASEEM
                      </a>
                      <br />
                      <hr />
                      <h4>
                        Special Thanks to Sir:<br />
                        <a href="https://web.facebook.com/ziakhan">Zia Khan</a><br />
                        <a href="https://web.facebook.com/aamirpinger">Aamir Pinger</a><br />
                        Muhammad Mohsin Khalid & Team<br />
                      </h4>
        </h3>
      </div>
    </GlobalProvider>
  );
}

export default App;
