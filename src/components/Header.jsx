import GitHubIcons from '../icons/GitHubIcons';
import '../styles/Header.css';

export default function Header() {
    return <>
        <header className="header">
            <div className="container">
                <div className="header-group">
                    <a href="/" className="logo"><GitHubIcons icon="logo"/></a>
                    <nav className="navbar">
                        <a className="header-link header-link-dropdown" href="/">Why GitHub?</a>
                        <a className="header-link" href="/">Team</a>
                        <a className="header-link" href="/">Enterprise</a>
                        <a className="header-link header-link-dropdown" href="/">Explore</a>
                        <a className="header-link" href="/">Marketplace</a>
                        <a className="header-link header-link-dropdown" href="/">Pricing</a>
                    </nav>
                </div>
                <div className="header-group">
                    <div className="search-container">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <a className="header-link" href="/">Sign in</a>
                    <a className="header-button" href="/">Sign up</a>
                </div>
            </div>
        </header>
    </>;
}