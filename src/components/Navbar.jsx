import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='owner'>Owner</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;