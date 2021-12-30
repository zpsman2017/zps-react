import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

// For mobile devices
// Toggles navbar
function toggleMenu() {
    var links = document.getElementsByClassName("navLink");

    for (let l of links) {
        if (l.style.display == "initial")
            l.style.display = "none";
        else
            l.style.display = "initial";
    }
}

const Header = () => {
    return (
        <div>
            <FaBars id='menuButton' color='white' onClick={toggleMenu} />

            <div className='navbar row' id='test'>
                <div className='col-8 navTitle'><a href='/'>ZPS</a></div>
                <a href='/'><div className='col-1 navLink'>Home</div></a>
                <a href='/school'><div className='col-1 navLink'>School</div></a>
                <a href='/current'><div className='col-1 navLink'>Current</div></a>
                <a href='/about'><div className='col-1 navLink'>About</div></a>
            </div>
            <Outlet />
        </div>
    )
}

export default Header