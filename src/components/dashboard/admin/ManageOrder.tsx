import { toast } from "sonner";
import { useManageAllOrderQuery } from "../../../redux/features/admin/adminApi"

export type TProduct = {
    car: string,
    createdAt: string,
    email: string,
    quantity: number,
    status: string,
    totalPrice: number,
    updatedAt: string,
    __v: number,
    _id: string,
}
export default function ManageOrder() {

    const { data, isLoading, isSuccess, isError, error } = useManageAllOrderQuery(undefined);

    const userToastId = 'toastId';
    if (isLoading) {
        toast.loading('Fetching data.....', { id: userToastId })
    };

    if (isSuccess) {
        toast.success(data.message, { id: userToastId });
    };

    if (isError) {
        toast.error(JSON.stringify(error?.data?.message), { id: userToastId })
    };

    console.log(data);
    return (
        <div>
            <h2 className="text-start text-2xl mb-3">Total Order: {data?.data?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>User Status</th>
                            <th>Total Price</th>
                            {/* <th>Change Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((user: TProduct, idx: number) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{user?.email}</td>
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
