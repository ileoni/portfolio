import Container from "../components/Container";
import Palette from "../components/Palette";
import { Row } from "../components/Row";
import { useConfigs } from "../hooks/useConfigs";
import figmaPokedex from "../assets/project-figma-pokedex.png";
import { NavLink } from "react-router";
import { Figma } from "../components/Figma";
import { Github } from "../components/Github";

function Pokedex() {
    const { page, link } = useConfigs("pages.projects");
    const { pokedex } = page;

    return (
        <>
        <Container className="px-8 sm:px-0 py-5 sm:py-10">
            <div className="py-5 sm:py-0 grid sm:grid-flow-col justify-between items-baseline">
                <h4>{ pokedex.title }</h4>
                <div className="grid grid-flow-col gap-5">
                    <NavLink to={link.pokedex.link.figma} target="_blank">
                        <span className="grid grid-flow-col items-center gap-2">
                            <small className="uppercase">protótipo</small>
                            <Figma className="w-4 stroke-base-100 dark:stroke-base-500"/>
                        </span>
                    </NavLink>
                    <NavLink to={link.pokedex.link.github} target="_blank">
                        <span className="grid grid-flow-col items-center gap-2">
                            <small className="uppercase">github page</small>
                            <Github className="w-4 stroke-base-100 dark:stroke-base-500"/>
                        </span>
                    </NavLink>
                </div>
            </div>
            <p className="text-center sm:text-start text-12 sm:text-16">{ pokedex.description }</p>
        </Container>
        <Container className="px-8 sm:px-0 grid gap-5">
            <h5 className="uppercase text-center">tipografia</h5>
            <Row>
                <span className="grid grid-flow-col items-center gap-5 font-normal">
                    <span className="text-50">Aa</span> Cairo regular
                </span>
                <span className="grid grid-flow-col items-center gap-5 font-semibold">
                    <span className="text-50">Aa</span> Cairo semibold
                </span>
            </Row>
            <h5 className="uppercase text-center">mobile</h5>
            <Row>
                <div className="grid sm:grid-flow-col justify-items-center sm:justify-items-normal items-baseline gap-5">
                    <span className="text-35">h1 - 35</span>
                    <span className="text-30">h2 - 30</span>
                    <span className="text-25">h3 - 25</span>
                    <span className="text-20">h4 - 20</span>
                    <span className="text-16">h5 - 16</span>
                    <span className="text-12">h6 - 12</span>
                </div>
            </Row>
            <h5 className="uppercase text-center">Desktop</h5>
            <Row>
                <div className="grid sm:grid-flow-col justify-items-center sm:justify-items-normal items-baseline gap-5">
                    <span className="text-50">h1 - 50</span>
                    <span className="text-40">h2 - 40</span>
                    <span className="text-30">h3 - 30</span>
                    <span className="text-25">h4 - 25</span>
                    <span className="text-20">h5 - 20</span>
                    <span className="text-16">h6 - 16</span>
                </div>
            </Row>
            <h5 className="uppercase text-center">cores base</h5>
            <Row>
                <Palette colors={pokedex.base}/>
            </Row>
            <h5 className="uppercase text-center">Cores primarias</h5>
            <Row>
                <Palette colors={pokedex.primaries}/>
            </Row>
            <h5 className="uppercase text-center">Cores das tipagens</h5>
            <Row>
                <Palette colors={pokedex.types}/>
            </Row>
        </Container>
        <Container className="py-10 grid justify-center">
            <img src={figmaPokedex} alt="" className="rounded-xl"/>
        </Container>
        </>
    )
}

export default Pokedex;