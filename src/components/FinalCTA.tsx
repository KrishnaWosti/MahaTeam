import styles from "../styles/FinalCTA.module.css";
import Link from "next/link";

const FinalCTA = () => {
    return (
        <section className={styles.finalCTA}>
            <div className={styles.ctaContent}>
                <h2>Let's Elevate Your Business to the Next Level</h2>
                <p>Boost your online presence with expert marketing solutions tailored to your needs.</p>
                <Link href="/contact" className={styles.ctaButton} aria-label="Get a Free Consultation">
                    Get a Free Consultation
                </Link>
            </div>
        </section>
    );
};

export default FinalCTA;
