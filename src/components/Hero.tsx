import styles from "../styles/Hero.module.css";
import Link from "next/link";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Boost Your Business with Expert Digital Marketing</h1>
                <p>We build high-converting websites, craft compelling copy, and run data-driven ads to help your business grow.</p>
                <Link href="/contact">
                    <button className={styles.ctaButton}>Get a Free Consultation</button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
