import './Footer.scss';


function Footer() {
  return (
    <div className="footer">
        <img className="footer__navbarLogo" src="footerLogo.svg" alt="logo"/>
        <nav className="footer__socialbar">
            <img src="/twitterFooter.svg" alt="twitter"/>
            <img src="/facebookFooter.svg" alt="facebook"/>
            <img src="/instagramFooter.svg" alt="instagram"/>
        </nav>
        <nav className="footer__navbar">
            <a className="footer__navbarItem" href="/">Download</a>
            <a className="footer__navbarItem"  href="/">Support</a>
            <a className="footer__navbarItem"  href="/">Developers</a>
            <a className="footer__navbarItem"  href="/">Privacy</a>
        </nav>
      </div>
  );
}

export default Footer;

