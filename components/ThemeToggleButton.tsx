import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {domAnimation, LazyMotion, m} from "framer-motion";
import {animate, exit, initial, transition} from "utils";
import {RiMoonFill, RiSunLine} from "react-icons/ri";


const ThemeToggleButton = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme, systemTheme} = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;


    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <LazyMotion features={domAnimation}>
            <m.button
                className="bg-slate-100 p-2 rounded-xl"
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}
            >
                {currentTheme === "dark" ? <RiSunLine size={25} color="black"/> : <RiMoonFill size={25}/>}
            </m.button>
        </LazyMotion>
    );
};

export default ThemeToggleButton;
