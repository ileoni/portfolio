import Container from "../components/Container";

import { useConfigs } from "../hooks/useConfigs";
import Image from "../assets/home-page.png"
import Javascript from "../assets/js.svg"
import Php from "../assets/php.svg"
import Typescript from "../assets/typescript.svg"
import React from "../assets/react.svg"
import Tailwindcss from "../assets/tailwind_css_symbol.svg"
import Css from "../assets/css_3.svg"
import Html from "../assets/html_5.svg"
import Express from "../assets/express.svg"
import Node from "../assets/node_js.svg"
import Laravel from "../assets/laravel.svg"
import Npm from "../assets/npm.svg"
import Redis from "../assets/redis.svg"
import Mysql from "../assets/mysql.svg"
import Vite from "../assets/vite.svg"
import Github from "../assets/github.svg"
import { NavLink } from "react-router";

function Home() {
    const { main, about, skill } = useConfigs("pages.home");

    return (
        <>
            <Container className="py-10 grid grid-flow-col justify-between">
                <div className="grid place-content-center">
                    <h2>{main.title}</h2>
                    <h1 className="font-bold">{main.subtitle}</h1>
                </div>
                <img src={Image} alt="imagem do desenvolvedor" />
            </Container>
            <Container className="py-10 grid grid-flow-col justify-between">
                <div className="px-2 border-l">
                    <h4>{about.left.title}</h4>
                    <p>{about.left.paragraph}</p>
                </div>
                <div className="px-2 text-right border-r">
                    <h4>{about.right.title}</h4>
                    <p>{about.right.paragraph}</p>
                </div>
            </Container>
            <Container className="py-10 grid gap-5">
                <h4>{skill.title}</h4>
                <div className="grid gap-5">
                    <div className="p-5 grid gap-5 bg-base-500 dark:bg-base-300 rounded-md text-base-100">
                        <p>{skill.row.language.title}</p>
                        <ul className="grid grid-flow-col justify-start items-center gap-2">
                            <li>
                                <NavLink to={skill.row.language.link.javascript} target="_blank">
                                    <img src={Javascript} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.language.link.typecript} target="_blank">
                                    <img src={Typescript} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.language.link.php} target="_blank">
                                    <img src={Php} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 grid gap-5 bg-base-500 dark:bg-base-300 rounded-md text-base-100">
                        <p>{skill.row.frontend.title}</p> 
                        <ul className="grid grid-flow-col justify-start items-center gap-2">
                            <li>
                                <NavLink  to={skill.row.frontend.link.react} target="_blank">
                                    <img src={React} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.frontend.link.tailwindcss} target="_blank">
                                    <img src={Tailwindcss} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.frontend.link.css} target="_blank">
                                    <img src={Css} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.frontend.link.html} target="_blank">
                                    <img src={Html} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 grid gap-5 bg-base-500 dark:bg-base-300 rounded-md text-base-100">
                        <p>{skill.row.backend.title}</p> 
                        <ul className="grid grid-flow-col justify-start items-center gap-2">
                            <li>
                                <NavLink  to={skill.row.backend.link.express} target="_blank">
                                    <img src={Express} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.backend.link.node} target="_blank">
                                    <img src={Node} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.backend.link.laravel} target="_blank">
                                    <img src={Laravel} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 grid gap-5 bg-base-500 dark:bg-base-300 rounded-md text-base-100">
                        <p>{skill.row.others.title}</p> 
                        <ul className="grid grid-flow-col justify-start items-center gap-2">
                            <li>
                                <NavLink  to={skill.row.others.link.npm} target="_blank">
                                    <img src={Npm} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.others.link.redis} target="_blank">
                                    <img src={Redis} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.others.link.mysql} target="_blank">
                                    <img src={Mysql} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.others.link.vite} target="_blank">
                                    <img src={Vite} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={skill.row.others.link.github} target="_blank">
                                    <img src={Github} alt="" className="grayscale-100 hover:grayscale-0 transition-all cursor-pointer"/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Home;