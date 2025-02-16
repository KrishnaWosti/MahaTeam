import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    // Load dark mode preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    // Hide navbar on scroll down, show on scroll up
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Hide navbar when scrolling down
            } else {
                setShowNavbar(true); // Show navbar when scrolling up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${showNavbar ? styles.show : styles.hide}`}>
            <div className={styles.logo}>
                <Link href="/">Mahateam</Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className={styles.hamburger} onClick={toggleMenu}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Navbar Links */}
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
                <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
                <li><Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                <li className={styles.cta}>
                    <Link href="/contact" onClick={toggleMenu}>Contact</Link>
                </li>
                <li>
                    <button className={styles.darkModeToggle} onClick={toggleDarkMode}>
                        {darkMode ? "🌙" : "☀️"}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
