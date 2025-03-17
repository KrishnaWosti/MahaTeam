import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setIsDarkMode(savedTheme === "dark");
    }, []);

    return (
        <footer className={`${styles.footer} ${isDarkMode ? styles.dark : ""}`}>
            <div className={styles.footerContainer}>
                {/* Left Section - Logo & Description */}
                <div className={styles.footerLeft}>
                    <h2>Mahateam</h2>
                    <p>Optimize your online presence with expert marketing solutions.</p>
                </div>

                {/* Center Section - Quick Links & Contact (Side-by-Side on Mobile) */}
                <div className={styles.footerMiddle}>
                    <div className={styles.footerLinks}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerContact}>
                        <h3>Contact</h3>
                        <p>Email: <a href="mailto:contact@mahateam.com">contact@mahateam.com</a></p>
                        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>

                {/* Right Section - Social Icons */}
                <div className={styles.footerRight}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Mahateam. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
