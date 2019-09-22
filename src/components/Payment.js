import React from 'react'

const Payment = (props) => {
    return(
        <div className="container py-5">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Payment Information</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={props.handlePayment}>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input onChange={props.handleNameChange} value={props.newName} type="text" className="form-control" id="name" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="account" className="col-sm-2 col-form-label">Account</label>
                            <div className="col-sm-10">
                                <input onChange={props.handleAccountChange} value={props.newAccount} type="text" className="form-control" id="account" placeholder="Eg. FI50 0123 4567 89" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="refernce" className="col-sm-2 col-form-label">Reference</label>
                            <div className="col-sm-10">
                                <input onChange={props.handleReferenceChange} value={props.newReference} type="number" className="form-control" id="reference" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="amount" className="col-sm-2 col-form-label">Amount</label>
                            <div className="col-sm-10">
                                <input onChange={props.handleAmountChange} value={props.newAmount} type="number" className="form-control" id="amount" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-10">
                                <input onChange={props.handleDateChange} value={props.newDate} type="date" className="form-control" id="date" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
                            <div className="col-sm-10">
                                <textarea rows="3" onChange={props.handleMessageChange} type="text" className="form-control" id="message" placeholder="Your message here."></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Pay</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment