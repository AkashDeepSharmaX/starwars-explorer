import { Outlet } from "react-router"
import Header from "./Header"


const Layout = () => {
    return (
        <main>
            <div className="bg-[url('/3532041.jpg')] bg-fixed bg-cover bg-center">

            <Header />
            <Outlet />
            </div>
        </main>
    )
}

export default Layout
