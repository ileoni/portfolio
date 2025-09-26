import type { PropsWithChildren } from "react"

export const Row = ({ children }: PropsWithChildren) => {
    return (
        <div className="p-5 grid sm:grid-flow-col place-content-center gap-5 bg-base-500 dark:bg-base-300 rounded-lg">
            { children }
        </div>
    )
}