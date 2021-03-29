import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Redux Posts
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="!#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-end">
          <Link to="/addPost" className="btn btn-dark">
            Add Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
