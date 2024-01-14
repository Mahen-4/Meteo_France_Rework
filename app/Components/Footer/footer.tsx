import { FaFacebookF, FaInstagram, FaXTwitter  } from "react-icons/fa6";

export default function FooterComp () {
    return(
        <footer>
            <div className="socialM">
                <FaFacebookF size="30px"/><p>&gt;</p>
                <FaInstagram  size="30px" /><p>&gt;</p>
                <FaXTwitter  size="30px"/>
            </div>
            <div className="policy">
                <a href="#">Mentions Légales &gt; </a>
                <a href="#">Gestion des Cookies &gt; </a>
                <a href="#">Consentement &gt; </a>
                <a href="#">Accessibilité &gt; </a>
                <a href="#">Politique de Confidentialité</a>
            </div>
        </footer>
    )
}