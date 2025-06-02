import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import heroImage from "../asset/hero-image.png";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={styles.heroText}
                    >
                        <h1>
                            Transform Your <span className={styles.highlight}>E-Commerce</span> Vision Into Reality
                        </h1>
                        <p>
                            Expert e-commerce development and digital marketing solutions to help your business thrive in the digital landscape. From custom store design to multi-channel selling.
                        </p>
                        <div className={styles.ctaGroup}>
                            <Link href="/contact" className={styles.primaryCta}>
                                Get Started
                                <FaArrowRight className={styles.arrowIcon} />
                            </Link>
                            <Link href="https://calendly.com/wostikrishna58/30min" className={styles.secondaryCta}>
                                Book a Free Consultation
                            </Link>
                        </div>

                        <div className={styles.statsContainer}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>2+</span>
                                <span className={styles.statLabel}>Projects Completed</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>Client Satisfaction</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>Email</span>
                                <span className={styles.statLabel}>Support Available</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.heroVisual}
                >
                    <div className={styles.visualContainer}>
                        <div className={styles.mainVisual}>
                            <Image
                                src={heroImage}
                                alt="Digital Marketing and E-commerce Integration"
                                placeholder="blur"
                                quality={100}
                                priority
                            />
                        </div>
                        <div className={styles.floatingElements}>
                            <div className={`${styles.floatingCard} ${styles.card1}`}>
                                <Image
                                    src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                                    alt="Shopify"
                                    width={24}
                                    height={24}
                                />
                                <span>Shopify Experts</span>
                            </div>
                            <div className={`${styles.floatingCard} ${styles.card2}`}>
                                <span className={styles.metric}>100%</span>
                                <span>Satisfaction</span>
                            </div>
                            <div className={`${styles.floatingCard} ${styles.card3}`}>
                                <span>Professional</span>
                                <span>Service</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className={styles.trustBar}>
                <p>Ready to expand your e-commerce presence?</p>
                <div className={styles.trustLogos}>
                    <div className={styles.logoItem}>
                        <Image
                            src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                            alt="Shopify"
                            width={100}
                            height={32}
                            className={styles.platformLogo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                            alt="Amazon"
                            width={100}
                            height={32}
                            className={styles.platformLogo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                            alt="Walmart"
                            width={100}
                            height={32}
                            className={styles.platformLogo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"
                            alt="eBay"
                            width={80}
                            height={32}
                            className={styles.platformLogo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg"
                            alt="Etsy"
                            width={80}
                            height={32}
                            className={styles.platformLogo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <Image
                            src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
                            alt="TikTok Shop"
                            width={80}
                            height={32}
                            className={styles.platformLogo}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
