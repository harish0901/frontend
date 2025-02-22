import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Support</a>
              </li>
            </ul>
            <a className="navbar-brand text-light fw-bold fs-2" href="#">ReciZ</a> {/* Bold and larger text without mx-auto */}
            <div className="d-flex">
              <a className="link-light bg-success p-2" href="/login">Login</a>
              <span className="text-light mx-1">/</span>
              <a className="link-light bg-info p-2" href="/register">Register</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;