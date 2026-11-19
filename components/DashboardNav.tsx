'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const dashboardLinks = [
    { label: "Feed", href: "/dashboard" },
    { label: "Profile", href: "/dashboard/profile" },
    { label: "Account", href: "/dashboard/account" },
    { label: "My Projects", href: "/dashboard/my-projects" },
    { label: "My Studios", href: "/dashboard/my-studios" },
];

export default function DashboardNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="z-10 w-fit fixed">
            <button
                type="button"
                aria-label={isOpen ? "Close dashboard navigation" : "Open dashboard navigation"}
                aria-expanded={isOpen}
                aria-controls="dashboard-navigation"
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex items-center gap-2 rounded-md border-2 border-app-accent bg-app-bg/10 px-3 py-2 text-app-accent hover:bg-app-bg"
            >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={isOpen ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
                <span>Menu</span>
            </button>
            <nav
                id="dashboard-navigation"
                aria-label="Dashboard"
                hidden={!isOpen}
                className="absolute left-0 top-full mt-2 min-w-48 rounded-md border-2 border-app-accent bg-app-bg p-2 text-center shadow-lg"
            >
                <ul className="flex flex-col gap-1">
                    {dashboardLinks.map(({ label, href }) => {
                        const isActive = pathname === href;

                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className={`block rounded-md px-3 py-2 ${
                                        isActive
                                            ? "text-app-accent underline"
                                            : "text-app-secondary hover:bg-app-secondary/10 hover:text-app-accent"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
