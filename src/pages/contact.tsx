import styles from "../styles/Contact.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <section className={styles.contactPage}>
            <h1>Contact Us</h1>
            <p>Let's discuss how we can help grow your business.</p>

            <div className={styles.contactContainer}>
                {/* Left Section - Contact Details */}
                <div className={styles.contactDetails}>
                    <h2>Get in Touch</h2>
                    <p>
                        <FaPhone aria-label="Phone" />{" "}
                        <a href="tel:+1234567890">+977-970-7501118</a>
                    </p>
                    <p>
                        <FaEnvelope aria-label="Email" />{" "}
                        <a href="mailto:contact@mahateam.com">contact@mahateam.com</a>
                    </p>
                    <p>
                        <FaMapMarkerAlt aria-label="Location" /> <a>Kathmandu, Nepal</a>
                    </p>

                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook aria-label="Facebook" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram aria-label="Instagram" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin aria-label="LinkedIn" />
                        </a>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <ContactForm />
            </div>

            {/* Google Map */}
            <div className={styles.mapContainer}>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086197!2d144.95592311531578!3d-37.81720987975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6b0b6fda39e!2sDigital%20Marketing%20Agency!5e0!3m2!1sen!2snp!4v1614107564730!5m2!1sen!2snp"
                    width="100%"
                    height="350"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default Contact;
