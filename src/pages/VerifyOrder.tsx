import { Link, useSearchParams } from "react-router-dom";
import { useVerifyOrderQuery } from "../redux/features/order/orderApi";


interface OrderData {
    id: number;
    order_id: string;
    currency: string;
    amount: number;
    payable_amount: number;
    discsount_amount: number | null;
    disc_percent: number;
    received_amount: string;
    usd_amt: number;
    usd_rate: number;
    is_verify: number;
    card_holder_name: string | null;
    card_number: string | null;
    phone_no: string;
    bank_trx_id: string;
    invoice_no: string;
    bank_status: string;
    customer_order_id: string;
    sp_code: string;
    sp_message: string;
    name: string;
    email: string;
    address: string;
    city: string;
    value1: string | null;
    value2: string | null;
    value3: string | null;
    value4: string | null;
    transaction_status: string | null;
    method: string;
    date_time: string;
}

export default function VerifyOrder() {

    const [searchParams] = useSearchParams();

    const { isLoading, data } = useVerifyOrderQuery(
        searchParams.get("order_id"),
        {
            refetchOnMountOrArgChange: true,
        }
    );
// console.log(data)
    if (isLoading) {
        return <div>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    }

    const orderData: OrderData = data?.data?.[0];


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Order Verification</h1>
            <div className="grid gap-6 md:grid-cols-2">
                {/* Order Details */}
                <div className="card bg-base-100 shadow-lg p-4">
                    <div className="card-body">
                        <h2 className="card-title">Order Details</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <span className="font-semibold">Order ID:</span>
                            <span>{orderData?.order_id}</span>
                            <span className="font-semibold">Amount:</span>
                            <span>
                                {orderData?.currency} {orderData?.amount?.toFixed(2)}
                            </span>
                            <span className="font-semibold">Status:</span>
                            <span
                                className={`badge ${orderData?.bank_status === "Success"
                                    ? "badge-success"
                                    : "badge-error"
                                    }`}
                            >
                                {orderData?.bank_status}
                            </span>
                            <span className="font-semibold">Date:</span>
                            <span>{new Date(orderData?.date_time)?.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Payment Information */}
                <div className="card bg-base-100 shadow-lg p-4">
                    <div className="card-body">
                        <h2 className="card-title">Payment Information</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <span className="font-semibold">Method:</span>
                            <span>{orderData?.method}</span>
                            <span className="font-semibold">Transaction ID:</span>
                            <span>{orderData?.bank_trx_id}</span>
                            <span className="font-semibold">Invoice No:</span>
                            <span>{orderData?.invoice_no}</span>
                            <span className="font-semibold">SP Code:</span>
                            <span>{orderData?.sp_code}</span>
                            <span className="font-semibold">SP Message:</span>
                            <span>{orderData?.sp_message}</span>
                        </div>
                    </div>
                </div>

                {/* Customer Information */}
                <div className="card bg-base-100 shadow-lg p-4">
                    <div className="card-body">
                        <h2 className="card-title">Customer Information</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <span className="font-semibold">Name:</span>
                            <span>{orderData?.name}</span>
                            <span className="font-semibold">Email:</span>
                            <span>{orderData?.email}</span>
                            <span className="font-semibold">Phone:</span>
                            <span>{orderData?.phone_no}</span>
                            <span className="font-semibold">Address:</span>
                            <span>{orderData?.address}</span>
                            <span className="font-semibold">City:</span>
                            <span>{orderData?.city}</span>
                        </div>
                    </div>
                </div>

                {/* Verification Status */}
                <div className="card bg-base-100 shadow-lg p-4">
                    <div className="card-body">
                        <h2 className="card-title">Verification Status</h2>
                        <div className="flex items-center gap-2 text-lg">
                            {orderData?.is_verify === 1 ? (
                                <span className="text-green-500 font-bold">✔ Verified</span>
                            ) : (
                                <span className="text-yellow-500 font-bold">⚠ Not Verified</span>
                            )}
                        </div>
                    </div>
                    <div className="card-actions p-4">
                        <Link to="/dashboard/user/orders" className="btn btn-primary w-full">
                            View Orders
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
