import React from 'react'
import Transaction from './Transaction'

const Home = ({transactions}) => {
  const rows = () => transactions.map(transaction =>
    <Transaction
      key={transaction.id}
      transaction={transaction}
    />
  )

    return(
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">Available balance</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">Available balance</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">Available balance</div>
            </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Account</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option defaultValue>FI47 1234 567 9101 11</option>
            </select>
          </div>
          <div className="card-body">
            <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Transaction</th>
                    <th scope="col">Beneficiary/Remitter</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                {rows()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
}

export default Home