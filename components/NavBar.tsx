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
        <nav className="bg-app-bg flex flex-row flex-wrap place-content-center p-5 border-b-3 border-app-secondary/35 min-w-full gap-3">
            <Link href="/dashboard" className={`${activeLink === "Dashboard" ? "navSelected" : "navButton"}`}>Dashboard</Link>
            <Link href="/messages" className={`${activeLink === "Messages" ? "navSelected" : "navButton"}`}>Messages</Link>
            <Link href="/studios" className={`${activeLink === "Studios" ? "navSelected" : "navButton"}`}>Studios</Link>
            <Link href="/projects" className={`${activeLink === "Projects" ? "navSelected" : "navButton"}`}>Projects</Link>
                        <button className="text-app-accent md:absolute left-10">🔔Notifications</button>
            <Link href="/" className="navButton md:absolute right-10 cursor-pointer">Logout</Link>
        </nav>
    )
}