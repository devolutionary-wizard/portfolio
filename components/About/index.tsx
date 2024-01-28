"use client";

import React, {useRef} from "react";
import {LazyMotion, domAnimation, useInView} from "framer-motion";
import {TimeLine} from "./Timeline";
import {HeadingDivider} from "@/components/HeadingDivider";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <LazyMotion features={domAnimation}>
            <section id="about" className="section">
                <HeadingDivider title="About me"/>
                <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                    <div
                        ref={ref}
                        className="text-xl font-light leading-relaxed"
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <p>
                            My name is Seanglay. I successfully graduated Technical Cambodia Academy of Digital
                            Technology, computer
                            science faculty.
                        </p>
                        <p>
                            During my university years, I developed a deep passion for web programming, and I
                            consistently engaged in learning new concepts and techniques in this field.
                        </p>
                        <p> I have a wide range of hobbies and passions that keep me busy.
                            From reading, playing sports, playing video game, traveling,
                            music, I am always seeking new experiences and love to keep myself
                            engaged and learning new things.</p>
                        <p className="my-3.5">
                            I believe that you should{" "}
                            <mark> never stop growing</mark>
                        {" "}
                        and that&#39;s what I strive to do, I have a passion for
                            technology and a desire to always push the limits of what is
                            possible. I am excited to see where my career takes me and am
                            always open to new opportunities. 🙂
                        </p>
                    </div>
                </div>

                <TimeLine/>
            </section>
        </LazyMotion>
    );
}
