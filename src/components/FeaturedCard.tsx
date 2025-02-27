import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export type TProduct = {
    brand: string,
    category: string,
    createdAt: string,
    description: string,
    inStock: boolean,
    model: string,
    price: number,
    quantity: number,
    _id: string
    // product: any
}

export default function FeaturedCard({ product }: { product: TProduct }) {
    // console.log(product)
    return (
        <div className="group bg-base-100 w- shadow-sm rounded-xl">

            <img className="rounded-xl"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />

            <div className="card-body bg-slate-200 rounded-xl mt-2 p-2 pb-3 text-black text-start group-hover:bg-[#03995B] duration-700 group-hover:text-white">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">{product?.brand}: {product?.model}</h2>
                    <Link to={`/product/${product._id}`} className=" p-3 rounded-full mr-3 my-1 cursor-pointer group-hover:bg-white bg-[#03995B] "><MdOutlineArrowOutward className="font-bold text-white group-hover:text-[#03995B]" /></Link>
                </div>
                <div className="flex">
                    <p className="">category: <span className="font-semibold"> {product?.category} </span></p>
                    <p>Price: <span className="font-semibold ">$<span>{product?.price}</span> </span> </p>
                </div>
            </div>
        </div>
    )
}
