import type { HTMLAttributes } from "react";
import Container from "./Container";

function Header(props: HTMLAttributes<HTMLHeadElement>) {
    const { children } = props;

    return (
        <header {...props}>
            <Container className="h-full grid items-center">
                { children }
            </Container>
        </header>
    )
}

export default Header;