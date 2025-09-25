import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import WebLayout from "./layouts/WebLayout";

const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                Component: WebLayout,
                children: [
                    {
                        index: true,
                        Component: Home
                    },
                    {
                        path: "projetos",
                        Component: Projects,
                        children: [
                            {
                                path: "portfolio",
                                Component: Portfolio
                            },
                            {
                                path: "pokedex",
                                Component: Pokedex
                            },
                        ]
                    },
                ]
            }
        ]
    }
], {
    basename: "/portfolio/"
})

export default router;