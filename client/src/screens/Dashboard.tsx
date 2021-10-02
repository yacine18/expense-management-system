import Navbar from "../components/Navbar";
import Balance from "../components/Balance";
import IncomesExpenses from "../components/IncomesExpenses";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { getTransactions } from "../actions/transactionActions";
import AlertMessage from "../components/AlertMessage";
import TransactionList from "../components/TransactionList";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const transactionsList: any = useSelector(
    (state: RootState) => state.transactionsList
  );
  const { error, transactions }: any = transactionsList;

  console.log(transactions?.length);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="row container">
        {error && <AlertMessage variant="danger">{error}</AlertMessage>}
        <Balance />
        <IncomesExpenses />
        <div className="card-panel">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong className=" black-text" style={{ fontSize: "1.1rem" }}>
              <span style={{ fontSize: "1.1rem" }}>{transactions?.length}</span>
              {"  "}Transactions
            </strong>
            <Link to="/add" className="btn">
              New Transaction
            </Link>
          </div>
          {transactions?.length > 0 ? (
            transactions?.map((transaction: any) => (
              <>
                <TransactionList transaction={transaction} />
              </>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No Transactions Found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
