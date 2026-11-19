'use client'
import DashboardNav from "@/components/DashboardNav"
import Feed from "@/components/Feed"

export default function Dashboard(){


    return(
        <div className="grow max-h-full bg-app-bg overflow-y-scroll inner-scrollbar relative">
            <DashboardNav />
            <div className="w-full h-full p-10">
                <Feed />
            </div> 
        </div>
    )
}