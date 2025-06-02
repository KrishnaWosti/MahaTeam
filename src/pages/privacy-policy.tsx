import { motion } from "framer-motion";
import styles from "../styles/Legal.module.css";
import Link from 'next/link';

const PrivacyPolicy = () => {
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
                    Privacy Policy
                </motion.h1>
                <p className={styles.lastUpdated}>Last Updated: March 15, 2024</p>

                <section className={styles.section}>
                    <h2>Introduction</h2>
                    <p>
                        Welcome to MahaTeam. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy explains how we collect, use, and safeguard your information when you visit our website
                        and use our services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Information We Collect</h2>
                    <h3>Personal Information</h3>
                    <p>We may collect the following types of personal information:</p>
                    <ul>
                        <li>Name and contact details</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Business information</li>
                        <li>IP address and browser information</li>
                    </ul>

                    <h3>Usage Data</h3>
                    <p>We also collect information about how you use our website:</p>
                    <ul>
                        <li>Pages visited</li>
                        <li>Time spent on pages</li>
                        <li>Links clicked</li>
                        <li>Referring websites</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>How We Use Your Information</h2>
                    <p>We use the collected information for various purposes:</p>
                    <ul>
                        <li>Providing and maintaining our services</li>
                        <li>Improving our website and services</li>
                        <li>Communicating with you about our services</li>
                        <li>Sending newsletters and marketing materials (with your consent)</li>
                        <li>Analyzing usage patterns to enhance user experience</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Data Protection</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information.
                        These measures include:
                    </p>
                    <ul>
                        <li>Encryption of data in transit and at rest</li>
                        <li>Regular security assessments</li>
                        <li>Access controls and authentication</li>
                        <li>Regular backups and monitoring</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Your Rights</h2>
                    <p>You have the following rights regarding your personal data:</p>
                    <ul>
                        <li>Right to access your data</li>
                        <li>Right to correct inaccurate data</li>
                        <li>Right to request deletion of your data</li>
                        <li>Right to restrict processing</li>
                        <li>Right to data portability</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Cookies</h2>
                    <p>
                        We use cookies and similar tracking technologies to enhance your browsing experience.
                        You can control cookie settings through your browser preferences.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Third-Party Services</h2>
                    <p>
                        We may use third-party services that collect, monitor, and analyze data.
                        These services have their own privacy policies governing the use of your information.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. We will notify you of any changes
                        by posting the new policy on this page and updating the "Last Updated" date.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy, please contact us at:
                    </p>
                    <p className={styles.contactInfo}>
                        Email: privacy@mahateam.com<br />
                        Phone: +1 (555) 123-4567<br />
                        Address: 123 Business Street, Tech City, TC 12345
                    </p>
                </section>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy; 