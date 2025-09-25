export const Palette = ({ colors }: { colors: string[] }) => {
    return (
        <div className="grid grid-cols-5 gap-5 justify-items-center">
            {colors?.map(color => (
                <span
                    className="size-8 rounded-lg drop-shadow-lg drop-shadow-slate-400 dark:drop-shadow-slate-600"
                    style={{ background: `#${color}` }}
                ></span>
            ))}
        </div>
    );
}

export default Palette;