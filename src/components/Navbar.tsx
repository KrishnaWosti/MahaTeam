import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

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

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className={styles.navbar}>
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
