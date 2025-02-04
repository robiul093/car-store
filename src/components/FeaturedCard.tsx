import { MdOutlineArrowOutward } from "react-icons/md";

type TProduct = {
    product : any
}

export default function FeaturedCard({product}: TProduct) {
    console.log(product)
    return (
        <div className="group bg-base-100 w- shadow-sm rounded-xl">
            {/* <figure> */}
            <img className="rounded-xl"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            {/* </figure> */}
            <div className="card-body bg-slate-200 rounded-xl mt-2 p-2 pb-3 text-black text-start group-hover:bg-[#03995B] duration-700 group-hover:text-white">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">Card Title</h2>
                    <button className=" p-3 rounded-full mr-3 my-1 cursor-pointer group-hover:bg-white bg-[#03995B] "><MdOutlineArrowOutward className="font-bold text-white group-hover:text-[#03995B]" /></button>
                </div>
                <div className="flex">
                    <p>Price: <span className="font-semibold">$<span>4047</span> </span> </p>
                    <p className="">Mileage: <span className="font-semibold"> Unlimited </span></p>
                </div>
            </div>
        </div>
    )
}
