import { FaHandHoldingUsd } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TbDatabaseDollar } from "react-icons/tb";

export default function WhyChooseUs() {
  return (
    <div>
      <div className="w-[650px] mx-auto">
        <h2 className="text-4xl mb-6 text-[#1D0A0A]">Why <span className='text-[#c7b933]'>Choose</span> Us </h2>
        <p className="text-gray-400">🚗 Top-Quality Cars, Best Deals & Easy Buying! Certified vehicles, great prices, flexible financing, and hassle-free trade-ins—trusted by thousands! 🌟</p>
      </div>

      <div className="lg:flex mt-14">
        <div className="w-[400px] space-y-10 pl-5">
          <div className="text-start space-y-4">
            <FaCar className="text-3xl text-[#03995B]" />
            <h2 className="text-xl font-medium">Wide Selection of Vehicles</h2>
            <p className="text-gray-600">Explore a diverse range of cars, from affordable sedans to luxury models, ensuring you find the perfect vehicle.</p>
          </div>

          <div className="text-start space-y-4">
            <FaHandHoldingUsd className="text-3xl text-[#03995B]" />
            <h2 className="text-xl font-medium">Transparent Pricing</h2>
            <p className="text-gray-600">Enjoy clear, upfront pricing with no hidden fees, offering you the best value for your money on every purchase.</p>
          </div>

        </div>

        <div className="w-[400px] ">
          

        </div>

        <div className="w-[400px] space-y-10 pl-5">
          <div className="text-start space-y-4">
            <TbDatabaseDollar className="text-3xl text-[#03995B]" />
            <h2 className="text-xl font-medium">Flexible Financing Options</h2>
            <p className="text-gray-600">Get easy, customized payment plans designed to fit your budget, making car ownership more affordable and stress-free.</p>
          </div>

          <div className="text-start space-y-4">
            <HiOutlineWrenchScrewdriver className="text-3xl text-[#03995B]" />
            <h2 className="text-xl font-medium">Exceptional Customer Service</h2>
            <p className="text-gray-600">Our dedicated team is here to guide you at every step, ensuring a smooth, friendly, and efficient car buying experience.</p>
          </div>

        </div>



      </div>
    </div>
  )
}
