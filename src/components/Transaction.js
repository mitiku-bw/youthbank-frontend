import React from 'react'

const Transaction = ({ transaction }) => {
  const transaction_date = transaction.date
  return (
    <tr>
      <td>{transaction_date}</td>
      <td>{transaction.transaction}</td>
      <td>{transaction.beneficiary_remitter}</td>
      <td>{transaction.amount}</td>
    </tr>  
  )
}

export default Transaction