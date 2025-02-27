import Footer from "../../components/Footer";
import Banner from "./Banner";
import FAQ from "./FAQ";
import FeaturedProduct from "./FeaturedProduct";

export default function Home() {
    return (
        <div className="space-y-4">
            <Banner />
            <FeaturedProduct />
            <FAQ />
            <Footer />
        </div>
    )
}
