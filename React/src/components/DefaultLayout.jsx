import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/contextProvider"

export default function DefaultLayout () {

    const {user, token} = useStateContext()

    if(!token) {
        return <Navigate to={"/login"}/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    )

}