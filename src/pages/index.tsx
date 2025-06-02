import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (

        <>
            <Hero />
            <ServicesOverview />
            <WhyChooseUs />
            <FinalCTA />
            {/* Other sections will go here */}
        </>
    );
}
