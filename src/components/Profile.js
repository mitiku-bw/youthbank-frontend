import React from 'react'
import dog from '../images/dog.jpg'

const Profile = ({user}) => {
    const profilePic = user ? user.picture.data.url
                            : dog
    const profileName = user ? user.name : ""
    const profileEmail = user ? user.email: ""
    return(
        <div className="container big-page d-flex justify-content-center">
            <div className="card">
                <img src={profilePic} className="card-img-top" alt="profile dog"/>
                <div className="card-text">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{profileName}</li>
                        <li className="list-group-item">{profileEmail}</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Profile