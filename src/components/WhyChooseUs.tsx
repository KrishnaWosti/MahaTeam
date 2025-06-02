import styles from "../styles/WhyChooseUs.module.css";
import { FaCode, FaShopify, FaRocket, FaHandshake, FaUserClock, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const sellingPoints = [
    {
        icon: <FaCode />,
        title: "Technical Excellence",
        description: "Our expert developers deliver clean, scalable code and seamless integrations that power your e-commerce success.",
        highlight: "99.9% uptime guarantee"
    },
    {
        icon: <FaShopify />,
        title: "Shopify Specialists",
        description: "Deep expertise in Shopify development, customization, and optimization to maximize your store's potential.",
        highlight: "Shopify Plus Partner"
    },
    {
        icon: <FaRocket />,
        title: "Performance Focused",
        description: "We optimize for speed, conversions, and user experience to drive measurable business growth.",
        highlight: "3x faster loading"
    },
    {
        icon: <FaGlobe />,
        title: "Multi-Platform Success",
        description: "Seamless integration across Shopify, Amazon, eBay, TikTok Shop, and other major marketplaces.",
        highlight: "5+ platforms sync"
    },
    {
        icon: <FaUserClock />,
        title: "Rapid Support",
        description: "24/7 technical support and maintenance with quick response times to keep your business running smoothly.",
        highlight: "<2hr response time"
    },
    {
        icon: <FaHandshake />,
        title: "Growth Partnership",
        description: "We're invested in your long-term success, providing strategic guidance and scalable solutions.",
        highlight: "95% client retention"
    }
];

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

const WhyChooseUs = () => {
    return (
        <section className={styles.whyChooseUs}>
            <div className="container">
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2>Why Partner With Mahateam?</h2>
                    <p>
                        We combine technical expertise with business acumen to deliver exceptional e-commerce solutions.
                        Our focus is on creating scalable, high-performance stores that drive real business growth.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.pointsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {sellingPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className={styles.pointCard}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className={styles.icon}>{point.icon}</div>
                            <h3>{point.title}</h3>
                            <p>{point.description}</p>
                            <div className={styles.highlight}>{point.highlight}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
