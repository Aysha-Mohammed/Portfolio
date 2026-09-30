import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        AYSHA
      </Link>

      <div className="nav-links">
        <Link to="/">Profile</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/work">Work</Link>
      </div>
    </nav>
  );
}

export default Navbar;