// Header.js
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import Logo from "../../images/log2.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./Header.css";
import PopUpModal from "../modal/PopUpModal";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNav = () => setIsNavVisible((prev) => !prev);
  const closeNav = () => setIsNavVisible(false);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="header">
      <nav className="header__nav container">
        {/* Logo Section */}
        <div className="header__left">
          <Link to="/" className="header__logo" onClick={closeNav}>
            <img src={Logo} alt="Moniemate Logo" />
          </Link>

          {/* Navigation Links */}
          <ul className={`header__links ${isNavVisible ? "header__links--visible" : "header__links--hidden"}`}>
            {links.map(({ name, path, subLinks }, index) => (
              <li key={index} className="header__item" onClick={() => toggleNav()}>
                {subLinks ? (
                  <div className="header__dropdown" onClick={() => handleDropdownToggle(index)}>
                    <span className="header__link">{name}</span>
                    <ul className={`header__dropdown-menu ${activeDropdown === index ? "visible" : ""}`}>
                      {subLinks.map((subLink, subIndex) => (
                        <li key={subIndex} className="header__dropdown-item">
                          <NavLink to={subLink.path} className="header__dropdown-link" onClick={closeNav}>
                            {subLink.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink to={path} className="header__link" onClick={closeNav}>
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side with PopUpModal and Menu Toggle */}
        <div className="header__right">
          <PopUpModal className="modal__btn" />
          <div className="header__menu-btn" onClick={toggleNav}>
            {isNavVisible ? <MdClose /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
