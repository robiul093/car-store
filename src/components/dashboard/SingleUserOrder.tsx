import { toast } from "sonner";
import { useGetSingleUserOrderQuery } from "../../redux/features/order/orderApi"
import { useAppSelector } from "../../redux/hook";
import { TProduct } from "./admin/ManageOrder";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function SingleUserOrder() {

    const userId = useAppSelector((state) => state.auth.user?.iat)
    const { isLoading, isSuccess, data, error } = useGetSingleUserOrderQuery(userId);

    // if (isLoading) {
    //     return <div>
    //         <span className="loading loading-ring loading-md"></span>
    //         <span className="loading loading-ring loading-lg"></span>
    //         <span className="loading loading-ring loading-xl"></span>
    //     </div>
    // };
    // console.log(data)

    const userToastId = 'toastId';
    if (isLoading) {
        toast.loading('Fetching data.....', { id: userToastId })
    };

    if (isSuccess) {
        toast.success(data.message, { id: userToastId });
    };

    if (error) {
        if ((error as FetchBaseQueryError)?.data) {
            const errorData = (error as FetchBaseQueryError).data as { message?: string };
            toast.error(errorData?.message || "Something went wrong", { id: userToastId });
            // console.log(errorData.message)
        } else {
            toast.error("An unknown error occurred", { id: userToastId });
        }
    }
    return (
        <div>
            <h2 className="text-start text-2xl mb-3">Total Order: {data?.data?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User Id</th>
                            <th>User Status</th>
                            <th>Total Price</th>
                            {/* <th>Change Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((user: TProduct, idx: number) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{user?.user}</td>
                                <td>{user?.status}</td>
                                <td>{user?.totalPrice}</td>
                                {/* <td onClick={() => handelStatusChange(user)} className={`btn ${user?.isActive ? 'bg-green-400' : 'bg-red-400'}`}>{user?.isActive ? 'Active' : 'InActive'}{statusLoading ? <span className="loading loading-spinner loading-sm"></span> : ''}</td> */}
                                {/* <td className="btn"> {user?.isActive ? 'Active' } </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
