import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.Amount < 0 ? "-" : "+";

  return (
    <li className={transaction.Amount < 0 ? "minus" : "plus"}>
      {transaction.Text}{" "}
      <span>
        {sign}${Math.abs(transaction.Amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
