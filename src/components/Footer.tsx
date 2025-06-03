import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaShopify } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Company Info Section */}
                <div className={styles.footerLeft}>
                    <div className={styles.companyInfo}>
                        <Link href="/" className={styles.footerLogo}>

                            <span>MahaTeam</span>
                        </Link>
                        <p>Empowering businesses with cutting-edge digital marketing and Shopify solutions. Transform your online presence with our expert team.</p>
                    </div>
                </div>

                {/* Services Section */}
                <div className={styles.footerMiddle}>
                    <div className={styles.footerLinks}>
                        <h3>Services</h3>
                        <ul>
                            <li><Link href="/services/marketplace-integration">E-commerce Integration</Link></li>
                            <li><Link href="/services/web-development">Web Development</Link></li>
                            <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
                            <li><Link href="/services/ui-ux-design">UI/UX Design</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerLinks}>
                        <h3>Company</h3>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            {/* <li><Link href="/case-studies">Case Studies</Link></li> */}
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className={styles.footerContact}>
                        <h3>Get in Touch</h3>
                        <p>Ready to grow your business?</p>
                        <Link href="/contact" className={styles.contactButton}>
                            Schedule a Consultation
                        </Link>
                        <div className={styles.contactInfo}>
                            <p>Email: <a href="mailto:contact@mahateam.com">contact@mahateam.com</a></p>
                            <p>Phone: <a href="tel:970000000">Call</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className={styles.footerBottom}>
                <div className={styles.bottomContent}>
                    <div className={styles.legal}>
                        <span>&copy; {new Date().getFullYear()} MahaTeam. All rights reserved.</span>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
