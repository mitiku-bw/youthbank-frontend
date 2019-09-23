import React from 'react'
import { withRouter } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'

const LoginNoHistory = (props) => {

    const responseFacebook = (response) => {
        window.localStorage.setItem('loggedUser', JSON.stringify(response))
        console.log(response)
    }
    
    return(
        <div className="container big-page d-flex justify-content-center">
            <div className="card">
                <div className="card-body">
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

const Login = withRouter(LoginNoHistory)

export default Login