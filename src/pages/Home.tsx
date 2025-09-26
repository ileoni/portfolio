import { createRef, useEffect, useRef } from "react";
import { NavLink } from "react-router";

import { useConfigs } from "../hooks/useConfigs";
import {
    MyImage,
    Javascript,
    Php,
    Typescript,
    React,
    Tailwindcss,
    Css,
    Html,
    Express,
    Node,
    Laravel,
    Npm,
    Redis,
    Mysql,
    Vite,
    Github,
} from "../configs/images";
import Container from "../components/Container";
import { useGsapOpacity } from "../hooks/useGsapOpacity";
import { useGsap } from "../hooks/useGsap";

function Home() {
    const [ left, right ] = useGsap(2);
    const [ language, front, back, other ] = useGsapOpacity(4);

    const { main, about, skill } = useConfigs("pages.home");

    return (
        <>
            <Container className="h-container grid sm:grid-flow-col content-center sm:justify-between items-center gap-y-5">
                <div className="grid place-content-center">
                    <h2 className="text-center sm:text-start">{main.title}</h2>
                    <h1 className="font-bold text-center">{main.subtitle}</h1>
                </div>
                <img src={MyImage} alt="imagem do desenvolvedor" className="justify-self-center"/>
            </Container>
            <Container className="overflow-hidden px-5 sm:px-0 py-10 grid sm:grid-flow-col justify-between gap-y-5">
                <div ref={left} className="-translate-x-full px-2 text-center sm:text-left sm:border-l">
                    <h4 className="py-2 sm:py-0">{about.left.title}</h4>
                    <p className="text-12 sm:text-16">{about.left.paragraph}</p>
                </div>
                <div ref={right} className="translate-x-full px-2 text-center sm:text-right sm:border-r">
                    <h4 className="py-2 sm:py-0">{about.right.title}</h4>
                    <p className="text-12 sm:text-16">{about.right.paragraph}</p>
                </div>
            </Container>
            <Container className="overflow-hidden px-5 sm:px-0 py-10 grid gap-5">
                <h4 className="text-center sm:text-start">{skill.title}</h4>
                <div className="grid gap-5">
                    <div ref={language} className="opacity-0 p-5 grid gap-5 bg-base-500 dark:bg-base-300 rounded-md text-base-100">
                        <p className="text-12 sm:text-16">{skill.row.language.title}</p>
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
                    <div ref={front} className="opacity-0 p-5 grid gap-5 bg-base-500 dark:bg-base-300 rounded-md text-base-100">
                        <p className="text-12 sm:text-16">{skill.row.frontend.title}</p> 
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
                    <div ref={back} className="opacity-0 p-5 grid gap-5 bg-base-500 dark:bg-base-300 rounded-md text-base-100">
                        <p className="text-12 sm:text-16">{skill.row.backend.title}</p> 
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
                    <div ref={other} className="opacity-0 p-5 grid gap-5 bg-base-500 dark:bg-base-300 rounded-md text-base-100">
                        <p className="text-12 sm:text-16">{skill.row.others.title}</p> 
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