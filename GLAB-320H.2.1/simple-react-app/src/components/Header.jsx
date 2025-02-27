import './Header.css';

function Header() {
    return (

        <div className='header'>
            <h1>Simple React Application</h1>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li><a href='#' >Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>

                </ul>
            </nav>
        </div>

    );

}

export default Header;