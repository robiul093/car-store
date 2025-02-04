import { FaCircleArrowRight } from "react-icons/fa6";
import FeaturedCard from "../../components/FeaturedCard";
import { useGetAllCarsQuery } from "../../redux/features/product/productApi";

export default function FeaturedProduct() {

    const {data, isLoading} = useGetAllCarsQuery(undefined);
    const products = data?.data;
    console.log(data, products)
    
    if(isLoading){
        return <h2>Loading......</h2>
    }
    
    return (
        <div className="bg-[#101010] text-white my-10 px-8 py-14 rounded-2xl">
            <div className="flex justify-between items-center pt-7 pb-14">
                <h2 className="md:w-[300px] text-start text-4xl">Top Picks For Cars <br /> On <span className="text-[#dbc905]">Sales</span></h2>
                <p className="md:w-[550px] text-[15lx] font-normal">Discover the best deals on high-performance, luxury, and budget-friendly cars. Handpicked for value and style—find your perfect ride today! 🚘✨</p>
                <button className="btn border-0 bg-[#03995B] text-white w-32 h-10 rounded-3xl">View All <FaCircleArrowRight className="ml-3"/></button>
            </div>

            <div className="grid grid-cols-3 gap-5">
                {
                    products?.slice(0,6).map((product: any, index: number) => <FeaturedCard key={index} product={product} />)
                }
                {/* <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard /> */}
            </div>
        </div>
    )
}
