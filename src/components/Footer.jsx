import GitHubIcons from "../icons/GitHubIcons";
import "../styles/Footer.css";

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="container">
                <div className="footer-group">
                    <div className="footer-item">&copy; 2021 Lopes, Gabriel.</div>
                    <a href="/" className="footer-item">Terms</a>
                    <a href="/" className="footer-item">Privacy</a>
                    <a href="/" className="footer-item">Security</a>
                    <a href="/" className="footer-item">Status</a>
                    <a href="/" className="footer-item">Docs</a>
                </div>
                <a href="/" className="logo"><GitHubIcons icon="logo"/></a>
                <div className="footer-group">
                    <a href="/" className="footer-item">Contact GitHub</a>
                    <a href="/" className="footer-item">Pricing</a>
                    <a href="/" className="footer-item">API</a>
                    <a href="/" className="footer-item">Training</a>
                    <a href="/" className="footer-item">Blog</a>
                    <a href="/" className="footer-item">About</a>
                </div>
            </div>
        </footer>
    </>;
}