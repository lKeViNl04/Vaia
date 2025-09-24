import HeroeSection from "../components/home/HeroeSection";
import FunctionSection from "../components/home/FunctionSection";
import RecommendationSection from "../components/home/RecommendationSection";
import AboutSection from "../components/home/AboutSetcion";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
    return (
        <>
            <HeroeSection />
            <FunctionSection />
            <RecommendationSection />
            <AboutSection />
            <ContactSection />
        </>
    );
}