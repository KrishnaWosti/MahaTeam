import styles from "../styles/Testimonials.module.css";

const testimonials = [
    {
        name: "John Doe",
        designation: "CEO, Tech Startup",
        review: "Mahateam transformed our online presence and boosted our conversions by 200%. Highly recommended!",
    },
    {
        name: "Sarah Johnson",
        designation: "Marketing Director",
        review: "The SEO and ads strategy from Mahateam brought in more leads than we ever expected!",
    },
    {
        name: "Michael Lee",
        designation: "Founder, E-Commerce Brand",
        review: "Outstanding service! The team is professional, skilled, and results-driven.",
    },
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials} aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading">What Our Clients Say</h2>
            <div className={styles.testimonialGrid}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.name} className={styles.testimonialCard}>
                        <blockquote className={styles.review}>
                            &ldquo;{testimonial.review}&rdquo;
                        </blockquote>
                        <h4 className={styles.name}>{testimonial.name}</h4>
                        <p className={styles.designation}>{testimonial.designation}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
