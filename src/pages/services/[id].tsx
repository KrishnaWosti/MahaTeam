import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../../styles/ServiceDetail.module.css";
import Image from 'next/image';
import Link from 'next/link';

interface ProcessStep {
    title: string;
    description: string;
}

interface ServiceDetail {
    title: string;
    hero: string;
    description: string;
    overview: string;
    features: string[];
    process: ProcessStep[];
    technologies: string[];
}

interface ServiceDetails {
    [key: string]: ServiceDetail;
}

// Sample detailed service data (can be moved to CMS later)
const serviceDetails: ServiceDetails = {
    "marketplace-integration": {
        title: "E-commerce Integration",
        hero: "/services/marketplace-integration-hero.jpg",
        description: "Seamlessly connect Shopify with major marketplaces and social commerce platforms",
        overview: "We help businesses expand their reach by integrating their Shopify stores with major marketplaces like Amazon, eBay, Etsy, Walmart, and TikTok Shop. Our solutions ensure smooth synchronization of inventory, orders, and pricing across all platforms.",
        features: [
            "Multi-channel Inventory Sync",
            "Automated Order Processing",
            "Real-time Price Updates",
            "Centralized Order Management",
            "Cross-platform Analytics"
        ],
        process: [
            {
                title: "Platform Analysis",
                description: "We analyze your business needs and identify the best marketplace integrations."
            },
            {
                title: "Integration Setup",
                description: "Setting up secure connections with each marketplace platform."
            },
            {
                title: "Data Synchronization",
                description: "Implementing inventory and order sync across all channels."
            },
            {
                title: "Testing & Validation",
                description: "Thorough testing of all integration points and workflows."
            },
            {
                title: "Monitoring & Support",
                description: "Continuous monitoring and optimization of marketplace performance."
            }
        ],
        technologies: ["Shopify API", "Amazon MWS", "eBay API", "Etsy API", "Walmart Marketplace API", "TikTok Shop API"]
    },
    "web-development": {
        title: "Web Development",
        hero: "/services/web-dev-hero.jpg",
        description: "Custom web solutions that drive business growth",
        overview: "We create powerful, scalable web applications using cutting-edge technologies. Our solutions are tailored to your specific business needs and designed to deliver exceptional user experiences.",
        features: [
            "Custom Web Applications",
            "E-commerce Solutions",
            "Progressive Web Apps (PWA)",
            "API Development & Integration",
            "Website Maintenance & Support"
        ],
        process: [
            {
                title: "Discovery",
                description: "We analyze your requirements and create a detailed project roadmap."
            },
            {
                title: "Design",
                description: "Our UI/UX team creates intuitive and engaging interfaces."
            },
            {
                title: "Development",
                description: "We build your solution using modern technologies and best practices."
            },
            {
                title: "Testing",
                description: "Rigorous testing ensures a bug-free and smooth user experience."
            },
            {
                title: "Launch",
                description: "We deploy your solution and provide ongoing support."
            }
        ],
        technologies: ["React", "Next.js", "Node.js", "Python", "AWS"]
    },
    "mobile-development": {
        title: "Mobile Development",
        hero: "/services/mobile-dev-hero.jpg",
        description: "Native and cross-platform mobile solutions",
        overview: "We develop high-performance mobile applications that engage users and drive business growth. Our expertise spans both iOS and Android platforms.",
        features: [
            "Native iOS Development",
            "Native Android Development",
            "Cross-platform Solutions",
            "Mobile App Strategy",
            "App Store Optimization"
        ],
        process: [
            {
                title: "Strategy",
                description: "We define your mobile app strategy and platform choice."
            },
            {
                title: "Design",
                description: "Creating intuitive mobile interfaces following platform guidelines."
            },
            {
                title: "Development",
                description: "Building robust and scalable mobile applications."
            },
            {
                title: "Testing",
                description: "Comprehensive testing across devices and OS versions."
            },
            {
                title: "Launch",
                description: "App store submission and post-launch support."
            }
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    "digital-marketing": {
        title: "Digital Marketing",
        hero: "/services/digital-marketing-hero.jpg",
        description: "Data-driven marketing strategies for maximum ROI",
        overview: "We create comprehensive digital marketing strategies that drive traffic, engage customers, and increase conversions. Our approach is data-driven and focused on measurable results.",
        features: [
            "SEO Optimization",
            "PPC Advertising",
            "Social Media Marketing",
            "Email Marketing",
            "Analytics & Reporting"
        ],
        process: [
            {
                title: "Analysis",
                description: "We analyze your current marketing efforts and identify opportunities."
            },
            {
                title: "Strategy",
                description: "Developing a comprehensive marketing strategy aligned with your goals."
            },
            {
                title: "Implementation",
                description: "Executing campaigns across multiple channels."
            },
            {
                title: "Monitoring",
                description: "Continuous monitoring and optimization of campaigns."
            },
            {
                title: "Reporting",
                description: "Regular reporting and strategy refinement."
            }
        ],
        technologies: ["Google Analytics", "SEMrush", "HubSpot", "Facebook Ads", "Google Ads"]
    },
    "shopify-customization": {
        title: "Shopify Customization",
        hero: "/services/shopify-custom-hero.jpg",
        description: "Tailored Shopify themes and custom functionality",
        overview: "We transform standard Shopify themes into unique, branded experiences. Our customizations enhance both aesthetics and functionality to maximize your store's performance.",
        features: [
            "Custom Theme Development",
            "UI/UX Improvements",
            "Custom App Development",
            "Speed Optimization",
            "Conversion Rate Optimization"
        ],
        process: [
            {
                title: "Assessment",
                description: "We evaluate your current store and identify improvement areas."
            },
            {
                title: "Planning",
                description: "Creating a customization plan aligned with your brand."
            },
            {
                title: "Development",
                description: "Implementing custom features and design elements."
            },
            {
                title: "Testing",
                description: "Thorough testing across devices and browsers."
            },
            {
                title: "Optimization",
                description: "Continuous improvement and performance optimization."
            }
        ],
        technologies: ["Shopify Liquid", "JavaScript", "CSS3", "HTML5", "Shopify APIs"]
    },
    "ecommerce-strategy": {
        title: "E-commerce Strategy",
        hero: "/services/ecommerce-strategy-hero.jpg",
        description: "Comprehensive e-commerce growth and optimization",
        overview: "We help businesses develop and implement effective e-commerce strategies that drive growth, improve customer experience, and increase revenue.",
        features: [
            "Market Analysis",
            "Competitor Research",
            "Revenue Optimization",
            "Customer Journey Mapping",
            "Growth Strategy Development"
        ],
        process: [
            {
                title: "Research",
                description: "In-depth analysis of your market and competition."
            },
            {
                title: "Strategy",
                description: "Developing a comprehensive growth strategy."
            },
            {
                title: "Implementation",
                description: "Executing the strategy across all channels."
            },
            {
                title: "Optimization",
                description: "Continuous monitoring and improvement."
            },
            {
                title: "Scaling",
                description: "Scaling successful strategies for sustained growth."
            }
        ],
        technologies: ["Analytics Tools", "CRM Systems", "Marketing Automation", "Business Intelligence"]
    },
    "ui-ux-design": {
        title: "UI/UX Design",
        hero: "/services/ui-ux-hero.jpg",
        description: "User-centered design that converts visitors into customers",
        overview: "We create intuitive, engaging user interfaces that enhance user experience and drive conversions. Our designs are based on research and user behavior analysis.",
        features: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Visual Design",
            "Usability Testing"
        ],
        process: [
            {
                title: "Research",
                description: "Understanding user needs and behavior patterns."
            },
            {
                title: "Wireframing",
                description: "Creating low-fidelity designs and user flows."
            },
            {
                title: "Design",
                description: "Developing high-fidelity designs and interactions."
            },
            {
                title: "Testing",
                description: "User testing and feedback collection."
            },
            {
                title: "Implementation",
                description: "Design handoff and development support."
            }
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
    },
    "content-marketing": {
        title: "Content Marketing",
        hero: "/services/content-marketing-hero.jpg",
        description: "Strategic content creation and marketing solutions",
        overview: "We develop and execute content strategies that engage your audience, build brand authority, and drive organic traffic to your website.",
        features: [
            "Content Strategy",
            "SEO Content Creation",
            "Social Media Content",
            "Email Marketing",
            "Content Analytics"
        ],
        process: [
            {
                title: "Strategy",
                description: "Developing a comprehensive content strategy."
            },
            {
                title: "Creation",
                description: "Creating high-quality, engaging content."
            },
            {
                title: "Distribution",
                description: "Publishing and promoting content across channels."
            },
            {
                title: "Monitoring",
                description: "Tracking content performance and engagement."
            },
            {
                title: "Optimization",
                description: "Refining strategy based on data insights."
            }
        ],
        technologies: ["Content Management Systems", "SEO Tools", "Social Media Tools", "Analytics Platforms"]
    }
};

const ServiceDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const service = id ? serviceDetails[id as string] : null;

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <Image
                    src={service.hero}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        className={styles.heroDescription}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {service.description}
                    </motion.p>
                </div>
            </section>

            {/* Overview Section */}
            <motion.section
                className={styles.overview}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <p className={styles.overviewText}>{service.overview}</p>
            </motion.section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featuresGrid}>
                    {service.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.featureCard}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            {feature}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className={styles.process}>
                <h2 className={styles.processTitle}>Our Process</h2>
                <div className={styles.processGrid}>
                    {service.process.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.processStep}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <div className={styles.stepNumber}>{index + 1}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Technologies Section */}
            <section className={styles.technologies}>
                <h2 className={styles.technologiesTitle}>Technologies We Use</h2>
                <div className={styles.techStack}>
                    {service.technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className={styles.techItem}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
                    <p className={styles.ctaText}>
                        Let's discuss how we can help transform your business with our {service.title.toLowerCase()} solutions.
                    </p>
                    <Link
                        href="/contact"
                        className={styles.ctaButton}
                    >
                        Schedule a Free Consultation
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default ServiceDetail; 