import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../store";

const IncomesExpenses = () => {
  // const transactionsList = useSelector(
  //   (state: RootState) => state.transactionsList
  // );
  // const { transactions }: any = transactionsList;

  // const amounts:any[] =
  //   transactions && transactions.length > 0
  //     ? transactions.map((transaction: any) => transaction.amount)
  //     : null;

  // const income = (
  //   amounts.filter((item:any) => item > 0).reduce((acc:any, item:any) => (acc += item), 0) *
  //   1
  // ).toFixed(2);

  // const expense = (
  //   amounts.filter((item:any) => item < 0).reduce((acc:any, item:any) => (acc += item), 0) *
  //   1
  // ).toFixed(2);

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
        <span>$200</span>
      </div>
      <div className="divider green-text"></div>
      <div className="red-text">
        <strong>Expenses</strong>
      </div>
      <div className="red-text">
        <span>$100</span>
      </div>
    </div>
  );
};

export default IncomesExpenses;
