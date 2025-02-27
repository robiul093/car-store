import { useParams } from "react-router-dom"
import { useGetAllCarsQuery } from "../redux/features/product/productApi";
import { TProduct } from "./FeaturedCard";
import { useCreateOrderMutation } from "../redux/features/order/orderApi";
import { useEffect } from "react";
import { toast } from "sonner";


export default function ProductDetails() {
    const { id } = useParams();

    const [createOrder, { isSuccess: isOrderSuccess, isError: isOrderError, data: orderData, isLoading: orderLoading, error: orderError }] = useCreateOrderMutation();
    const { data, isLoading, isError, error } = useGetAllCarsQuery(undefined);
    const products = data?.data;

    const product: TProduct | undefined = products ? products.find((item: TProduct) => item._id === id) : undefined;

    useEffect(() => {
        if (orderLoading) {
            toast.loading('Order is Creating....', { id: orderId });
        };

        if (isOrderSuccess) {
            toast.success(orderData?.message, { id: orderId });
            if (orderData?.data) {
                console.log(orderData?.data)
                window.location.href = orderData.data;
            };
        };

        if (isOrderError && orderError) {
            toast.error(JSON.stringify(orderError), { id: orderId });
        };

    }, [isOrderError, orderError, isOrderSuccess, orderData, orderLoading]);



    if (isLoading) {
        return <div>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    }

    const orderId = 'orderId'

    const handelBuyCar = async () => {
        if (!product) return;

        await createOrder({ carId: product._id, quantity: 1 });
        console.log(product)
    };



    return (
        <div className="w-[90%] h-[400px] mx-auto md:flex gap-3">
            <div className="md:w-[50%] flex items-center bg-gray-400 rounded-2xl">
                <img className="w-[65%] mx-auto h-[350px] rounded-2xl" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww" alt="" />
            </div>

            <div className="md:w-[35%] text-start p-4 rounded-2xl bg-gray-200 space-y-2">
                <h2 className="text-3xl font-semibold">{product?.brand}: {product?.model}</h2>
                <h2 className="text-xl font-medium">Category: {product?.category} </h2>

                <div className="divider"></div>
                <h2 className="font-medium">Description: <span className="text-base text-black/50 ">{product?.description}</span> </h2>

                <div className="divider"></div>
                <h2 className="text-xl font-medium">Price: {product?.price} </h2>
                <h2 className="text-xl font-medium">Quantity: {product?.quantity} </h2>
                <button onClick={handelBuyCar} className="btn w-[150px] mt-3 bg-[#03995B] text-white hover:bg-gray-400 hover:text-black">BUY</button>
            </div>
        </div>
    )
}
