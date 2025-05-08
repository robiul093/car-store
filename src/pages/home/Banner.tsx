import img1 from '../../../public/assets/mainBanner.png'
import img2 from '../../../public/assets/bannerSide.png'
import img3 from '../../../public/assets/bannerSide2.png'

export default function Banner() {
    return (
        <div className='md:h-[400px] w-full'>
            <div className="md:flex justify-center items-center gap-5">

                <div className="md:w-[70%] h-full mb-2">
                    <img className='rounded-xl' src={img1} alt="" />
                </div>
                
                <div className="space-y-2 md:space-y-5 md:w-[30%] h-full">
                    <img className='rounded-xl' src={img2} alt="" />
                    <img className='rounded-xl' src={img3} alt="" />
                </div>

            </div>
        </div>
    )
}
