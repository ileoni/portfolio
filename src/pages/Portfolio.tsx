import Container from "../components/Container";
import Palette from "../components/Palette";
import { Row } from "../components/Row";
import { useConfigs } from "../hooks/useConfigs";
import figmaPortfolio from "../assets/project-figma-portfolio.png";
import { NavLink } from "react-router";
import { Github } from "../components/Github";
import { Figma } from "../components/Figma";

function Portfolio() {
    const { page, link } = useConfigs("pages.projects");
    const { portfolio } = page;

    return (
        <>
        <Container className="px-8 sm:px-0 py-5 sm:py-10">
            <div className="py-5 sm:py-0 grid sm:grid-flow-col justify-between items-baseline">
                <h4>{ portfolio.title }</h4>
                <div className="grid grid-flow-col gap-5">
                    <NavLink to={link.portfolio.link.figma} target="_blank">
                        <span className="grid grid-flow-col items-center gap-2">
                            <small className="uppercase">protótipo</small>
                            <Figma className="w-4 stroke-base-100 dark:stroke-base-500"/>
                        </span>
                    </NavLink>
                    <NavLink to={link.portfolio.link.github} target="_blank">
                        <span className="grid grid-flow-col items-center gap-2">
                            <small className="uppercase">github page</small>
                            <Github className="w-4 stroke-base-100 dark:stroke-base-500"/>
                        </span>
                    </NavLink>
                </div>
            </div>
            <p className="text-center sm:text-start text-12 sm:text-16">{ portfolio.description }</p>
        </Container>
        <Container className="px-8 sm:px-0 grid gap-5">
            <h5 className="uppercase text-center">tipografia</h5>
            <Row>
                <span className="grid grid-flow-col items-center gap-5 font-normal text-base-100">
                    <span className="text-50">Aa</span> Cairo regular
                </span>
                <span className="grid grid-flow-col items-center gap-5 font-semibold text-base-100">
                    <span className="text-50">Aa</span> Cairo semibold
                </span>
            </Row>
            <h5 className="uppercase text-center">mobile</h5>
            <Row>
                <div className="grid sm:grid-flow-col justify-items-center sm:justify-items-normal items-baseline gap-5 text-base-100">
                    <span className="text-30">h1 - 30</span>
                    <span className="text-25">h2 - 25</span>
                    <span className="text-20">h3 - 20</span>
                    <span className="text-16">h4 - 16</span>
                    <span className="text-12">h5 - 12</span>
                </div>
            </Row>
            <h5 className="uppercase text-center">Desktop</h5>
            <Row>
                <div className="grid sm:grid-flow-col justify-items-center sm:justify-items-normal items-baseline gap-5 text-base-100">
                    <span className="text-40">h1 - 40</span>
                    <span className="text-35">h2 - 30</span>
                    <span className="text-30">h3 - 25</span>
                    <span className="text-25">h4 - 20</span>
                    <span className="text-16">h5 - 16</span>
                </div>
            </Row>
            <h5 className="uppercase text-center">cores base</h5>
            <Row>
                <Palette colors={portfolio.base}/>
            </Row>
        </Container>
        <Container className="px-5 sm:px-0 py-5 sm:py-10">
            <img src={figmaPortfolio} alt="" className="w-full rounded-xl drop-shadow-sm"/>
        </Container>
        </>
    )
}

export default Portfolio;