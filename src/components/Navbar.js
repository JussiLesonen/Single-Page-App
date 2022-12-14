import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav id='nav' className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SPA Example</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/contactus'>Contact Us</Link>
                        </li>
                    </ul>
                    <form role="search">
                    </form>
                </div>
            </div>
        </nav>
    )
}
