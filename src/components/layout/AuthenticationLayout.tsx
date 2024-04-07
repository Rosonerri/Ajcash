import { Outlet } from "react-router-dom"
import Header from "../static/Header"
import Footer from "../static/Footer"

const AuthenticationLayout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AuthenticationLayout