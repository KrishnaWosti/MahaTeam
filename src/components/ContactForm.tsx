import { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// Initialize emailjs with your public key
emailjs.init("vSFcHm8i4Q3l35FiI");

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError("");
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTouched(prev => ({ ...prev, [e.target.name]: true }));
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};

        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
        }

        if (!formData.subject.trim()) {
            errors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setError("Please fill in all required fields correctly.");
            setTouched({
                name: true,
                email: true,
                subject: true,
                message: true
            });
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            // Convert formData to a plain object that emailjs expects
            const templateParams = {
                from_name: formData.name,
                reply_to: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            await emailjs.send(
                "service_yzn1v59",
                "template_69ts6ow",
                templateParams
            );

            setSuccess(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTouched({});
        } catch (err) {
            setError("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", err);
        }

        setIsSubmitting(false);
    };

    const getFieldError = (field: keyof FormData) => {
        if (!touched[field]) return "";
        const errors = validateForm();
        return errors[field] || "";
    };

    return (
        <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you shortly.</p>

            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${touched.name && getFieldError('name') ? styles.error : ''}`}
                    disabled={isSubmitting}
                    required
                />
                {touched.name && getFieldError('name') && (
                    <span className={styles.errorMessage}>{getFieldError('name')}</span>
                )}
            </div>

            <div className={styles.formGroup}>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${touched.email && getFieldError('email') ? styles.error : ''}`}
                    disabled={isSubmitting}
                    required
                />
                {touched.email && getFieldError('email') && (
                    <span className={styles.errorMessage}>{getFieldError('email')}</span>
                )}
            </div>

            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${touched.subject && getFieldError('subject') ? styles.error : ''}`}
                    disabled={isSubmitting}
                    required
                />
                {touched.subject && getFieldError('subject') && (
                    <span className={styles.errorMessage}>{getFieldError('subject')}</span>
                )}
            </div>

            <div className={styles.formGroup}>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${touched.message && getFieldError('message') ? styles.error : ''}`}
                    disabled={isSubmitting}
                    required
                    rows={5}
                />
                {touched.message && getFieldError('message') && (
                    <span className={styles.errorMessage}>{getFieldError('message')}</span>
                )}
            </div>

            <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
            >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <FaPaperPlane className={styles.submitIcon} />
            </motion.button>

            {success && (
                <motion.div
                    className={styles.success}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Thank you! Your message has been sent successfully.
                </motion.div>
            )}

            {error && (
                <motion.div
                    className={styles.error}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {error}
                </motion.div>
            )}
        </motion.form>
    );
};

export default ContactForm;
