import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-auto" style={{ marginTop: "60px" }}>
      <div className="container">

        {/* TOP SECTION */}
        <div className="row justify-content-center mb-3">
          <div className="col-md-8 text-center">
            <h5 className="mb-3 fw-bold" style={{ letterSpacing: "1px" }}>Useful Links</h5>

            {/* Horizontal links */}
            <ul className="list-inline">
              <li className="list-inline-item mx-3">
                <a href="/" className="footer-link">Home</a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="/about" className="footer-link">About</a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="/create" className="footer-link">Create</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3">
          <small className="text-secondary">
            &copy; {new Date().getFullYear()} ProductStore — All rights reserved. 🌐
          </small>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .footer-link {
            color: #bfbfbf;
            font-size: 1.05rem;
            text-decoration: none;
            position: relative;
            padding-bottom: 4px;
            transition: color 0.3s ease;
          }

          .footer-link:hover {
            color: #00c6ff;
          }

          /* Underline animation */
          .footer-link::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0%;
            height: 2px;
            background-color: #00c6ff;
            transition: width 0.3s ease;
          }

          .footer-link:hover::after {
            width: 100%;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
