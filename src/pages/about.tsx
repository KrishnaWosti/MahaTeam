import { motion } from "framer-motion";
import styles from "../styles/About.module.css";
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

// Sample founder data (will be replaced with CMS data later)
const founderData = {
    name: "Kristen Luin",
    title: "Founder & CEO",
    image: "/founderimage.png",
    shortBio: "Building bridges between traditional businesses and the digital world.",
    story: {
        intro: `Growing up in a small town in Nepal, I witnessed firsthand how small 
        businesses struggled to adapt to the digital age. My parents' shop was one of them.`,

        journey: `After our family business closed in 2014, I dedicated myself to learning 
        web development. I wanted to help other businesses avoid the same fate. Working 
        with local shops, I saw how the right digital tools could transform their future.`,

        impact: `Today, we've helped hundreds of businesses thrive online. But what drives 
        me isn't the numbers – it's seeing shop owners light up when they make their first 
        online sale.`
    },
    socialLinks: {
        linkedin: "https://linkedin.com/in/example",
        instagram: "https://instagram.com/example",
        github: "https://github.com/example"
    }
};

const About = () => {
    return (
        <div className={styles.aboutPage}>
            {/* Founder Section */}
            <section className={styles.founderSection}>
                <div className={styles.founderGrid}>
                    <motion.div
                        className={styles.founderImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={founderData.image}
                            alt={founderData.name}
                            width={400}
                            height={500}
                            layout="responsive"
                            objectFit="cover"
                            priority
                        />
                        <div className={styles.socialLinks}>
                            <a href={founderData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href={founderData.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href={founderData.socialLinks.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                    </motion.div>
                    <div className={styles.founderInfo}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2>{founderData.name}</h2>
                            <h3>{founderData.title}</h3>
                        </motion.div>
                        <div className={styles.story}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {founderData.story.intro}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {founderData.story.journey}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {founderData.story.impact}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;