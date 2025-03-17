import styles from "../styles/FinalCTA.module.css";
import Link from "next/link";

const FinalCTA = () => {
    return (
        <section className={styles.finalCTA}>
            <div className={styles.ctaContent}>
                <h2>Scale Your Business with Proven Strategies</h2>
                <p>From seamless Shopify integrations to high-converting websites, we help businesses grow and maximize revenue.</p>
                <Link href="https://calendly.com/wostikrishna58/30min" className={styles.ctaButton} aria-label="Get a Free Consultation">
                    Claim Your Free Consultation
                </Link>
            </div>
        </section>
    );
};

export default FinalCTA;
