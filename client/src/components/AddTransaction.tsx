import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../actions/transactionActions";
import { RootState } from "../store";
import AlertMessage from "./AlertMessage";
import Navbar from "./Navbar";

const AddTransaction = (props: any) => {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const createTransaction = useSelector(
    (state: RootState) => state.createTransaction
  );

  const { error, transaction }: any = createTransaction;

  const dispatch = useDispatch();

  console.log(transaction);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!amount || !label) {
      alert("Fields Required");
      props.history.push("/add");
    } else {
      dispatch(addTransaction(label, amount));
      props.history.push("/dashboard");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container center-align" style={{ marginRight: "7rem" }}>
        <div className="row">
          <div className="col m8" style={{ marginLeft: "5rem" }}>
            <div className="card">
              <div className="card-content white-text">
                <span className="card-title row" style={{ color: "#757575" }}>
                  New Transaction
                </span>
                <div
                  className="row"
                  style={{ marginLeft: "0.5rem", width: "97%" }}
                >
                  {error && (
                    <AlertMessage variant="danger">{error}</AlertMessage>
                  )}
                </div>
                <div className="row">
                  <form className="col s12" onSubmit={submitHandler}>
                    <div className="">
                      <div className="input-field col s12">
                        <input
                          id="label"
                          type="text"
                          className="validate"
                          value={label}
                          onChange={(e) => setLabel(e.target.value)}
                        />
                        <label htmlFor="label">Label</label>
                      </div>
                    </div>
                    <div className="">
                      <div className="input-field col s12">
                        <input
                          id="amount"
                          type="text"
                          className="validate"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                        <label htmlFor="amount">Amount</label>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="waves-effect waves-light btn btn-block"
                        style={{ width: "95%" }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTransaction;
