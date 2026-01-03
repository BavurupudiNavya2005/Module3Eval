import {Navigate} from "react-router-dom"
import { getRole } from "..utils/auth";

export default function
ProctectedRoute({children,role}) {
    const userRole = getRole();
    if (!userRole || userRole !== role){
        return <Navigate to = "/" />;
    }
    return children;
}