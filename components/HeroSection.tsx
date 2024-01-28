"use client"; // this is a client component
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {WelcomeAnimation} from "@/components/IntroAnimation";
import {Link} from "react-scroll/modules";
import {domAnimation, LazyMotion, useInView} from "framer-motion";
import {useMediaQuery} from "@/utils";
import {useScrollTo} from "@/hooks";

const HeroSection = () => {
    const ref = useRef(null);
    const introRef = useRef(null);
    const isInView = useInView(ref, {once: true});
    const {scrollToEl} = useScrollTo();
    const isTabletUp = useMediaQuery("min-width: 768px");

    let [count, setCount] = useState(0);
    const [text] = useState([
        "build Flutter apps for Android/iOS",
        "convert design into modern UI",
        "build interactive UI using React",
        "develop websites using Next.js"
    ]);

    const onClick = (e: any) => scrollToEl(e);

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(count + 1);

            if (count === 3) {
                setCount(0);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <LazyMotion features={domAnimation}>
            <section id="intro" className="section" ref={introRef}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
                    <div className="py-5 md:py-10">
                        <h1
                            ref={ref}
                            className="text-3xl md:text-5xl xl:text-6xl font-bold"
                            style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <p>
                                Hi, I&apos;m <mark>Vasile</mark> a <mark>passionate</mark> software developer.
                            </p>
                        </h1>

                        <div className="mt-3 relative flex flex-col overflow-hidden">
                            <p
                                ref={ref}
                                className="text-[17px] md:text-2xl transform-none opacity-100"
                                style={{
                                    transform: isInView ? "none" : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                            >
                                I
                                <span
                                    className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                                    style={{
                                        top:
                                            count === 0
                                                ? "0"
                                                : count === 1
                                                    ? "-100%"
                                                    : count === 2
                                                        ? "-200%"
                                                        : count === 3
                                                            ? "-300%"
                                                            : "0",
                                        left: "13px"
                                    }}
                                >
									{text.map((element) => (
                                        <TextElement key={element} element={element}/>
                                    ))}
								</span>
                            </p>
                        </div>

                        <p
                            ref={ref}
                            className="mt-3 mb-10 text-gray-500 text-xl"
                            style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            Stick around to see some of my work.
                        </p>
                        <div
                            ref={ref}
                            style={{
                                transform: isInView ? "none" : "translateY(50px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                        </div>
                    </div>

                    {isTabletUp && <WelcomeAnimation/>}
                </div>
            </section>
        </LazyMotion>
        // <section id="home" className="h-screen">
        //     <div
        //         className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        //
        //         <div className="md:mt-2 md:w-3/5">
        //             <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7">
        //                 Hi, I&#39;m Seanglay!
        //             </h1>
        //             <p className="text-lg mt-4 mb-6 md:text-2xl">
        //                 I&#39;m a{" "}
        //                 <span className="font-semibold text-teal-600">
        //       Software Engineer{" "}
        //     </span>
        //                 based in Cambodia. Working towards creating software that makes life
        //                 easier and more meaningful.
        //             </p>
        //             <Link
        //                 to=""
        //                 className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow  hover:bg-teal-700 cursor-pointer "
        //                 activeClass="active"
        //                 spy={true}
        //                 smooth={true}
        //                 offset={-100}
        //                 duration={500}>
        //                 Resume
        //             </Link>
        //         </div>
        //         <div className="md:mt-2 md:w-1/2">
        //             <WelcomeAnimation/>
        //         </div>
        //     </div>
        // </section>
    );
};

export default HeroSection;


function TextElement({element}: any) {
    const firstWord = <b>{element.split(" ").at(0)}</b>;
    const restWords = element.split(" ").slice(1).join(" ");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <span
            ref={ref}
            className="text-[17px] md:text-2xl"
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
			{firstWord} {restWords}
		</span>
    );
}
