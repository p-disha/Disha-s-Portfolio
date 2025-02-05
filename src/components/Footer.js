import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: disha.papneja@gmail.com</p>
                <p className="footer-contact-access">Mobile:+1 9294908473</p>
            </div>
            {/*
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.facebook.com/"><i><FaFacebook /></i></a>
                    <a href="https://www.instagram.com/"><i><FaInstagram /></i></a>
                    <a href="https://twitter.com/"><i><FaTwitter /></i></a>
                </div>
            </div>
            */}
        </footer>
    )
}

export default Footer;