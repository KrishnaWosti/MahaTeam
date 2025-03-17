import ServicesOverview from "@/components/ServicesOverview";
import Hero from "../components/Hero";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesOverview />
            <Testimonials />
            {/* <CaseStudies /> */}
            <WhyChooseUs />
            <FinalCTA />
            {/* Other sections will go here */}
        </>
    );
}
