import React from 'react'

const Transaction = ({ transaction }) => {
  const transaction_date = new Date(transaction.date)
  const amount = transaction.amount > 0
        ? '+' + transaction.amount
        : transaction.amount

  return (
    <tr>
      <td>{transaction_date.toLocaleDateString('fi-FI')}</td>
      <td>{transaction.transaction}</td>
      <td>{transaction.name}</td>
      <td className="text-right">{amount}</td>
    </tr>  
  )
}

export default Transaction