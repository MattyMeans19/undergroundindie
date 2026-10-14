'use client';

import Link from "next/link";
import {useEffect, useState} from "react";

export default function DashboardNav() {
    const [activeOption, setActiveOption] = useState("Feed");

    useEffect(() => {
        const url = window.location.href;
        if (url.includes("/dashboard/profile")) {
            setActiveOption("Profile");
        } else if (url.includes("/dashboard/account")) {
            setActiveOption("Account");
        } else if (url.includes("/dashboard/my-projects")) {
            setActiveOption("My Projects");
        } else if (url.includes("/dashboard/my-studios")) {
            setActiveOption("My Studios");
        } else {
            setActiveOption("Feed");
        }
    }, []);

    return(
        <div className="optionsWindow relative">
            <Link className={`${activeOption === "Feed" ? "selectedOption" : "optionButton"}`} href="/dashboard">Feed</Link>
            <Link className={`${activeOption === "Profile" ? "selectedOption" : "optionButton"}`} href="/dashboard/profile">Profile</Link>
            <Link className={`${activeOption === "Account" ? "selectedOption" : "optionButton"}`} href="/dashboard/account">Account</Link>
            <Link className={`${activeOption === "My Projects" ? "selectedOption" : "optionButton"}`} href="/dashboard/my-projects">My Projects</Link>
            <Link className={`${activeOption === "My Studios" ? "selectedOption" : "optionButton"}`} href="/dashboard/my-studios">My Studios</Link>
            <button className="md:absolute right-5 text-app-accent">🔔Notifications</button>
        </div>
    )
}