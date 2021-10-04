import React from "react";

const TransactionList = ({ transaction }: any) => {
  return (
    <tr>
      <td>{transaction.id}</td>
      <td>{transaction.label}</td>
      <td className={transaction.amount > 0 ? "success" : "danger"}>
        ${transaction.amount}
      </td>
      <td>{transaction.createdAt.substring(0, 10)}</td>
    </tr>
  );
};

export default TransactionList;
