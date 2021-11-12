import React from 'react'
import './userlogin.css'
function User_login_Comp() {
    return (
        <div className="loginmenu">
            <div className="loginmenu__top">
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-600 text-dark"><h1 className="fs-6 p-1">Messages</h1>
                    <span className="position-relative end-0 translate-middle p-1 badge border border-light rounded-circle bg-danger">
                        <span className="visually-hidden">2</span>
                        </span>
                    </p>
                </a>
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-600  text-dark"><h1 className="fs-6 p-1">Notifications</h1>
                    <span className="position-relative end-0 translate-middle p-1 badge border border-light rounded-circle bg-danger">
                        <span className="visually-hidden">2</span>
                        </span>
                    </p>
                </a>
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-600 text-dark"><h1 className="fs-6 p-1">Trips</h1>
                    <span className="position-relative end-0 translate-middle p-1 badge border border-light rounded-circle bg-danger">
                        <span className="visually-hidden">2</span>
                        </span>
                    </p>
                </a>
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-600 text-dark"><h1 className="fs-6 p-1">Wishlists</h1>
                    <span className="position-relative end-0 translate-middle p-1 badge border border-light rounded-circle bg-danger">
                        <span className="visually-hidden">2</span>
                        </span>
                    </p>
                </a>
            </div>
            <div className="loginmenu__btm">
            <hr></hr>
            <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-100 fs-6 p-1 text-dark">Manage listings
                    <span className="position-relative end-0 translate-middle p-1 badge border border-light rounded-circle bg-danger">
                        <span className="visually-hidden">2</span>
                        </span>
                    </p>
                </a>
            <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-100 fs-6 p-1 text-dark">Host an experience
                    <span className="position-relative end-0 translate-middle p-1 badge border border-light rounded-circle bg-danger">
                        <span className="visually-hidden">2</span>
                        </span>
                    </p>
                </a>
            <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-100 fs-6 p-1 text-dark">Refer a host
                    <span className="position-relative end-0 translate-middle p-1 badge border border-light rounded-circle bg-danger">
                        <span className="visually-hidden">2</span>
                        </span>
                    </p>
                </a>
            <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-100 fs-6 p-1 text-dark">Account
                    <span className="position-relative end-0 translate-middle p-1 badge border border-light rounded-circle bg-danger">
                        <span className="visually-hidden">2</span>
                        </span>
                    </p>
                </a>
            <hr></hr>
            <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-100 fs-6 p-1 text-dark">Help
                    </p>
                </a>
            <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-100 fs-6 p-1 text-dark">Logout
                    </p>
                </a>
            </div>
        </div>
    )
}

export default User_login_Comp