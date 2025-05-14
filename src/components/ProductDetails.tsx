import { useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../redux/features/product/productApi";
import { useCreateOrderMutation } from "../redux/features/order/orderApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
  //   "https://images.unsplash.com/photo-1494976388901-8329f0ef785a",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
];

export default function ProductDetails() {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [
    createOrder,
    {
      isSuccess: isOrderSuccess,
      isError: isOrderError,
      data: orderData,
      isLoading: orderLoading,
      error: orderError,
    },
  ] = useCreateOrderMutation();
  const { data, isLoading, isError, error } = useGetSingleCarQuery(
    id as string
  );
  const product = data?.data;
  //   console.log("id =>", id, data?.data);
  // const { brand, model, price, inStock, quantity, description } = product || {};

  const orderId = "order-toast";
  useEffect(() => {
    if (orderLoading) {
      toast.loading("Processing your order...", { id: orderId });
    }

    if (isOrderSuccess) {
      toast.success(orderData?.message, { id: orderId });
      orderData?.data && (window.location.href = orderData.data);
    }

    if (isOrderError && orderError) {
      toast.error(
        (orderError as FetchBaseQueryError).data?.toString() || "Order failed",
        { id: orderId }
      );
    }
  }, [isOrderError, orderError, isOrderSuccess, orderData, orderLoading]);

  const handelBuyCar = async () => {
    product && (await createOrder({ carId: product._id, quantity: 1 }));
  };

  if (isLoading)
    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
        <span className="loading loading-infinity loading-lg text-primary"></span>
      </div>
    );

  if (isError) {
    toast.error(
      (error as FetchBaseQueryError).data?.toString() || "Error loading product"
    );
    return (
      <div className="text-error text-center py-8">
        Error loading product details
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
        <div className="text-error text-center text-2xl">Product not found</div>
      </div>
    );
  }

  // Dynamic image handling
  const getProductImages = () => {
    // If product has images array, use those
    if (product?.images?.length) {
      return product.images;
    }

    // If single image exists, wrap in array
    if (product?.image) {
      return [product.image];
    }

    // Fallback to static images
    return FALLBACK_IMAGES;
  };

  const productImages: string[] = getProductImages();

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-base-100 rounded-xl shadow-2xl p-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <Swiper
              navigation
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Navigation, Thumbs]}
              className="h-96 rounded-xl overflow-hidden"
            >
              {productImages.map((img: string, idx: number) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${product?.brand} ${product?.model}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbnail-slider"
            >
              {productImages.map((img, idx) => (
                <SwiperSlide key={idx} className="cursor-pointer">
                  <img
                    src={img}
                    alt="Thumbnail"
                    className="w-24 h-16 object-cover rounded-lg opacity-75 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      // If image fails to load, replace with fallback
                      const target = e.target as HTMLImageElement;
                      target.src = FALLBACK_IMAGES[0];
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="border-b border-base-300 pb-6">
              <h1 className="text-4xl font-bold text-primary">
                {product?.brand}{" "}
                <span className="text-secondary">{product?.model}</span>
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-3xl font-bold">${product?.price}</span>
                <div className="badge badge-success badge-lg">
                  {product?.inStock ? "In Stock" : "Out of Stock"}
                </div>
              </div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-info"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Year: {product?.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-info"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>Category: {product?.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-info"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span>Available: {product?.quantity}</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose text-base-content">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-base-content/80">{product?.description}</p>
            </div>

            {/* Purchase Section */}
            <div className="space-y-4">
              <button
                onClick={handelBuyCar}
                disabled={!product?.inStock || orderLoading}
                className="btn bg-[#03995B] btn-lg w-full gap-2"
              >
                {orderLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )}
                Purchase Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mock Reviews - Replace with actual data */}
            {[1, 2].map((_, idx) => (
              <div key={idx} className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-12">
                        <span>JD</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="card-title">John Doe</h3>
                      <div className="flex items-center gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-base-content/80">
                    Amazing car! The autonomous features work perfectly and the
                    range is impressive.
                  </p>
                  <div className="text-sm text-base-content/50 mt-2">
                    March 15, 2024
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
