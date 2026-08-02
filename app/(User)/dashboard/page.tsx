'use client'
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import { AccountInfo } from "@/lib/definitions"
import { getAccountInfo } from "@/lib/test-data/user-data"
import { useEffect, useState } from "react"
import Link from "next/link"
import DashboardNav from "@/components/DashboardNav"

export default function Dashboard(){
    const [accountInfo, setAccountInfo] = useState<AccountInfo>(getAccountInfo)

    useEffect(() => {
        setAccountInfo(getAccountInfo());
    }, []);

    console.log(accountInfo)
    return(
        <div className="bg-app-bg flex flex-col gap-5 min-h-screen min-w-screen lg:p-3">
            <Header />
            <NavBar />
            <div className="contentWindow">
                <DashboardNav />
                <div className="displayWindow overflow-y-scroll inner-scrollbar">
                    <div className="contentCard">
                        <h2 className="text-xl font-bold text-app-text">Welcome, {accountInfo.fName}!</h2>
                        <p className="text-app-text">This is your dashboard. Here you can manage your account, view your projects and studios, and access other features.</p>
                        <p className="text-app-text">You will also find your main feed on this page.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}