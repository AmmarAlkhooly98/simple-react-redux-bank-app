import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  depositMoney,
  withdrawMoney,
  takeLoan,
  payAllLoan,
} from "./state/action-creator";
import "./App.css";

function App() {
  /* 
    Note: A Hook is a special function that lets you “hook into” React features
  */

  // useState is a Hook that lets you add React state to function components.
  // We are destructuring the array sent from the useState hook first element of the array represents the "state value" and the second element resembles the "state setter" and we get to choose the names for both
  const [loanInput, setLoanInput] = useState(""); // '' is the initial state value for loanInput

  // we can use the useSelector() Hook to make a subscription to the Redux store and get the data we need from the global redux store
  const accBalance = useSelector((state) => state.bank.balance);
  const debtDue = useSelector((state) => state.bank.debt);

  // the useDispatch hook is used to dispatch actions, we made a reference to the useDispatch hook by the constant dispatch to be used in any part of our component
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Bank</h1>
      <h1>{accBalance}</h1>
      <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
      <button
        onClick={() => dispatch(withdrawMoney(1000))}
        disabled={accBalance <= 0}
      >
        Withdraw
      </button>
      <br />
      <br />
      <h3>Take loan</h3>
      <input
        value={loanInput}
        type="number"
        onChange={(e) => {
          setLoanInput(e.target.value);
        }}
        placeholder="add loan amount here..."
      />
      <button
        disabled={!loanInput}
        onClick={() => {
          dispatch(takeLoan(loanInput));
          setLoanInput("");
        }}
      >
        Take Loan
      </button>
      <button
        disabled={debtDue === 0 || accBalance < debtDue}
        onClick={() => dispatch(payAllLoan())}
      >
        Pay All Debt
      </button>
      <h4>Your due debt: {debtDue}</h4>
    </div>
  );
}

export default App;
