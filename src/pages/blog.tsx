import { useState } from 'react';
import styles from "../styles/Blog.module.css";
import { motion } from "framer-motion";
import { FaSearch, FaCalendar, FaClock, FaUser } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

// Sample blog data (in a real app, this would come from an API/CMS)
const blogPosts = [
    {
        id: 1,
        title: "10 Essential Shopify Apps to Boost Your E-commerce Sales",
        excerpt: "Discover the must-have Shopify apps that can help increase your store's conversion rate and streamline operations. Learn how to automate tasks, improve customer experience, and boost sales.",
        category: "E-commerce",
        author: "Krishna Shrestha",
        date: "March 15, 2024",
        readTime: "8 min read",
        image: "/blog/shopify-apps.jpg",
        featured: true
    },
    {
        id: 2,
        title: "The Ultimate Guide to SEO for E-commerce Websites",
        excerpt: "Learn proven SEO strategies specifically tailored for e-commerce websites to improve your search rankings and drive organic traffic. Master the art of product optimization and technical SEO.",
        category: "SEO",
        author: "Sarah Johnson",
        date: "March 12, 2024",
        readTime: "12 min read",
        image: "/blog/seo-guide.jpg",
        featured: true
    },
    {
        id: 3,
        title: "How to Create High-Converting Product Pages",
        excerpt: "Master the art of creating product pages that convert visitors into customers with these proven design and copywriting techniques. Learn the psychology behind successful product presentations.",
        category: "Conversion",
        author: "Mike Anderson",
        date: "March 10, 2024",
        readTime: "10 min read",
        image: "/blog/product-page.jpg"
    },
    {
        id: 4,
        title: "Social Media Marketing Strategies for E-commerce",
        excerpt: "Effective social media strategies to promote your e-commerce store and engage with your target audience. Discover the best practices for each platform and content creation tips.",
        category: "Marketing",
        author: "Emily Chen",
        date: "March 8, 2024",
        readTime: "9 min read",
        image: "/blog/social-media.jpg"
    },
    {
        id: 5,
        title: "Understanding E-commerce Analytics",
        excerpt: "A comprehensive guide to understanding and utilizing e-commerce analytics to make data-driven decisions. Learn how to track KPIs and optimize your online store performance.",
        category: "Analytics",
        author: "David Wilson",
        date: "March 5, 2024",
        readTime: "11 min read",
        image: "/blog/analytics.jpg"
    },
    {
        id: 6,
        title: "Custom Shopify Theme Development Guide",
        excerpt: "Learn how to create custom Shopify themes that stand out from the competition. Master Liquid templating and theme customization techniques.",
        category: "Development",
        author: "Alex Turner",
        date: "March 3, 2024",
        readTime: "15 min read",
        image: "/blog/shopify-custom.jpg"
    },
    {
        id: 7,
        title: "Building a Successful E-commerce Strategy",
        excerpt: "Develop a comprehensive e-commerce strategy that drives growth and increases revenue. Learn about market analysis, customer journey optimization, and growth tactics.",
        category: "Strategy",
        author: "Lisa Wang",
        date: "March 1, 2024",
        readTime: "13 min read",
        image: "/blog/ecommerce-strategy.jpg"
    },
    {
        id: 8,
        title: "UI/UX Best Practices for E-commerce",
        excerpt: "Essential UI/UX design principles to create user-friendly and conversion-optimized e-commerce websites. Learn about user research, wireframing, and usability testing.",
        category: "Design",
        author: "Ryan Cooper",
        date: "February 28, 2024",
        readTime: "10 min read",
        image: "/blog/ui-ux.jpg"
    },
    {
        id: 9,
        title: "Content Marketing for E-commerce Success",
        excerpt: "Create compelling content that drives traffic and converts visitors into customers. Master the art of storytelling and SEO-optimized content creation.",
        category: "Marketing",
        author: "Emma Davis",
        date: "February 25, 2024",
        readTime: "9 min read",
        image: "/blog/content-marketing.jpg"
    }
];

const categories = ["All", "E-commerce", "SEO", "Marketing", "Analytics", "Development", "Strategy", "Design", "Conversion"];

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className={styles.blogPage}>
            {/* Header Section */}
            <motion.div
                className={styles.blogHeader}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Our Blog</h1>
                <p>Expert insights, industry trends, and actionable tips for e-commerce success</p>
            </motion.div>

            {/* Featured Posts */}
            <section className={styles.featuredPosts}>
                <h2>Featured Articles</h2>
                <div className={styles.featuredGrid}>
                    {blogPosts.filter(post => post.featured).map(post => (
                        <motion.article
                            key={post.id}
                            className={styles.featuredPost}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/blog/${post.id}`}>
                                <div className={styles.featuredImage}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                    />
                                </div>
                                <div className={styles.featuredContent}>
                                    <span className={styles.category}>{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className={styles.postMeta}>
                                        <span><FaUser /> {post.author}</span>
                                        <span><FaCalendar /> {post.date}</span>
                                        <span><FaClock /> {post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className={styles.filterSection}>
                <div className={styles.searchBar}>
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className={styles.categories}>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* All Posts Grid */}
            <motion.section
                className={styles.allPosts}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h2>Latest Articles</h2>
                <div className={styles.postsGrid}>
                    {filteredPosts.map(post => (
                        <motion.article
                            key={post.id}
                            className={styles.blogPost}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/blog/${post.id}`}>
                                <div className={styles.postImage}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        layout="responsive"
                                    />
                                </div>
                                <div className={styles.postContent}>
                                    <span className={styles.category}>{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className={styles.postMeta}>
                                        <span><FaUser /> {post.author}</span>
                                        <span><FaCalendar /> {post.date}</span>
                                        <span><FaClock /> {post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default Blog; 