import styles from "../styles/Hero.module.css";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";  // Shopify icon
import { FaEbay, FaAmazon } from "react-icons/fa";  // eBay & Amazon icons
import { SiEtsy, SiWalmart } from "react-icons/si";  // Etsy & Walmart icons

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Grow Your E-Commerce Business with Expert Solutions</h1>
                <p>We create and optimize Shopify stores, integrate with platforms like Etsy, eBay, and Amazon, and help you scale effortlessly.</p>
                <Link href="https://calendly.com/wostikrishna58/30min">
                    <button className={styles.ctaButton}>Book a Discovery Call</button>
                </Link>

                {/* Icon Section */}
                <div className={styles.iconContainer}>
                    <FaShopify className={styles.icon} />
                    <FaEbay className={styles.icon} />
                    <SiEtsy className={styles.icon} />
                    <FaAmazon className={styles.icon} />
                    <SiWalmart className={styles.icon} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
