import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    Lead Manager
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                            >
                                Dashboard
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/leads"
                            >
                                Leads
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;