import {NavItemType, skillType} from "./type";
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram,
    AiOutlineFacebook,
} from "react-icons/ai";
import {RiTelegramLine} from "react-icons/ri";

export const NAV_ITEMS: Array<NavItemType> = [
    // {
    //     label: "Home",
    //     page: "home",
    // },

];

export const SOCIAL_MEDIA = [
    {
        link: "https://github.com/devolutionary-wizard",
        icon: AiOutlineGithub,
    },
    {
        link: "https://www.linkedin.com/in/seanglay-ly-675192266/",
        icon: AiOutlineLinkedin,
    },
    {
        link: "https://web.facebook.com/li.seanglay.2k/",
        icon: AiOutlineFacebook,
    },
    {
        link: "https://www.instagram.com/scarysnoopy/",
        icon: AiOutlineInstagram,
    },
    {
        link: "https://t.me/SeangLayz",
        icon: RiTelegramLine,
    },
];
