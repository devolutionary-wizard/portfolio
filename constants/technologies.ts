import {IoLogoJavascript, IoLogoNodejs} from "react-icons/io";
import {FaReact} from "react-icons/fa";
import {TbBrandNextjs, TbBrandTypescript} from "react-icons/tb";
import {RiFlutterFill} from "react-icons/ri";
import {SiDigitalocean, SiDocker, SiGit, SiLinux} from "react-icons/si";
import {DiPhp, DiPython} from "react-icons/di";
import {BiLogoGoLang} from "react-icons/bi";
import {LiaAws} from "react-icons/lia";

export const TECHNOLOGIES = [
    {
        category: "Mobile",
        items: [
            {name: "Flutter", icon: RiFlutterFill},
            {name: "React Native", icon: FaReact}
        ]
    },
    {
        category: "Front-end",
        items: [
            {name: "JS", icon: IoLogoJavascript},
            {name: "TS", icon: TbBrandTypescript},
            {name: "React", icon: FaReact},
            {name: "Next", icon: TbBrandNextjs},
        ]
    },
    {
        category: "Back-end",
        items: [
            {name: "Node", icon: IoLogoNodejs},
            {name: 'PHP', icon: DiPhp},
            {name: 'Golang', icon: BiLogoGoLang},
            {name: 'Python', icon: DiPython}
        ]
    },
    {
        category: "DevOps",
        items: [
            {name: "Linux", icon: SiLinux},
            {name: 'Github', icon: SiGit},
            {name: 'Docker', icon: SiDocker},
            {name: "AWS", icon: LiaAws},
            {name: 'Digital ocean', icon: SiDigitalocean}
        ]
    }
];
