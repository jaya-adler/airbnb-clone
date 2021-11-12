import React from 'react'

function User_logout_Comp() {
    return (
        <div className="loginmenu">
            <div className="loginmenu__top">
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-600 text-dark"><h1 className="fs-6 p-1">Login</h1></p>
                </a>
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fw-600 fs-6 p-1 text-dark">Sign up</p>
                </a>
                <hr></hr>
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fs-6 p-1 fw-600 text-dark">Host your home</p>
                </a>
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fs-6 p-1 fw-600 text-dark">Host an experience</p>
                </a>
                <a className="text-decoration-none " href="../../App.js">
                    <p className="d-flex align-items-center fs-6 p-1 fw-600 text-dark">Help</p>
                </a>
            </div>
        </div>
    )
}

export default User_logout_Comp
