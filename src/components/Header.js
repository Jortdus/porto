import "../App.css";

function Header() {
    return (
        <header className="Header">
            <h1>Jort Broekhof</h1>
            <nav>
                <a className="header-link" href="/">
                    About
                </a>
                <a className="header-link" href="/">
                    Projects
                </a>
            </nav>
        </header>
    );
}

export default Header;
