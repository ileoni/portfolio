import { NavLink, Outlet } from "react-router"

import Header from "../components/Header"
import Logo from "../assets/home-page-logo.svg"
import ThemeProvider from "../contexts/ThemeProvider"
import { Figma } from "../components/Figma"
import { Linkedin } from "../components/Linkedin"
import { Github } from "../components/Github"
import { useConfigs } from "../hooks/useConfigs"

function WebLayout() {
    const { figma, linkedin, github } = useConfigs("header")

    return (
        <>
        <Header className='h-20 px-4 sm:px-0'>
            <div className='grid grid-flow-col justify-between items-center'>
            <div className='grid grid-flow-col items-center gap-4'>
                <NavLink to="/">
                    <img src={Logo} alt="logotipo" className="w-14"/>
                </NavLink>
                <ThemeProvider.Toggle />
            </div>
            <nav>
                <ul className='grid grid-flow-col gap-4'>
                <li>
                    <NavLink to={figma.link} className="grid grid-flow-col items-center gap-5">
                        <Figma className="stroke-base-100 dark:stroke-base-500"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={linkedin.link} target="_blank">
                        <Linkedin className="stroke-base-100 dark:stroke-base-500"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={github.link} target="_blank">
                        <Github className="stroke-base-100 dark:stroke-base-500"/>
                    </NavLink>
                </li>
                </ul>
            </nav>
            </div> 
        </Header>
        <Outlet />
        </>
    )
}

export default WebLayout;