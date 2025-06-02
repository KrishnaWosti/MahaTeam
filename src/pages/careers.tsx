import { useState } from 'react';
import { motion } from "framer-motion";
import styles from "../styles/Careers.module.css";
import { FaUsers, FaRocket, FaLaptopCode, FaHandshake } from 'react-icons/fa';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        resume: null as File | null
    });

    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                resume: e.target.files[0]
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your server
        // For now, just show a success message
        setSubmitStatus({
            submitted: true,
            error: false,
            message: 'Thank you for your interest! We will keep your resume on file for future opportunities.'
        });
    };

    const values = [
        {
            icon: <FaUsers />,
            title: "Collaborative Culture",
            description: "Join a team that values collaboration, creativity, and mutual growth."
        },
        {
            icon: <FaRocket />,
            title: "Innovation First",
            description: "Work with cutting-edge technologies and shape the future of e-commerce."
        },
        {
            icon: <FaLaptopCode />,
            title: "Continuous Learning",
            description: "Access to learning resources and regular skill development opportunities."
        },
        {
            icon: <FaHandshake />,
            title: "Work-Life Balance",
            description: "Flexible work arrangements and respect for personal time."
        }
    ];

    return (
        <motion.div
            className={styles.careersPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className={styles.hero}>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Join Our Team
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Shape the future of e-commerce with us
                </motion.p>
            </section>

            {/* Values Section */}
            <section className={styles.values}>
                <h2>Why Join Us?</h2>
                <div className={styles.valuesGrid}>
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className={styles.valueCard}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <div className={styles.icon}>{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Current Openings Section */}
            <section className={styles.openings}>
                <h2>Current Openings</h2>
                <div className={styles.noOpenings}>
                    <p>We don't have any open positions at the moment, but we're always looking for talented individuals to join our team.</p>
                    <p>Submit your resume below, and we'll contact you when a suitable position becomes available.</p>
                </div>
            </section>

            {/* Submit Resume Section */}
            <section className={styles.submitResume}>
                <h2>Submit Your Resume</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <select
                            name="position"
                            required
                            onChange={handleInputChange}
                        >
                            <option value="">Interested Position</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <select
                            name="experience"
                            required
                            onChange={handleInputChange}
                        >
                            <option value="">Years of Experience</option>
                            <option value="0-2">0-2 years</option>
                            <option value="2-5">2-5 years</option>
                            <option value="5+">5+ years</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <textarea
                            name="message"
                            placeholder="Tell us about yourself"
                            rows={4}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.fileInput}>
                            <input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                required
                                onChange={handleFileChange}
                            />
                            <span>Upload Resume (PDF, DOC, DOCX)</span>
                        </label>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Submit Application
                    </button>
                    {submitStatus.submitted && (
                        <div className={submitStatus.error ? styles.error : styles.success}>
                            {submitStatus.message}
                        </div>
                    )}
                </form>
            </section>
        </motion.div>
    );
};

export default Careers; 