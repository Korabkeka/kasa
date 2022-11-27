import Logo from "./Logo"
import "./Footer.css"
//© 2020 Kasa. All rights reserved

function Footer(){

    return (
        <footer className="footer__logo">
            <Logo color="white"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;