import Footer from "../../components/Footer";
import Banner from "./Banner";
import BrandShowcase from "./BrandShowcase";
import FAQ from "./FAQ";
import FeaturedProduct from "./FeaturedProduct";
import Review from "./Review";
import TrendingVehicles from "./TrendingVehicles";

export default function Home() {
    return (
        <div className="space-y-4">
            <Banner />
            <BrandShowcase />
            <FeaturedProduct />
            <TrendingVehicles />
            <FAQ />
            <Review />
            <Footer />
        </div>
    )
}
