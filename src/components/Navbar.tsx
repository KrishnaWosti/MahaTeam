'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            setShowNavbar(window.scrollY < lastScrollY);
            setScrolled(window.scrollY > 50);
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = !menuOpen ? 'hidden' : 'unset';
    };

    // Close menu when clicking a link
    const handleLinkClick = () => {
        setMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <nav className={`${styles.navbar} ${showNavbar ? styles.show : styles.hide} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>
                    <Link href="/" onClick={handleLinkClick}>
                        <span>MahaTeam</span>
                    </Link>
                </div>

                {/* Hamburger Menu Icon */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Navbar Links */}
                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link href="/services" onClick={handleLinkClick}>Services</Link></li>
                    <li><Link href="/blog" onClick={handleLinkClick}>Blog</Link></li>
                    <li><Link href="/about" onClick={handleLinkClick}>About</Link></li>
                    <li className={styles.cta}>
                        <Link href="/contact" onClick={handleLinkClick}>Get Started</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
