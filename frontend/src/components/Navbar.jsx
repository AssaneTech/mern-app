import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "#1c1f24",
        padding: "12px 0",
        boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
      }}
    >
      <div className="container">

        {/* Brand */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: "#fff", fontSize: "1.4rem", letterSpacing: "0.5px" }}
        >
          ProductStore
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">

            {/* Home */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: isActive("/") ? "#00c6ff" : "#ddd",
                  fontWeight: isActive("/") ? "600" : "400",
                  position: "relative",
                }}
              >
                Home
                {isActive("/") && <span className="active-underline"></span>}
              </Link>
            </li>

            {/* Create */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/create"
                style={{
                  color: isActive("/create") ? "#00c6ff" : "#ddd",
                  fontWeight: isActive("/create") ? "600" : "400",
                  position: "relative",
                }}
              >
                Create
                {isActive("/create") && <span className="active-underline"></span>}
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  color: isActive("/about") ? "#00c6ff" : "#ddd",
                  fontWeight: isActive("/about") ? "600" : "400",
                  position: "relative",
                }}
              >
                About
                {isActive("/about") && <span className="active-underline"></span>}
              </Link>
            </li>

          </ul>
        </div>

      </div>

      {/* Styles */}
      <style>
        {`
          .nav-link {
            position: relative;
            padding-bottom: 4px;
            transition: color 0.3s ease;
            font-size: 1.05rem;
          }

          .nav-link:hover {
            color: #00c6ff !important;
          }

          .active-underline {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #00c6ff;
            border-radius: 2px;
            animation: slideIn 0.25s ease forwards;
          }

          @keyframes slideIn {
            from { width: 0; opacity: 0; }
            to { width: 100%; opacity: 1; }
          }

          .navbar-toggler-icon {
            filter: invert(1);
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
