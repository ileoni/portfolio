import { createContext, useContext, useEffect, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from "react";

import { Moon, Sun } from "lucide-react";

type ThemeContext = { theme: string, setTheme: Dispatch<SetStateAction<string>> }


export const ThemeContext = createContext({} as ThemeContext);

const html = document.querySelector("html")!;

const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<string>(() => {
        const storedTheme = localStorage.getItem('apptheme');
        return storedTheme || 'light';
    });
    
    useEffect(() => {
        localStorage.setItem('apptheme', theme);
        html.dataset.theme = theme;
    }, [theme])

    const state = {
        theme,
        setTheme
    }
    
    return <ThemeContext.Provider value={state}>{ children }</ThemeContext.Provider>
}

ThemeProvider.Toggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button onClick={() => setTheme(() => theme.includes("light") ? "dark": "light")}>
            {theme.includes("light") ? <Sun/>: <Moon/>}
        </button>
    )
}

export default ThemeProvider;