import React from 'react'

const Account = () => {
    return(
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Account Information</h5>
                    <p className="card-text">Name: <span className="text-uppercase">Mitiku Wubetie</span></p>
                    <p className="card-text">Accout type: <span className="text-uppercase">Disposal Basic</span></p>
                    <p className="card-text">Monthly spending limit: <span className="text-bold">455 €</span></p>
                    <p className="card-text">Date of issue: <span className="text-bold">Feb 9, 2019.</span></p>
                </div>
                <div className="card-footer text-muted">
                    <p>This account is give to young customers of age 14-18.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Account