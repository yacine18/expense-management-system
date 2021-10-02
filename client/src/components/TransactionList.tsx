import React from "react";

const TransactionList = (props:any) => {
  const {transaction} = props
  console.log(props)
  return (
    <>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>ID #</th>
              <th>Label</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{transaction.id}</td>
              <td>{transaction.label}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.createdAt.tostring()}</td>
            </tr>
            {/* <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
              <td>29/09/2021</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
              <td>29/09/2021</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionList;
