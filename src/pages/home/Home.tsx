import Banner from "./Banner";
import FAQ from "./FAQ";
import FeaturedProduct from "./FeaturedProduct";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
    return (
        <div>
            <Banner />
            <FeaturedProduct />
            <WhyChooseUs />
            <FAQ />
        </div>
    )
}
