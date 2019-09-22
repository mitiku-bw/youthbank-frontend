import React, { useState } from 'react'
import dog from '../images/dog.jpg'

const Profile = () => {
    return(
        <div className="container big-page d-flex justify-content-center">
            <div className="card">
                <img src={dog} className="card-img-top" alt="profile dog"/>
                <div className="card-text">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Mitiku Wubetie</li>
                        <li className="list-group-item">mitikubw@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Profile