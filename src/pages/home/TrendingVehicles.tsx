
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const trendingCars = [
  {
    id: 1,
    image:
      "https://www.hdcarwallpapers.com/thumbs/2025/ferrari_296_speciale_a_2025_5k-t2.jpg",
    year: 2021,
    mileage: "15,000 km",
    price: "$25,000",
    isFavorite: true,
  },
  {
    id: 2,
    image:
      "https://www.hdcarwallpapers.com/thumbs/2025/mansory_ferrari_sf90_soft_kit_5k-t2.jpg",
    year: 2022,
    mileage: "8,000 km",
    price: "$29,500",
    isFavorite: false,
  },
  {
    id: 3,
    image:
      "https://www.hdcarwallpapers.com/thumbs/2024/ferrari_550_gto-t2.jpg",
    year: 2020,
    mileage: "22,000 km",
    price: "$19,999",
    isFavorite: false,
  },
  {
    id: 3,
    image:
      "https://www.hdcarwallpapers.com/thumbs/2025/ferrari_296_speciale_a_2025_5k-t2.jpg",
    year: 2020,
    mileage: "22,000 km",
    price: "$19,999",
    isFavorite: false,
  },
  {
    id: 3,
    image:
      "https://www.hdcarwallpapers.com/thumbs/2025/ferrari_296_speciale_a_2025_5k-t2.jpg",
    year: 2020,
    mileage: "22,000 km",
    price: "$19,999",
    isFavorite: false,
  },
  // Add more cars as needed
];

const TrendingVehicles = () => {
  return (
    <section className="px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">Trending <span className='text-[#c7b933]'>Vehicles</span></h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {trendingCars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="card w-full bg-base-100 shadow-xl relative">
              <figure className="relative">
                <img
                  src={car.image}
                  alt={`Car ${car.id}`}
                  className="h-40 w-full object-cover"
                />
                <div className="badge badge-error absolute top-2 left-2 text-white">
                  Hot
                </div>
                <button className="absolute top-2 right-2 text-white text-xl">
                  {car.isFavorite ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </figure>
              <div className="card-body p-4">
                <h3 className="font-semibold text-lg">Year: {car.year}</h3>
                <p className="text-sm">Mileage: {car.mileage}</p>
                <p className="text-sm font-bold text-[#03995B]">
                  Price: {car.price}
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-outline border-[#03995B] text-[#03995B] hover:bg-[#03995B] hover:text-white">
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingVehicles;
