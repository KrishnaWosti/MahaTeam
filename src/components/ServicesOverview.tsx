import styles from "../styles/ServicesOverview.module.css";
import Link from "next/link";
import { FaShopify, FaLaptopCode, FaBoxOpen, FaSearch, FaHeadset, FaStore, FaClipboardList, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
    {
        icon: <FaShopify />,
        title: "Expert Shopify Integration",
        description: "Transform your business with seamless Shopify setup & integration. Get a powerful online store up and running quickly.",
        highlight: "100+ successful integrations"
    },
    {
        icon: <FaLaptopCode />,
        title: "Custom Website Development",
        description: "Professional website development with modern design principles and cutting-edge technologies.",
        highlight: "Mobile-first approach"
    },
    {
        icon: <FaBoxOpen />,
        title: "Multi-Platform Integration",
        description: "Unified product management across Etsy, eBay, Amazon, Walmart, and TikTok Shop for maximum reach.",
        highlight: "Sync across 5+ platforms"
    },
    {
        icon: <FaSearch />,
        title: "SEO & Performance",
        description: "Boost your visibility with expert SEO optimization and lightning-fast mobile experiences.",
        highlight: "Up to 200% traffic increase"
    },
    {
        icon: <FaHeadset />,
        title: "24/7 Expert Support",
        description: "Round-the-clock technical support, maintenance, and rapid issue resolution for your peace of mind.",
        highlight: "Average 2hr response time"
    },
    {
        icon: <FaStore />,
        title: "Complete Store Setup",
        description: "End-to-end e-commerce solution with optimized design, payment gateways, and inventory management.",
        highlight: "30-day launch guarantee"
    },
    {
        icon: <FaClipboardList />,
        title: "Product Optimization",
        description: "Data-driven product listings with SEO-optimized content and high-converting product photography.",
        highlight: "40% conversion boost"
    },
    {
        icon: <FaChartLine />,
        title: "Growth Optimization",
        description: "Strategic improvements to maximize sales, reduce cart abandonment, and increase customer lifetime value.",
        highlight: "Average 65% ROI"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.6
        }
    }
};

const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const ServicesOverview = () => {
    return (
        <section className={styles.services}>
            <div className="container">
                <motion.div
                    className={styles.sectionHeader}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <h2>Comprehensive E-commerce Solutions</h2>
                    <p>
                        Transform your online presence with our expert e-commerce solutions.
                        We combine technical expertise with business strategy to help you succeed in the digital marketplace.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.serviceGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.serviceCard}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className={styles.icon}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className={styles.highlight}>{service.highlight}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link href="/services" className={styles.viewAll}>
                        Explore All Services
                        <span className={styles.arrow}>→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;
