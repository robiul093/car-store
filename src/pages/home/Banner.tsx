import img1 from '../../../public/assets/mainBanner.png'
import img2 from '../../../public/assets/bannerSide.png'

export default function Banner() {
  return (
    <div>
      <h2>This is banner components</h2>
      <div className="flex gap-5 h-[400px]">
        <div 
        // style={{backgroundImage: 'url(../../../public/assets/mainBanner.png)', position: 'center'}} 
        className="w-[70%]">
            <img className='rounded-xl' src={img1} alt="" />
        </div>
        <div className="bg-green-600 w-[30%]">

        </div>
      </div>
    </div>
  )
}
