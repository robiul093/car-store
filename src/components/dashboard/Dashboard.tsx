import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook"

export default function Dashboard() {

    const user = useAppSelector((state) => state.auth.user);
    const defaultRoute = user?.role === 'admin' ? "/dashboard/admin/manage-users" : "/dashboard/user/orders"

    return <Navigate to={defaultRoute} replace />
    return (
        <div>
            this is dashboard
        </div>
    )
};
