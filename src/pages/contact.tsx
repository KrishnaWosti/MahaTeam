import styles from "../styles/Contact.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <motion.section
            className={styles.contactPage}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className={styles.contactHeader} variants={itemVariants}>
                <h1>Let's Build Something Great Together</h1>
                <p>Ready to take your e-commerce business to the next level? We're here to help you succeed.</p>
            </motion.div>

            <div className={styles.contactContainer}>
                {/* Left Section - Contact Details */}
                <motion.div className={styles.contactDetails} variants={itemVariants}>
                    <h2>Get in Touch</h2>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <FaPhone aria-label="Phone" />
                            <div>
                                <h3>Call Us</h3>
                                <a href="tel:+977-970-7581118">Call</a>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <FaEnvelope aria-label="Email" />
                            <div>
                                <h3>Email Us</h3>
                                <a href="mailto:contact@mahateam.com">contact@mahateam.com</a>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <FaMapMarkerAlt aria-label="Location" />
                            <div>
                                <h3>Visit Us</h3>
                                <p>Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialSection}>
                        <h3>Connect With Us</h3>
                        <p>Follow us on social media for updates and insights</p>
                        <div className={styles.socialIcons}>
                            <motion.a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaFacebook aria-label="Facebook" />
                            </motion.a>
                            <motion.a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaInstagram aria-label="Instagram" />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin aria-label="LinkedIn" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Section - Contact Form */}
                <motion.div variants={itemVariants}>
                    <ContactForm />
                </motion.div>
            </div>

            {/* Google Map */}
            <motion.div
                className={styles.mapContainer}
                variants={itemVariants}
            >
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1709912345678!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    loading="lazy"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                />
            </motion.div>
        </motion.section>
    );
};

export default Contact;
