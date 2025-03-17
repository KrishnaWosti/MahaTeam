import { useEffect, useState } from "react";
import styles from "../styles/Testimonials.module.css";

interface Review {
    customerName: string;
    stars: number;
    text: string;
}

const Testimonials = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("/api/trustpilot-reviews");
                const data = await response.json();
                setReviews(data.reviews);
            } catch (error) {
                console.error("Error fetching Trustpilot reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <section className={styles.testimonials} aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading">Trust Is Everything</h2>

            {loading ? (
                <p>Loading reviews...</p>
            ) : (
                <div className={styles.testimonialGrid}>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className={styles.testimonialCard}>
                                <blockquote className={styles.review}>
                                    &ldquo;{review.text}&rdquo;
                                </blockquote>
                                <h4 className={styles.name}>{review.customerName}</h4>
                                <p className={styles.stars}>⭐ {review.stars}/5</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews available at the moment.</p>
                    )}
                </div>
            )}
        </section>
    );
};

export default Testimonials;
