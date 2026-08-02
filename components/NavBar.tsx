import Link from "next/link";

export default function NavBar() {
    return(
        <nav className="mt-[15vh] md:mt-[6vh] flex flex-row flex-nowrap place-content-center lg:place-content-end lg:mr-6 h-full gap-3">
            <Link href="/dashboard" className="navButton">Dashboard</Link>
            <Link href="/messages" className="navButton">Messages</Link>
            <Link href="/studios" className="navButton">Studios</Link>
            <Link href="/projects" className="navButton">Projects</Link>
        </nav>
    )
}