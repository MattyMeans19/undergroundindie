'use client';
import Link from "next/link";
import {useEffect, useState} from "react";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState("Dashboard");

    useEffect(() => {
        const url = window.location.href;
        if (url.includes("/dashboard")) {
            setActiveLink("Dashboard");
        } else if (url.includes("/messages")) {
            setActiveLink("Messages");
        } else if (url.includes("/studios")) {
            setActiveLink("Studios");
        } else if (url.includes("/projects")) {
            setActiveLink("Projects");
        }
    }, []);

    return(
        <nav className="mt-[15vh] md:mt-[8vh] flex flex-row flex-nowrap place-content-center md:place-content-end lg:mr-6 h-full min-w-full gap-3 relative">
            <Link href="/" className="navButton absolute top-10 md:top-0 left-37 md:left-10 cursor-pointer">Logout</Link>
            <Link href="/dashboard" className={`${activeLink === "Dashboard" ? "navSelected" : "navButton"}`}>Dashboard</Link>
            <Link href="/messages" className={`${activeLink === "Messages" ? "navSelected" : "navButton"}`}>Messages</Link>
            <Link href="/studios" className={`${activeLink === "Studios" ? "navSelected" : "navButton"}`}>Studios</Link>
            <Link href="/projects" className={`${activeLink === "Projects" ? "navSelected" : "navButton"}`}>Projects</Link>
        </nav>
    )
}