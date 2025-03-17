import styles from "../styles/CaseStudies.module.css";
import Link from "next/link";
import { FaShopify, FaRocket, FaMobileAlt, FaChartLine } from "react-icons/fa";

const caseStudies = [
    {
        icon: <FaShopify />,
        title: "Shopify Store Migration & Optimization",
        description: "Migrated a business to Shopify, improving UX and increasing sales by 40%.",
        link: "/portfolio/shopify-migration",
    },
    {
        icon: <FaRocket />,
        title: "7-Figure E-Commerce Brand Scaling",
        description: "Helped a startup scale to 7 figures using a custom Shopify strategy.",
        link: "/portfolio/ecom-brand-scaling",
    },
    {
        icon: <FaMobileAlt />,
        title: "TikTok & Meta Shop Integration",
        description: "Seamless integration with TikTok Shop & Meta, driving 3x revenue growth.",
        link: "/portfolio/tiktok-meta-integration",
    },
    {
        icon: <FaChartLine />,
        title: "Conversion Rate Optimization (CRO)",
        description: "Revamped product pages & checkout flow, boosting conversion rates by 60%.",
        link: "/portfolio/conversion-optimization",
    },
];

const CaseStudies = () => {
    return (
        <section className={styles.caseStudies}>
            <h2>Our Success Stories</h2>
            <p>See how we've helped e-commerce brands achieve outstanding results.</p>

            <div className={styles.caseGrid}>
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className={styles.caseCard}>
                        <div className={styles.caseIcon}>{caseStudy.icon}</div>
                        <h3>{caseStudy.title}</h3>
                        <p>{caseStudy.description}</p>
                        <Link href={caseStudy.link} className={styles.viewCase} aria-label={`View ${caseStudy.title} case study`}>
                            View Case Study
                        </Link>
                    </div>
                ))}
            </div>

            <Link href="/portfolio" className={styles.viewAll} aria-label="View all case studies">
                View All Work
            </Link>
        </section>
    );
};

export default CaseStudies;
