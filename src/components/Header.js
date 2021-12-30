import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <input id='menuButton' type='image' src='/images/nav.png' />

            <div className='navbar row' id='test'>
                <div className='col-8 navTitle'><a href='/'>ZPS</a></div>
                <a href='/'><div className='col-1 navLink'>Home</div></a>
                <a href='/school'><div className='col-1 navLink'>School</div></a>
                <a href='/current'><div className='col-1 navLink'>Current</div></a>
                <a href='/about'><div className='col-1 navLink'>About</div></a>
            </div>
            <Outlet/>
        </div>
    )
}

export default Header