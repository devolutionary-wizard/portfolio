import { FaReact } from "react-icons/fa";
import { TbBrandGolang, TbBrandNextjs } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { SiDocker, SiLinux, SiPhp } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { LiaAws, LiaNodeJs } from "react-icons/lia";

export const TECHNOLOGIES = [
    {
        category: "Mobile",
        items: [
            { name: "Flutter", icon: RiFlutterFill },
            { name: "React Native", icon: FaReact }
        ]
    },
    {
        category: "Front-end",
        items: [
            { name: "React", icon: FaReact },
            { name: "Next", icon: TbBrandNextjs },
        ]
    },
    {
        category: "Back-end",
        items: [
            { name: "Node", icon: LiaNodeJs },
            { name: 'PHP', icon: SiPhp },
            { name: 'Golang', icon: TbBrandGolang },
            { name: 'Python', icon: DiPython }
        ]
    },
    {
        category: "DevOps",
        items: [
            { name: "Linux", icon: SiLinux },
            { name: 'Docker', icon: SiDocker },
            { name: "AWS", icon: LiaAws },
        ]
    }
];
