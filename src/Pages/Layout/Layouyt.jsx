

import React, { useEffect, useRef, useState } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap, { Linear } from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import '../../assets/css/bootstrap.min.css'
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

gsap.registerPlugin();

const Layout = () => {
    // const xTo = useRef();
    // const yTo = useRef();
    // const app = useRef();
    // const [navigateDone, setNavigateDone] = useState(false);
    // const navigate = useNavigate;
    // const { context, contextSafe } = useGSAP(() => {
    //     xTo.current = gsap.quickTo(".flair", "x", { duration: 1, ease: "power4" }),
    //         yTo.current = gsap.quickTo(".flair", "y", { duration: 1, ease: "power4" });
    // }, { scope: app });

    // const moveShape = contextSafe((e) => {
    //     xTo.current(e.clientX);
    //     yTo.current(e.clientY);
    // });

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 10000);
    })

    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50)
    }, [location])

    const smoother = useRef();

    useGSAP(() => {
        smoother.current = ScrollSmoother.create({
            wrapper: "#wrapper",
            content: "#content",
            smooth: 3,
            effects: true,
        });
    })

    function home() {
        document.body.classList.remove("fixedBody");
        const tl = gsap.timeline({ ease: Linear.easeInOut });
        tl.to('.dmenu', 0.5, { y: -100, opacity: 0, }, "collabe")
            .to('.hamenu .menu-text .text', 0.5, { opacity: 0, }, "collabe+=0.18")
            .to('.manuLogo', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.close-menu', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.item', 0.5, { y: -100, opacity: 0, }, "collabe+=0.25")
            .to('.hamenu', 0.8, { left: '-100%' }, "collabe+=1.3")

        setTimeout(() => {
            smoother.current.scrollTo('#homeSection', true, 'center center');
        }, 1800);
    }
    function about() {
        document.body.classList.remove("fixedBody");
        const tl = gsap.timeline({ ease: Linear.easeInOut });
        tl.to('.dmenu', 0.5, { y: -100, opacity: 0, }, "collabe")
            .to('.hamenu .menu-text .text', 0.5, { opacity: 0, }, "collabe+=0.18")
            .to('.manuLogo', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.close-menu', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.item', 0.5, { y: -100, opacity: 0, }, "collabe+=0.25")
            .to('.hamenu', 0.8, { left: '-100%' }, "collabe+=1.3")

        setTimeout(() => {
            smoother.current.scrollTo('#aboutSection', true, 'center center');
        }, 1800);
    }
    function service() {
        document.body.classList.remove("fixedBody");
        const tl = gsap.timeline({ ease: Linear.easeInOut });
        tl.to('.dmenu', 0.5, { y: -100, opacity: 0, }, "collabe")
            .to('.hamenu .menu-text .text', 0.5, { opacity: 0, }, "collabe+=0.18")
            .to('.manuLogo', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.close-menu', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.item', 0.5, { y: -100, opacity: 0, }, "collabe+=0.25")
            .to('.hamenu', 0.8, { left: '-100%' }, "collabe+=1.3")

        setTimeout(() => {
            smoother.current.scrollTo('#serviceSection', true, 'center center');
        }, 1800);
    }
    function advantagesSection() {
        document.body.classList.remove("fixedBody");
        const tl = gsap.timeline({ ease: Linear.easeInOut });
        tl.to('.dmenu', 0.5, { y: -100, opacity: 0, }, "collabe")
            .to('.hamenu .menu-text .text', 0.5, { opacity: 0, }, "collabe+=0.18")
            .to('.manuLogo', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.close-menu', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.item', 0.5, { y: -100, opacity: 0, }, "collabe+=0.25")
            .to('.hamenu', 0.8, { left: '-100%' }, "collabe+=1.3")

        setTimeout(() => {
            smoother.current.scrollTo('#advantagesSection', true, 'center center');
        }, 1800);
    }
    function serviceSection() {
        document.body.classList.remove("fixedBody");
        const tl = gsap.timeline({ ease: Linear.easeInOut });
        tl.to('.dmenu', 0.5, { y: -100, opacity: 0, }, "collabe")
            .to('.hamenu .menu-text .text', 0.5, { opacity: 0, }, "collabe+=0.18")
            .to('.manuLogo', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.close-menu', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.item', 0.5, { y: -100, opacity: 0, }, "collabe+=0.25")
            .to('.hamenu', 0.8, { left: '-100%' }, "collabe+=1.3")

        setTimeout(() => {
            smoother.current.scrollTo('#serviceSection', true, 'center center');
        }, 1800);
    }
    function blockchainSection() {
        document.body.classList.remove("fixedBody");
        const tl = gsap.timeline({ ease: Linear.easeInOut });
        tl.to('.dmenu', 0.5, { y: -100, opacity: 0, }, "collabe")
            .to('.hamenu .menu-text .text', 0.5, { opacity: 0, }, "collabe+=0.18")
            .to('.manuLogo', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.close-menu', 0.5, { opacity: 0, }, "collabe+=0.2")
            .to('.item', 0.5, { y: -100, opacity: 0, }, "collabe+=0.25")
            .to('.hamenu', 0.8, { left: '-100%' }, "collabe+=1.3")

        setTimeout(() => {
            smoother.current.scrollTo('#blockchainSection', true, 'center center');
        }, 1800);
    }

    const [pageURL, setPageURL] = useState(0);
    useEffect(() => {
        setPageURL(window.location.href);
    })

    return (
        <>
            <Helmet>
                <link rel="canonical" href={pageURL} />
            </Helmet>
            <div id='wrapper'>
                <div id='content'>
                    <div>
                        {/* <div className="flair" >
                        </div> */}
                        <Header
                            home={home}
                            about={about}
                            service={service}
                            advantage={advantagesSection}
                            blockchain={blockchainSection}
                        />
                        <div id="smooth-content">
                            <main className="main-bg">
                                <Outlet />
                            </main>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
