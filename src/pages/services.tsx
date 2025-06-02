import { motion } from "framer-motion";
import styles from "../styles/Services.module.css";
import Link from 'next/link';
import Image from 'next/image';

// Sample services data (can be moved to CMS later)
const servicesData = [
    {
        id: "marketplace-integration",
        title: "E-commerce Integration",
        shortDescription: "Seamlessly connect Shopify with Etsy, eBay, Amazon, Walmart, and TikTok Shop",
        image: "/services/marketplace-integration.jpg",
        icon: "🔄"
    },
    {
        id: "web-development",
        title: "Web Development",
        shortDescription: "Custom web solutions built with cutting-edge technologies",
        image: "/services/web-dev.jpg",
        icon: "🌐"
    },
    {
        id: "mobile-development",
        title: "Mobile Development",
        shortDescription: "Native and cross-platform mobile applications",
        image: "/services/mobile-dev.jpg",
        icon: "📱"
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        shortDescription: "Data-driven marketing strategies for maximum ROI",
        image: "/services/digital-marketing.jpg",
        icon: "📈"
    },
    {
        id: "shopify-customization",
        title: "Shopify Customization",
        shortDescription: "Tailored Shopify themes and custom functionality",
        image: "/services/shopify-custom.jpg",
        icon: "🎨"
    },
    {
        id: "ecommerce-strategy",
        title: "E-commerce Strategy",
        shortDescription: "Comprehensive e-commerce growth and optimization",
        image: "/services/ecommerce-strategy.jpg",
        icon: "📊"
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        shortDescription: "User-centered design that converts visitors into customers",
        image: "/services/ui-ux.jpg",
        icon: "✨"
    },
    {
        id: "content-marketing",
        title: "Content Marketing",
        shortDescription: "Strategic content creation and marketing solutions",
        image: "/services/content-marketing.jpg",
        icon: "📝"
    }
];

const Services = () => {
    return (
        <div className={styles.servicesPage}>
            {/* Hero Section */}
            <motion.section
                className={styles.hero}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Our Services</h1>
                <p>Transforming businesses through innovative digital solutions</p>
            </motion.section>

            {/* Services Grid */}
            <section className={styles.servicesGrid}>
                {servicesData.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className={styles.serviceCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link href={`/services/${service.id}`}>
                            <div className={styles.serviceContent}>
                                <div className={styles.serviceIcon}>{service.icon}</div>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"
                                        priority={index < 4} // Load first 4 images immediately
                                    />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.shortDescription}</p>
                                <span className={styles.learnMore}>Learn More →</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <motion.section
                className={styles.cta}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className={styles.ctaContent}>
                    <h2>Ready to Transform Your Business?</h2>
                    <p>Get a free consultation and receive a custom proposal within 24 hours.</p>
                    <div className={styles.ctaFeatures}>
                        <span>✓ No commitment required</span>
                        <span>✓ Expert consultation worth $500</span>
                        <span>✓ Detailed action plan included</span>
                    </div>
                    <Link href="/contact">
                        <button className={styles.ctaButton}>
                            Schedule Your Free Consultation
                        </button>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
};

export default Services; 