import "./Header.css";
import headerLogo from "../../assets/header-logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a href="/"><img src={headerLogo} alt="Header Logo" /></a>
        <ul className="header-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Articles</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <nav>
          <p>Cart <span>(0)</span></p>
          <button>Get a free quote</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
