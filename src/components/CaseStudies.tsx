import styles from "../styles/CaseStudies.module.css";
import Image from "next/image";
import Link from "next/link";
import ecom from '../asset/case-study-1.jpg'
import ADS from '../asset/case-study-2.jpg'
import SEO from '../asset/case-study-3.jpg'


const caseStudies = [
    {
        title: "E-Commerce Sales Boost",
        description: "Implemented an SEO and ads strategy that increased conversions by 250%.",
        image: ecom,
        link: "/portfolio/ecommerce-sales-boost",
    },
    {
        title: "Tech Startup Lead Generation",
        description: "Generated high-quality B2B leads through Google Ads and landing page optimization.",
        image: ADS,
        link: "/portfolio/tech-startup-leads",
    },
    {
        title: "Local Business SEO Growth",
        description: "Helped a local business dominate search rankings and increase organic traffic.",
        image: SEO,
        link: "/portfolio/local-seo-growth",
    },
];

const CaseStudies = () => {
    return (
        <section className={styles.caseStudies}>
            <h2>Our Success Stories</h2>
            <p>See how we've helped businesses achieve outstanding results.</p>

            <div className={styles.caseGrid}>
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className={styles.caseCard}>
                        <Image
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            width={400}
                            height={250}
                            className={styles.caseImage}
                            priority={index === 0} // Prioritize the first image for performance
                        />
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
