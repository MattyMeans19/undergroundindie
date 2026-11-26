'use client'
import DashboardNav from "@/components/DashboardNav"
import NavBar from "@/components/NavBar"
import UserProfile from "@/components/UserProfile"

export default function Profile(){
    return(
        <div className="min-h-0 min-w-0 flex-1 bg-app-bg flex flex-col overflow-hidden">
            <NavBar />
            <div className="min-h-0 min-w-0 flex flex-1 flex-col p-5">
                <DashboardNav />
                <UserProfile />
            </div>
        </div>
    )
}