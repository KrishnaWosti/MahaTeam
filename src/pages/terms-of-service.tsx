import { motion } from "framer-motion";
import styles from "../styles/Legal.module.css";
import Link from 'next/link';

const TermsOfService = () => {
    return (
        <motion.div
            className={styles.legalContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.legalContent}>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Terms of Service
                </motion.h1>
                <p className={styles.lastUpdated}>Last Updated: March 15, 2024</p>

                <section className={styles.section}>
                    <h2>1. Agreement to Terms</h2>
                    <p>
                        By accessing and using our website and services, you agree to be bound by these Terms of Service.
                        If you disagree with any part of these terms, you may not access our services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Services Description</h2>
                    <p>
                        MahaTeam provides web development, e-commerce integration, and digital marketing services.
                        We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. User Responsibilities</h2>
                    <p>As a user of our services, you agree to:</p>
                    <ul>
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account</li>
                        <li>Use our services in compliance with applicable laws</li>
                        <li>Not engage in any unauthorized activities</li>
                        <li>Not infringe on intellectual property rights</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content, features, and functionality of our website are owned by MahaTeam and are protected
                        by international copyright, trademark, and other intellectual property laws.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Payment Terms</h2>
                    <p>
                        For paid services:
                    </p>
                    <ul>
                        <li>Payments are due according to agreed-upon terms</li>
                        <li>All fees are non-refundable unless otherwise specified</li>
                        <li>We may modify our pricing with reasonable notice</li>
                        <li>Late payments may incur additional charges</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>6. Service Delivery</h2>
                    <p>
                        We strive to deliver services according to agreed-upon timelines. However, we are not responsible
                        for delays caused by circumstances beyond our control.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        MahaTeam shall not be liable for any indirect, incidental, special, consequential, or punitive
                        damages resulting from your use or inability to use our services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>8. Termination</h2>
                    <p>
                        We may terminate or suspend your access to our services immediately, without prior notice or liability,
                        for any reason, including breach of these Terms.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>9. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. We will notify users of any material
                        changes by posting the new terms on this site.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>10. Governing Law</h2>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction],
                        without regard to its conflict of law provisions.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>11. Contact Information</h2>
                    <p>
                        For any questions about these Terms of Service, please contact us at:
                    </p>
                    <p className={styles.contactInfo}>
                        Email: legal@mahateam.com<br />
                        Phone: +1 (555) 123-4567<br />
                        Address: 123 Business Street, Tech City, TC 12345
                    </p>
                </section>
            </div>
        </motion.div>
    );
};

export default TermsOfService; 