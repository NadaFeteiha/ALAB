import '../App.css';

export default function NavBar({ isFooter = false }) {

    const tabs = ['Women\'s', 'Men\'s', 'On the Street', 'The Catwalk', 'AdWatch', 'About'];
    const style = isFooter ? 'nav-item-footer' : 'nav-item';

    if (isFooter) {
        tabs.unshift('Home');
        tabs.push('Tips');
    }

    return (
        <nav className="navbar">
            <ul className="nav-list">
                {tabs.map((tab, index) => (
                    <li key={index} className={style}>
                        <a> {tab}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};