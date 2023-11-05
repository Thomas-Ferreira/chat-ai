import { createBrowserRouter } from "react-router-dom";
import ChatBot from "../components/chatBot";
import Home from "../screen/home";
import ImgGenerator from "../components/imgGenerator";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/chatBot",
        element: <ChatBot />
    },
    {
        path: "/imageGenerator",
        element: <ImgGenerator />
    }

])

export default router