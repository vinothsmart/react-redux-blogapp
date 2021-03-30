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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact</Link>
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
