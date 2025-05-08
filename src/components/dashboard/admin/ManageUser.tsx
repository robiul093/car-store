import { toast } from "sonner";
import { useGetAllUserQuery, useManageUserStatusMutation } from "../../../redux/features/admin/adminApi"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function ManageUser() {

    type TDbUser = {
        createdAt: string,
        email: string,
        isActive: boolean,
        name: string,
        password: string,
        role: string,
        updatedAt: string,
        __v: number,
        _id: string,
    }

    const { isLoading, isSuccess, error, data, refetch } = useGetAllUserQuery(undefined);
    const [updateStatus,
        { isLoading: statusLoading, isSuccess: statusSuccess, error: statusError }
    ] = useManageUserStatusMutation();
    // console.log(data)

    const users = data?.data;
    const userToastId = 'toastId';
    const statusToastId = 'statusToastId';
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
        } else {
            toast.error("An unknown error occurred", { id: userToastId });
        }
    }

    // update status toast
    if (statusLoading) {
        // console.log(statusLoading)
        toast.loading('Updating data.....', { id: statusToastId })
    };

    if (statusSuccess) {
        toast.success(data.message, { id: statusToastId })
    };

    // if (isStatusError) {
    //     toast.error(JSON.stringify(statusError?.data?.message), { id: statusToastId })
    // };

    if (statusError) {
        if ((statusError as FetchBaseQueryError)?.data) {
            const errorData = (statusError as FetchBaseQueryError).data as { message?: string };
            toast.error(errorData?.message || "Something went wrong", { id: statusToastId });
        } else {
            toast.error("An unknown error occurred", { id: statusToastId });
        }
    }


    const handelStatusChange = (user: TDbUser) => {
        updateStatus(user);
        refetch();
    };


    return (
        <div>
            <h2 className="text-start">This is manage user page: {data?.data?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>isActive</th>
                            {/* <th>Change Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user: TDbUser, idx: number) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.role}</td>
                                <td onClick={() => handelStatusChange(user)} className={`btn w-24 ${user?.isActive ? 'bg-green-400' : 'bg-red-400'}`}>{user?.isActive ? 'Active' : 'InActive'}{statusLoading ? <span className="loading loading-spinner loading-sm"></span> : ''}</td>
                                {/* <td className="btn"> {user?.isActive ? 'Active' } </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
