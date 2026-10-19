'use client'
import DashboardNav from "@/components/DashboardNav"
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import Image from "next/image"
import { AccountInfo } from "@/lib/definitions"
import { useState } from "react"
import ProfileFeed from "@/components/ProfileFeed"
import UserProfile from "@/components/UserProfile"

export default function Profile(){
    const [tab, changeTab] = useState("profile")

    return(
        <div className="bg-app-bg p-2 flex flex-col gap-5 min-h-screen max-h-screen max-w-screen lg:p-3">
            <Header />
            <NavBar />
            <div className="contentWindow">
                <DashboardNav />
                <div className="flex flex-col gap-5 grow">
                    {/* <div className="contentCard">
                        <h2 className="lg:text-xl font-bold text-app-secondary">Profile</h2>
                        <p className="text-app-primary">Here you can manage your profile information, including your name, handle, and other details.</p>
                    </div> */}
                    <div className="md:w-full flex flex-nowrap gap-5 justify-center">
                        <button className={`${tab === "profile" ? "selectedOption" : "optionButton"}`}
                        onClick={() => changeTab("profile")}>
                            My Profile
                        </button>
                        <button className={`${tab === "posts" ? "selectedOption" : "optionButton"}`}
                        onClick={() => changeTab("posts")}>
                            My Posts
                        </button>
                    </div>
                    {tab === "profile" ?
                            <UserProfile />
                         :
                            <ProfileFeed />    
                    }
                </div>
            </div>
        </div>
    )
}