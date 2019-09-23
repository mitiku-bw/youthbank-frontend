import React from 'react'
import { withRouter } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'

const LoginNoHistory = (props) => {
    const responseFacebook = (response) => {
        console.log(response)
    }
    const onSubmit = (event) => {
      event.preventDefault()
      props.onLogin(responseFacebook)
      props.history.push('/')
    }
    return(
        <div className="container big-page d-flex justify-content-center">
            <div className="card">
                <div className="card-body">
                <form onSubmit={onSubmit}>

                    <h5 className="card-title text-center">Login with facebook!</h5>
                    <div className="card-body text-center">
                        <FacebookLogin
                            appId="400610200642492" //APP ID NOT CREATED YET
                            fields="name,email,picture"
                            callback={responseFacebook}                        />
                    </div>
                    </form>
                    <h5 className="card-title text-center">Or login with username "Avaintec"</h5>
                </div>
                
            </div>
        </div>
    )
}

const Login = withRouter(LoginNoHistory)

export default Login