import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WhyChooseUs from "../home/WhyChooseUs";
import AboutBanner from "./AboutBanner";

export default function AboutPage() {
    return (
        <div>
            <NavBar />
            <AboutBanner />
            <WhyChooseUs />
            <Footer />
        </div>
    )
}
