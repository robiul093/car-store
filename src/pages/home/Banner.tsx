import img1 from '../../../public/assets/mainBanner.png'
import img2 from '../../../public/assets/bannerSide.png'
import img3 from '../../../public/assets/bannerSide2.png'

export default function Banner() {
    return (
        <div className='h-[400px]'>
            <div className="flex justify-center items-center gap-5">

                <div className="w-[70%] h-full">
                    <img className='rounded-xl' src={img1} alt="" />
                </div>
                
                <div className="space-y-5 w-[30%] h-full">
                    <img className='rounded-xl' src={img2} alt="" />
                    <img className='rounded-xl' src={img3} alt="" />
                </div>

            </div>
        </div>
    )
}
