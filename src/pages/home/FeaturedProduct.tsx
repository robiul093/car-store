import FeaturedCard from "../../components/FeaturedCard";

export default function FeaturedProduct() {
    return (
        <div className="bg-[#101010] text-white my-10 px-5 rounded-2xl">
            <div className="flex justify-between items-center pt-14 pb-10">
                <h2 className="md:w-[300px] text-start text-4xl">Top Picks For Cars <br /> On <span className="text-[#dbc905]">Sales</span></h2>
                <p className="md:w-[550px] text-[15lx] font-normal">Discover the best deals on high-performance, luxury, and budget-friendly cars. Handpicked for value and style—find your perfect ride today! 🚘✨</p>
                <button className="bg-[#03995B] text-white w-40 h-10 rounded-3xl">View All</button>
            </div>

            <div>
                <FeaturedCard />
            </div>
        </div>
    )
}
