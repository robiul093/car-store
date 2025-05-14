import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WhyChooseUs from "../home/WhyChooseUs";
import AboutBanner from "./AboutBanner";

export default function AboutPage() {
    return (
        <div className="space-y-4 mt-[90px]">
            <NavBar />
            <AboutBanner />
            <WhyChooseUs />
            <Footer />
        </div>
    )
}
