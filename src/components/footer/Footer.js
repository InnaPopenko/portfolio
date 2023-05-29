import './style.css';

import instagram from './../../img/icons/instagram.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import twitter from './../../img/icons/twitter.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item"><a href="https://www.instagram.com/inusyk_/" target="_blank"><img src={instagram} alt="Instagram"/></a></li> 
              <li className="social__item"><a href="https://www.youtube.com/watch?v=upRNUw8zI5c"><img src={twitter} target="_blank" alt="./youtube" /></a></li> 
              <li className="social__item"><a href="https://github.com/InnaPopenko" target="_blank"><img src={gitHub} alt="GitHub" /></a></li> 
              <li className="social__item"><a href="https://www.linkedin.com/in/inna-popenko-8734791a0/" target="_blank"><img src={linkedIn} alt="LinkedIn" /></a></li> 
            </ul>
            <p className="footer__text">2023 frontend</p>
        </div>
        </div>
    </footer>
     );
}
 
export default Footer;