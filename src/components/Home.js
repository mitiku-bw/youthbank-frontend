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
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Available Balance
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      650€
                    </div>
                  </div>
                  <div className="col-auto"><i className="fa fa-euro text-gray-primary"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Pending limit (monthly)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      450€
                    </div>
                  </div>
                  <div className="col-auto"><i className="fa fa-tachometer text-gray-primary"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending payments
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      0
                    </div>
                  </div>
                  <div className="col-auto"><i className="fa fa-money text-gray-primary"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Account</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option defaultValue>Disposal Account: FI47 1234 567 9101 11</option>
            </select>
          </div>
          <div className="card-body">
            <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Transaction</th>
                    <th scope="col">Beneficiary/Remitter</th>
                    <th scope="col">Amount (€)</th>
                  </tr>
                </thead>
                <tbody>
                {rows()}
                </tbody>              
              </table>
            </div>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-primary disabled">Previous</button>
            <button type="button" className="btn btn-primary disabled">Next</button>
          </div>
        </div>
    )
}

export default Home