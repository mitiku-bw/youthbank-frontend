import React from 'react'
import FacebookLogin from 'react-facebook-login'

const Login = () => {
    const responseFacebook = (response) => {
        console.log(response)
    }
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title text-center">Login with facebook!</h5>
                    <div className="card-body text-center">
                        <FacebookLogin
                            appId="400610200642492" //APP ID NOT CREATED YET
                            fields="name,email,picture"
                            callback={responseFacebook}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login