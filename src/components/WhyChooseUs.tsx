import styles from "../styles/WhyChooseUs.module.css";
import { FaRocket, FaChartLine, FaTools, FaHandshake } from "react-icons/fa";

const sellingPoints = [
    {
        icon: <FaRocket />,
        title: "E-Commerce Growth Experts",
        description: "We specialize in scaling Shopify and e-commerce brands with proven strategies that maximize conversions and revenue.",
    },
    {
        icon: <FaChartLine />,
        title: "Data-Driven Performance",
        description: "Our decisions are backed by in-depth analytics, market trends, and AI-driven insights to ensure measurable success.",
    },
    {
        icon: <FaTools />,
        title: "Seamless Integrations",
        description: "We connect your store with Amazon, eBay, TikTok Shop, and Meta, unlocking multiple revenue streams effortlessly.",
    },
    {
        icon: <FaHandshake />,
        title: "Long-Term Partnerships",
        description: "We don’t just build stores; we build relationships. Our goal is to help your business scale sustainably for the long run.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className={styles.whyChooseUs}>
            <h2>Why Choose Mahateam?</h2>
            <p>We drive e-commerce success with expert strategies, powerful integrations, and a commitment to long-term growth.</p>

            <div className={styles.pointsGrid}>
                {sellingPoints.map((point, index) => (
                    <div key={index} className={styles.pointCard}>
                        <div className={styles.icon}>{point.icon}</div>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
