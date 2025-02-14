import styles from "../styles/WhyChooseUs.module.css";
import { FaRocket, FaUsers, FaLightbulb, FaChartBar } from "react-icons/fa";

const sellingPoints = [
    {
        icon: <FaRocket />,
        title: "Proven Results",
        description: "We focus on strategies that deliver measurable growth and ROI.",
    },
    {
        icon: <FaUsers />,
        title: "Client-Centric Approach",
        description: "Your success is our priority. We tailor solutions to fit your needs.",
    },
    {
        icon: <FaLightbulb />,
        title: "Innovative Strategies",
        description: "We stay ahead of trends to ensure your business remains competitive.",
    },
    {
        icon: <FaChartBar />,
        title: "Data-Driven Decisions",
        description: "Our strategies are backed by analytics and real-time insights.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className={styles.whyChooseUs}>
            <h2>Why Choose Mahateam?</h2>
            <p>We combine expertise, creativity, and data-driven strategies to help your business grow.</p>

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
