import footerLogo from "../../assets/header-logo.png"
import "../footer/Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a href="/"><img src={footerLogo} alt="Footer Logo" /></a>
        <div className="footer-links">
          <a href="/">Copyright © Cleaning X | Designed by</a>
          <a href="/">BRIX Templates</a>
          <a href="/">Powered by</a>
          <a href="/">Webflow</a>
          <a href="/">Licenses</a>
          </div>
        </div>
    </footer>
  );
}

export default Footer;