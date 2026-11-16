'use client'
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import DashboardNav from "@/components/DashboardNav"
import Feed from "@/components/Feed"

export default function Dashboard(){


    return(
        <div className="grow bg-app-bg p-2 flex flex-row gap-5 max-w-screen lg:p-3 overflow-y-hidden">
            <DashboardNav />
            <div className="max-h-full overflow-y-scroll inner-scrollbar w-full lg:pr-10">
                <Feed />   
            </div>
            
        </div>
    )
}