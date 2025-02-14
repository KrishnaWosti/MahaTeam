import { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import emailjs from "@emailjs/browser";


const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                "service_yzn1v59",
                "template_69ts6ow",
                formData,
                "wostikrishna58@gmail.com"
            );
            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setError("Failed to send message. Try again later.");
        }

        setIsSubmitting(false);
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {success && <p className={styles.success}>Message sent successfully!</p>}
            {error && <p className={styles.error}>{error}</p>}
        </form>
    );
};

export default ContactForm;
