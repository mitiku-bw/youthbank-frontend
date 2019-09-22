import React from 'react'
import { withRouter } from 'react-router-dom'

const LoginNoHistory = (props) => {
    const onSubmit = (event) => {
      event.preventDefault()
      props.onLogin('avaintec')
      props.history.push('/')
    }
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title text-center">Login</h5>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group row">
                                <label htmlFor="username" className="col-sm-2 col-form-label">User name</label>
                                <div className="col-sm-10">
                                    <input type="username" className="form-control" id="username" placeholder="Username" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Login = withRouter(LoginNoHistory)

export default Login