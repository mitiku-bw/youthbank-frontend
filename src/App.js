import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Payment from './components/Payment'
import Account from './components/Account'
import Footer from './components/Footer'
// import Login from './components/Login'
import transactionService from './services/transactions'

const App = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    transactionService.getAll()
      .then(data => {
        setTransactions(data)
      })
  }, [])

  return (
    <div className="App bg-light">
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <Home transactions={transactions} />} />
        <Route path="/payment" render={() => <Payment />} />
        <Route path="/account" render={() => <Account />} />
        <Footer />
      </Router>
    </div>

  )
}

export default App;