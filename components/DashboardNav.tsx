import Link from "next/link";

export default function DashboardNav() {
    return(
        <div className="optionsWindow">
            <Link className="optionButton" href="/dashboard">Feed</Link>
            <Link className="optionButton" href="/dashboard/profile">Profile</Link>
            <Link className="optionButton" href="/dashboard/account">Account</Link>
            <Link className="optionButton" href="/dashboard/my-projects">My Projects</Link>
            <Link className="optionButton" href="/dashboard/my-studios">My Studios</Link>
        </div>
    )
}