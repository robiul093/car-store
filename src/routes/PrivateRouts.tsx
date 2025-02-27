import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook"


export default function PrivateRouts({ children }: { children: React.ReactNode }) {

    const user = useAppSelector((state) => state.auth.user);
    if (!user) {
        return <Navigate to={'/login'} />
    }
    
    return children;
}
