import React from "react"
import { Link } from "react-router-dom"
import footerMenus from "../../utils/footerMenus"
import socialMedias from "../../utils/socialMedias"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-wrap">
          <a href="#">Subscribe to our newsletter</a>
          <Link to="/location">
            <b>Lagos Nigeria</b>
          </Link>
          <div className="footer-menus">
            {footerMenus.map(({ id, name, path }) => (
              <Link key={id} to={path}>
                {name}{" "}
              </Link>
            ))}
          </div>
          <div className="social-medias">
            {socialMedias.map(({ id, name, path }) => (
              <a href={path} key={id} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ))}
          </div>
          <p className="copywright">
            &copy;Kokribranders 2016 - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
