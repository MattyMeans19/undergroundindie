'use client'
import DashboardNav from "@/components/DashboardNav"
import UserProfile from "@/components/UserProfile"

export default function Profile(){
    return(
        <div className="grow bg-app-bg w-screen p-2 flex flex-row gap-5">
            <DashboardNav />
            <UserProfile />
        </div>
    )
}