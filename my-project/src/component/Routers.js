
import Home from "./Home";
import Topic from "./Topic";
import Container from "./Container";
import Login from "../login/Login";

const Routers = [
    {
        path: "/product",
        element: <Container/>,
        name: "Product",
    },
    {
        path: "/Home",
        element: <Home/>,
        name: "Home",
    },
    {
        path: "/Topic",
        element: <Topic/>,
        name: "Topic",
    },
    {
        path: "/Login",
        element: <Login/>,
        name: "Login",
    }
];

export default Routers;
