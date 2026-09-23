import { createBrowserRouter } from "react-router";

import Layout from "../components/Layout"

import ProductList from "../components/ProductList";
import Checkout from "../components/Checkout"

import { productLoader } from "../loaders/productLoader";
import { requireAuth } from "../loaders/authLoader";
import Login from "../components/Login";
import Logup from "../components/Logup";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            loader: requireAuth,
            children: [
                {
                    index: true,
                    element: <ProductList />,
                    loader: productLoader
                },
                {
                    path: "checkout",
                    element: <Checkout />
                },
            ]
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "logup",
            element: <Logup />
        }

    ]
)

export default router
