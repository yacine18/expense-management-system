import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const IncomesExpenses = () => {
  const transactionsList = useSelector(
    (state: RootState) => state.transactionsList
  );
  const { transactions }: any = transactionsList;

  const amounts: any =
    transactions?.map((transaction: any) => transaction.amount)

  const income = (
    amounts
      ?.filter((amount: any) => amount > 0)
      .reduce((acc: any, amount: any) => (acc += amount), 0) * 1
  ).toFixed(2);

  const expense = (
    amounts
      ?.filter((amount: any) => amount < 0)
      .reduce((acc: any, amount: any) => (acc += amount), 0) * -1
  ).toFixed(2);

  return (
    <div
      className="card-panel"
      style={{
        fontSize: "1.1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="green-text">
        <strong>Incomes</strong>
      </div>
      <div className="green-text">
        <span>+${income}</span>
      </div>
      <div className="divider green-text"></div>
      <div className="red-text">
        <strong>Expenses</strong>
      </div>
      <div className="red-text">
        <span>-${expense}</span>
      </div>
    </div>
  );
};

export default IncomesExpenses;
