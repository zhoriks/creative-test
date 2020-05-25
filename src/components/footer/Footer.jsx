import * as React from 'react'
import github__icon from '../../image/github.png'
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__author">Георгий Погорелов</div>
        <a href="https://github.com/zhoriks" className="footer__link">
          <img src={github__icon} width="20px" height="20px" alt="" className="footer__link-icon"/>
           Github
        </a>
    </footer>
  );
}

export default Footer;