import { useRouter } from 'next/router';
import styles from "../../styles/BlogPost.module.css";
import { motion } from "framer-motion";
import { FaCalendar, FaClock, FaUser, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

// Sample blog data (in a real app, this would come from an API/CMS)
const blogPosts = [
    {
        id: 1,
        title: "10 Essential Shopify Apps to Boost Your E-commerce Sales",
        content: `
            <h2>Introduction</h2>
            <p>In today's competitive e-commerce landscape, having the right tools can make all the difference in your store's success. Shopify's app ecosystem offers numerous solutions to enhance your store's functionality and improve customer experience.</p>

            <h2>1. Sales Boost Pro</h2>
            <p>This essential app helps increase your conversion rate through social proof, urgency, and scarcity features. Key benefits include:</p>
            <ul>
                <li>Real-time sales notifications</li>
                <li>Countdown timers for promotions</li>
                <li>Stock level indicators</li>
                <li>Recently viewed products</li>
            </ul>

            <h2>2. Smart SEO</h2>
            <p>Optimize your store's search engine visibility with automated meta tags, structured data, and sitemap management. Features include:</p>
            <ul>
                <li>Automated meta tag generation</li>
                <li>JSON-LD structured data</li>
                <li>Sitemap optimization</li>
                <li>Search console integration</li>
            </ul>

            <h2>3. Advanced Analytics</h2>
            <p>Make data-driven decisions with comprehensive analytics and reporting tools. Track:</p>
            <ul>
                <li>Customer behavior patterns</li>
                <li>Product performance metrics</li>
                <li>Conversion funnel analysis</li>
                <li>Revenue attribution</li>
            </ul>
        `,
        excerpt: "Discover the must-have Shopify apps that can help increase your store's conversion rate and streamline operations.",
        category: "E-commerce",
        author: "Krishna Shrestha",
        date: "March 15, 2024",
        readTime: "8 min read",
        image: "/blog/shopify-apps.jpg",
        featured: true
    },
    // ... other blog posts
];

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the blog post with the matching ID
    const post = blogPosts.find(post => post.id === Number(id));

    if (!post) {
        return (
            <div className={styles.errorContainer}>
                <h1>Post not found</h1>
                <p>The blog post you're looking for doesn't exist.</p>
                <Link href="/blog" className={styles.backLink}>
                    Return to Blog
                </Link>
            </div>
        );
    }

    return (
        <motion.article
            className={styles.blogPost}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={styles.category}>{post.category}</span>
                        <h1>{post.title}</h1>
                        <div className={styles.postMeta}>
                            <span><FaUser /> {post.author}</span>
                            <span><FaCalendar /> {post.date}</span>
                            <span><FaClock /> {post.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Featured Image */}
            <div className={styles.featuredImage}>
                <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={600}
                    layout="responsive"
                    priority
                />
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.contentWrapper}>
                    {/* Share Sidebar */}
                    <motion.div
                        className={styles.shareSidebar}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p>Share</p>
                        <div className={styles.shareButtons}>
                            <a href={`https://facebook.com/share?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        className={styles.mainContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </div>

            {/* Back to Blog */}
            <div className={styles.backToBlog}>
                <Link href="/blog" className={styles.backLink}>
                    ← Back to Blog
                </Link>
            </div>
        </motion.article>
    );
};

export default BlogPost; 