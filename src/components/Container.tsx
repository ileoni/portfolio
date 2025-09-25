import type { HTMLAttributes } from "react";

function Container(props: HTMLAttributes<HTMLDivElement>) {
    const { children, className } = props;
    return (
        <div className={`max-w-5xl m-auto ${className}`}>
            { children }
        </div>
    )
}

export default Container;