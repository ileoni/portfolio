import { useConfigs } from "../hooks/useConfigs";
import Container from "../components/Container";
import Portfolio from "../assets/portfolio.png"
import Pokedex from "../assets/pokedex.png"
import { NavLink, Outlet } from "react-router";

function Projects() {
    const { projects } = useConfigs("pages");

    return (
        <>
            <Container className="px-8 sm:px-0 py-5 sm:py-10">
                <h4>{ projects.title }</h4>
            </Container>
            <Container className="px-8 sm:px-0 py-5 sm:py-10">
                <div className="py-5 bg-base-500 dark:bg-base-300 rounded-lg">
                    <div className="px-5 pb-5 text-base-100">
                        <p>Selecione o card</p>
                    </div>
                    <div className="px-5 grid sm:grid-cols-4 gap-5 ">
                        <div>
                            <NavLink to={projects.link.portfolio.slug}>
                                <img src={Portfolio} alt="" className="rounded-lg"/>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={projects.link.pokedex.slug}>
                                <img src={Pokedex} alt="" className="rounded-lg"/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Container>
            <Outlet />
        </>
    )
}

export default Projects;