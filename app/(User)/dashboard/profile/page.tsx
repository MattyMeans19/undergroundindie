'use client'
import DashboardNav from "@/components/DashboardNav"
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import Image from "next/image"
import { AccountInfo } from "@/lib/definitions"
import { getAccountInfo } from "@/lib/test-data/user-data"
import MRJupiter from "@/lib/test-data/Mr_Jupiter.png"
import { useEffect, useState } from "react"

export default function Profile(){
        const [accountInfo, setAccountInfo] = useState<AccountInfo>(getAccountInfo)
    
        useEffect(() => {
            setAccountInfo(getAccountInfo());
        }, []);
    return(
        <div className="bg-app-bg flex flex-col gap-5 min-h-screen min-w-screen lg:p-3">
            <Header />
            <NavBar />
            <div className="contentWindow">
                <DashboardNav />
                <div className="displayWindow overflow-y-scroll inner-scrollbar flex flex-col gap-5">
                    <div className="contentCard">
                        <h2 className="text-xl font-bold text-app-text">Profile</h2>
                        <p className="text-app-text">Here you can manage your profile information, including your name, handle, and other details.</p>
                    </div>
                    <div className="grow contentCard">
                        <div className="flex gap-2 items-center justify-center">
                            <Image src={MRJupiter} width={400} height={400} alt="Profile Picture" className="rounded-full" />
                            <h3 className="text-lg font-semibold text-app-text">Name: {accountInfo.fName} {accountInfo.lName}</h3>
                            <p className="text-app-text">Handle: {accountInfo.userName}</p>
                            <p className="text-app-text">Primary Role: {accountInfo.primaryRole}</p>
                            <p className="text-app-text">Age: {accountInfo.age}</p>
                            <p className="text-app-text">Bio: {accountInfo.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}