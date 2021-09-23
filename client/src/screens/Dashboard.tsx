import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="row container">
        <div className="row card-panel" style={{ display: "flex" }}>
          <strong style={{fontSize:'1.1rem'}}>
            Balance : {" "}
           <span style={{fontSize:'1.1rem'}}>$100.00</span>
          </strong>        
          <div className="black-text" style={{display:'flex', marginLeft:'auto'}}>
            <Link to="/profile" style={{marginRight:'1rem',fontSize:'1.1rem'}}>
              <strong>Yassine</strong>
            </Link>
            <Link to="/" style={{fontSize:'1.1rem'}}>
              <strong>Logout</strong>
            </Link>
          </div>
          <div className="black-text"></div>
        </div>
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
            <span>$200.00</span>
          </div>
          <div className="divider green-text"></div>
          <div className="red-text">
            <strong>Expenses</strong>
          </div>
          <div className="red-text">
            <span>$100.00</span>
          </div>
        </div>

        <div className="card-panel">
          <div>
            <strong className=" black-text" style={{ fontSize: "1.1rem" }}>
              <span style={{ fontSize: "1.1rem" }}>
                10
              </span>
              {"  "}Transactions
            </strong>
          </div>
          <div className="row">
            <table>
              <thead>
                <tr>
                  <th>ID #</th>
                  <th>Label</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
