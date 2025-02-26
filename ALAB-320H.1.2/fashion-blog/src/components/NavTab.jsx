import '../App.css';

export default function NavBar() {

    const tabs = ['Women\'s', 'Men\'s', 'On the Street', 'The Catwalk', 'AdWatch', 'About'];

    return (
        <nav className="navbar">
            <ul className="nav-list">
                {tabs.map((tab, index) => (
                    <li key={index} className="nav-item">
                        <a> {tab}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};