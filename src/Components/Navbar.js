import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-info fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-semibold" to="/">DailyNews</Link>
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="active nav-link " aria-current="page" to="/">Home</Link>
                        <Link className="active nav-link " aria-current="page" to="/world">World</Link>
                        <Link className="active nav-link" to="/business">Business</Link>
                        <Link className="active nav-link" to="/entertainment">Entertainment</Link>
                        <Link className="active nav-link" to="/health">Health</Link>
                        <Link className="active nav-link" to="/sports">Sports</Link>
                        <Link className="active nav-link" to="/technology">Technology</Link>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar
