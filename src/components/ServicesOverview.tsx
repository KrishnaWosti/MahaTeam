import styles from "../styles/ServicesOverview.module.css";
import Link from "next/link";
import { FaLaptopCode, FaPenNib, FaBullhorn, FaChartLine, FaSearch } from "react-icons/fa";

const ServicesOverview = () => {
    const services = [
        { icon: <FaLaptopCode />, title: "Website Development", description: "Custom, high-performance websites tailored for conversions." },
        { icon: <FaPenNib />, title: "Copywriting", description: "Engaging, SEO-friendly copy that drives action." },
        { icon: <FaBullhorn />, title: "Meta Ads", description: "Highly targeted Meta ad campaigns for better ROI." },
        { icon: <FaChartLine />, title: "Google Ads", description: "Strategic Google Ads to maximize visibility and sales." },
        { icon: <FaSearch />, title: "SEO", description: "Boost your search rankings with proven SEO techniques." },
    ];

    return (
        <section className={styles.services}>
            <h2>Our Services</h2>
            <p>We provide expert solutions to scale your online presence and drive business growth.</p>

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
