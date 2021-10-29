import Navbar from "../components/Navbar";
import Balance from "../components/Balance";
import IncomesExpenses from "../components/IncomesExpenses";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { listTransactions } from "../actions/transactionActions";
import AlertMessage from "../components/AlertMessage";
import { Link } from "react-router-dom";
import TransactionList from "../components/TransactionList";

const Dashboard = () => {

const transactionsList = useSelector((state:RootState) => state.transactionsList)
const {error, transactions}:any = transactionsList

const dispatch = useDispatch()

useEffect(() => {
  dispatch(listTransactions())
}, [dispatch])

  return (
    <div>
      <Navbar />
      <div className="row container" style={{maxWidth:'100%', minWidth:'450px'}}>
        {error && <AlertMessage variant="danger">{error}</AlertMessage>}
        <>
          <Balance />
          <IncomesExpenses />
          <div className="card-panel">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong className=" black-text" style={{ fontSize: "1.1rem" }}>
                <span style={{ fontSize: "1.1rem" }}>
                  {transactions?.length > 0 ? transactions?.length : ''}
                </span>
                {"  "}Transactions
              </strong>
              <Link to="/add" className="btn">
                New Transaction
              </Link>
            </div>
            {transactions?.length ? (
              <table>
                <thead>
                  <tr>
                    <th>Label</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions?.map((transaction: any) => (
                    <TransactionList key={transaction.id} transaction={transaction} />
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="row">
                <p className="center-align">No Transactions Found.</p>
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default Dashboard;
