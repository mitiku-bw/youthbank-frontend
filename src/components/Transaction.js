import React from 'react'

const Transaction = ({ transaction }) => {
  const transaction_date = new Date(transaction.date)
  return (
    <tr>
      <td>{transaction_date.toLocaleDateString('fi-FI')}</td>
      <td>{transaction.transaction}</td>
      <td>{transaction.name}</td>
      <td>{transaction.amount}</td>
    </tr>  
  )
}

export default Transaction