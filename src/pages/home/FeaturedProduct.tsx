import { FaCircleArrowRight } from "react-icons/fa6";
import FeaturedCard from "../../components/FeaturedCard";
import { useGetAllCarsQuery } from "../../redux/features/product/productApi";
import { Link } from "react-router-dom";

export default function FeaturedProduct() {

    const { data, isLoading } = useGetAllCarsQuery(undefined);
    const products = data?.data?.result;
    // console.log(data, products)

    return (
        <div className="bg-[#101010] text-white my-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-14 rounded-2xl drop-shadow-lg">

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 pt-7 pb-14">

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-start lg:max-w-[300px]">
                    Top Picks For Cars <br /> On <span className="text-[#dbc905]">Sales</span>
                </h2>

                <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-gray-300 lg:max-w-[550px]">
                    Discover the best deals on high-performance, luxury, and budget-friendly cars. Handpicked for value and style—find your perfect ride today! �✨
                </p>

                <div className="lg:flex-shrink-0">
                    <Link to={'/products'} className="btn border-0 bg-[#03995B] text-white w-32 h-10 rounded-3xl flex items-center justify-center">
                        View All <FaCircleArrowRight className="ml-3" />
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-3 lg:gap-3">
                {
                    isLoading ? (
                        <div>
                            <span className="loading loading-ring loading-md"></span>
                            <span className="loading loading-ring loading-lg"></span>
                            <span className="loading loading-ring loading-xl"></span>
                        </div>
                    ) : (
                        products?.slice(0, 4).map((product: any, index: number) => (
                            <FeaturedCard key={index} product={product} />
                        ))
                    )
                }
            </div>
        </div>
    )
}
