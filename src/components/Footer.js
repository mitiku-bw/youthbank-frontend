import React from 'react'


const Footer = () => {
    return(
    <footer className="footer text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">Roholahti, Helsinki
                    <br/>Finland</p>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Around the Web</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="facebook.com">
                        <i className="fab fa-fw fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="twitter.com">
                        <i className="fab fa-fw fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="linkedin.com">
                        <i className="fab fa-fw fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">About Youthbank</h4>
                    <p className="lead mb-0">Youthbank is an online system dedicated to teenagers of age 14-18
                        <a href="http://localhost"> Youth Bank</a>.
                    </p>
              </div>
            </div>
          </div>
          <div className="container">
            <small>Copyright &copy; Youth Bank 2019</small>
          </div>
        </footer>
    )
}

export default Footer