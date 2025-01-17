import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Redirect
} from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/Home'
import Payment from './components/Payment'
import Account from './components/Account'
import Footer from './components/Footer'
import Notification from './components/Notification'
import Login from './components/Login'
import Profile from './components/Profile'
import transactionService from './services/transactions'

const App = () => {
  const [transactions, setTransactions] = useState([])
  const [newName, setNewName] = useState('')
  const [newAccount, setNewAccount] = useState('')
  const [newAmount, setNewAmount] = useState('')
  const [newReference, setNewReference] = useState('')
  const [newDate, setNewDate] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState({
    message: null
  })


  useEffect(() => {
    transactionService.getAll()
      .then(data => {
        setTransactions(data)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])


  const handleNameChange = (event) => setNewName(event.target.value)
  const handleAccountChange = (event) => setNewAccount(event.target.value)
  const handleAmountChange = (event) => setNewAmount(event.target.value)
  const handleReferenceChange = (event) => setNewReference(event.target.value)
  const handleDateChange = (event) => setNewDate(event.target.value)
  const handleMessageChange = (event) => setNewMessage(event.target.value)

  const notify = (message, type='success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification({ message: null }), 10000)
  }

  const handlePayment = (event) => {
    event.preventDefault()

    transactionService
      .create({
        date: newDate,
        name: newName,
        account: newAccount,
        transaction: "Self service",
        amount: -newAmount,
        reference: newReference,
        message: newMessage
      })
      .then(createdTransaction => {
        setTransactions(transactions.concat(createdTransaction))
        setNewName('')
        setNewAccount('')
        setNewAmount('')
        setNewDate('')
        setNewReference('')
        setNewMessage('')
        notify(`Payment made to ${newName}`)
        console.log(createdTransaction.name)
      })
      .catch(() => {
        notify(`Error! Could not complete payment to ${newName}`, 'danger')
        console.log("Error! Could not complete payment.")
      })
  }

  return (
    <div className="App bg-light">
      <Router>
        <Navbar user={user}/>
        <Notification notification={notification} />
        <Route exact path="/" render={() =>
        user ? <Home transactions={transactions} /> 
              : <Redirect to="/login" />
        } />
        <Route path="/payment" render={() => 
        user ? <Payment 
                handleNameChange={handleNameChange}
                handleAccountChange={handleAccountChange}
                handleAmountChange={handleAmountChange}
                handleDateChange={handleDateChange}
                handleReferenceChange={handleReferenceChange}
                handleMassageChange={handleMessageChange}
                handlePayment={handlePayment}
                newName={newName}
                newAccount={newAccount}
                newAmount={newAmount}
                newDate={newDate}
                newReference={newReference}
                newMessage={newMessage}
              />   : <Redirect to="/login" />
            } />
        <Route path="/account" render={() =>
          user ? <Account /> : <Redirect to="/login" />
          } />
        <Route path="/login" render={() => <Login />} />
        <Route path="/profile" render={() =>
          user ? <Profile user={user} /> : <Redirect to="/login" />
          } />
        <Footer />
      </Router>
    </div>

  )
}

export default App;