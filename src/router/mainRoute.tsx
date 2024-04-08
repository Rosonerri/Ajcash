

import { createBrowserRouter } from "react-router-dom"
import AuthenticationLayout from "../components/layout/AuthenticationLayout"
import LandingScreen from "../pages/auth/landing/LandingScreen"
import AuthLayout from "../components/layout/AuthLayout"
import Signin from "../pages/auth/signin/Signin"
import Register from "../pages/auth/register/Register"
import Dashboard from "../pages/home/dashboard/Dashboard"
import AccountLayout from "../components/layout/AccountLayout"
import Pay from "../pages/home/pay/Pay"
import Send from "../pages/home/send/Send"
import Account from "../pages/home/account/Account"
import Budget from "../pages/home/budget/Budget"
import Card from "../pages/home/card/Card"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <AuthenticationLayout />,
        children: [
            {
                index: true,
                element: <LandingScreen />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Signin />
            },
            {
                path: "/auth/signup",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <AccountLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/dashboard/pay",
                element: <Pay />
            },
            {
                path: "/dashboard/send",
                element: <Send />
            },
            {
                path: "/dashboard/account",
                element: <Account />
            },
            {
                path: "/dashboard/budget",
                element: <Budget />
            },
            {
                path: "/dashboard/card",
                element: <Card />
            },
        ]
    }
])