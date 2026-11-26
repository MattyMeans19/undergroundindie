'use client'
import DashboardNav from "@/components/DashboardNav"
import Feed from "@/components/Feed"
import NavBar from "@/components/NavBar"

export default function Dashboard(){


    return(
        <div className="grow max-h-full bg-app-bg overflow-y-scroll inner-scrollbar relative">
            <NavBar />
            <DashboardNav />
            <div className="w-full h-full p-10">
                <Feed />
            </div> 
        </div>
    )
}