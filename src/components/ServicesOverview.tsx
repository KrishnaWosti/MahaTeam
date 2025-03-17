import styles from "../styles/ServicesOverview.module.css";
import Link from "next/link";
import { FaShopify, FaLaptopCode, FaBoxOpen, FaSearch, FaHeadset, FaStore, FaClipboardList, FaChartLine } from "react-icons/fa";

const services = [
    {
        icon: <FaShopify />,
        title: "Shopify Integration",
        description: "Seamless Shopify setup & integration for e-commerce success."
    },
    {
        icon: <FaLaptopCode />,
        title: "Website Creation & Modification",
        description: "Custom website development & modifications tailored to your needs."
    },
    {
        icon: <FaBoxOpen />,
        title: "Product Integrations",
        description: "Sync products across Etsy, eBay, Amazon, Walmart, and TikTok Shop."
    },
    {
        icon: <FaSearch />,
        title: "SEO & Mobile Optimization",
        description: "Optimize your website for search engines and mobile-friendly experiences."
    },
    {
        icon: <FaHeadset />,
        title: "Customer Support & Maintenance",
        description: "Ongoing support, bug fixes, and maintenance for smooth operations."
    },
    {
        icon: <FaStore />,
        title: "E-commerce Store Setup",
        description: "Full online store setup with optimized design & functionality."
    },
    {
        icon: <FaClipboardList />,
        title: "Product Listing & Optimization",
        description: "SEO-friendly product descriptions, images & categories for better visibility."
    },
    {
        icon: <FaChartLine />,
        title: "Conversion Rate Optimization",
        description: "Data-driven improvements to increase sales and maximize revenue."
    },
];

const ServicesOverview = () => {
    return (
        <section className={styles.services}>
            <h2>Our Services</h2>
            <p>We help businesses grow with expert Shopify solutions, website development, and e-commerce integrations.</p>

            <div className={styles.serviceGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>

            <Link href="/services">
                <button className={styles.viewAll}>View All Services</button>
            </Link>
        </section>
    );
};

export default ServicesOverview;
