import React from 'react'


const Footer = () => {
    return(
    <footer className="page-footer font-small teal pt-4">
        <div className="container text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h6 className="text-uppercase font-weight-bold">About Youthbank</h6>
                    <p className="lead mb-0">Youthbank is an online system dedicated to teenagers of age 14-18.</p>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3" />
                <div className="col-md-3 mb-md-0 mb-3">
                    <h6 className="text-uppercase font-weight-bold">Location</h6>
                    <p className="lead mb-0">Roholahti, Helsinki
                    <br/>Finland</p>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                    <h6 className="text-uppercase font-weight-bold">Around the web</h6>
                    <ul className="list-inline social-icons">
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/mitiku-wubetie/" className="fa fa-linkedin" aria-hidden="true"><span className="sr-only">LinkedIn</span></a></li>
                        <li className="list-inline-item"><a href="https://facebook.com" className="fa fa-facebook"><span className="sr-only">Facebbok</span></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com" className="fa fa-twitter"><span className="sr-only">Twitter</span></a></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            <small>Copyright &copy; Youth Bank 2019</small>
          </div>
        </footer>
    )
}

export default Footer