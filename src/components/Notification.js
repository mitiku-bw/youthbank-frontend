import React from 'react'

const Notification = ({ notification }) => {
    if (notification.message === null) {
      return null
    }
  
    return (
        <div className={'alert alert-' + notification.type} role="alert">
            <div className="container card">
                <div className="card-body">
                    <p className="card-text">{notification.message}</p>
                </div>
            </div>
        </div>
    )
  }
  

export default Notification