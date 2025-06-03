import styles from "../styles/FinalCTA.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { useState } from "react";

const FinalCTA = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const buttonVariants = {
        rest: {
            scale: 1,
            backgroundColor: "#008060"
        },
        hover: {
            scale: 1.05,
            backgroundColor: "#006048",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const arrowVariants = {
        rest: { x: 0 },
        hover: {
            x: 10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className={styles.finalCTA}>
            <div className={styles.container}>
                <motion.div
                    className={styles.ctaContent}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <h2>Ready to Transform Your E-commerce Business?</h2>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p>Join hundreds of successful businesses that have scaled their online presence with our expert solutions.</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className={styles.ctaButtons}
                    >
                        <motion.div
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className={styles.primaryButton}
                        >
                            <Link href="https://calendly.com/kushal-mahateam/30min">
                                Book Your Free Strategy Call
                                <motion.span
                                    variants={arrowVariants}
                                    className={styles.arrow}
                                >
                                    <FaArrowRight />
                                </motion.span>
                            </Link>
                        </motion.div>

                        <motion.button
                            className={styles.videoButton}
                            onClick={() => setIsVideoPlaying(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlay />
                            <span>Shopify - Revenue Machine</span>
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.videoSection}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {isVideoPlaying ? (
                        <div className={styles.videoWrapper}>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/wS_rD-4J0ZM?autoplay=1"
                                title="Random"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <div className={styles.videoPlaceholder}>
                            <img
                                src="https://weblime.com/wp-content/uploads/2022/02/Expert-Shopify-Automation-Tips.png"
                                alt="Random Video"
                                className={styles.thumbnail}
                            />
                            <motion.div
                                className={styles.playButton}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsVideoPlaying(true)}
                            >
                                <FaPlay />
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
