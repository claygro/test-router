import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </>
  );
};

export default Navbar;
