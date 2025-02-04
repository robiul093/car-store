import FeaturedCard from "../../components/FeaturedCard";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useGetAllCarsQuery } from "../../redux/features/product/productApi"

function AllProductsPage() {

    const { data, isLoading } = useGetAllCarsQuery(undefined);
    const products = data?.data
    console.log(data)
    if (isLoading) {
        <div>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    }

    return (
        <div>
            <NavBar />
            <div>
                
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    products?.map((product: any, index: number) => <FeaturedCard key={index} product={product} />)
                }
            </div>
            <Footer />
        </div>
    )
}

export default AllProductsPage
