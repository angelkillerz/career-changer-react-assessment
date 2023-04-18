import { Link, Routes, Route } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/owner">Owner Page</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;