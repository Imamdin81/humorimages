import { Navigate, Outlet} from "react-router-dom"
const PrivateComponet=()=>{
    const auth=localStorage.getItem('user')
return auth?<Outlet/>: <Navigate to ='/humor/hilariously-dark-comics-by-andy/'/>
}
export default PrivateComponet