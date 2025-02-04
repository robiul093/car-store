import ima1 from '../../../public/assets/about_banner.png'

export default function AboutBanner() {
    return (
        <div className="bg-black text-white rounded-xl mb-24">
            <div className="relative text-white md:w-[500px] h-[500px] mx-auto space-y-5 pt-10">
                <h2 className="text-4xl text-white"> <span className="text-[#dbc907]">Buy</span> Your Dream Car</h2>
                <p className="text-sm">Discover top-quality cars at unbeatable prices! From sleek sedans to powerful SUVs, find your perfect ride and drive with confidence today!
                </p>

                <div className="space-x-3">
                    <button className="btn border-0 rounded-sm bg-[#03995B] text-white">Explore Cars</button>
                    <button className="btn border-0 rounded-sm text-[#03995B]">Buy Cars</button>
                </div>

                <div>
                    <img src={ima1} alt="" className='absolute -bottom-16'/>
                </div>
            </div>
        </div>
    )
}
