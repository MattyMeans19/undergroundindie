'use client'
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import { AccountInfo } from "@/lib/definitions"
import { getAccountInfo } from "@/lib/test-data/user-data"
import { useEffect, useState } from "react"

export default function Dashboard(){
    const [accountInfo, setAccountInfo] = useState<AccountInfo>(getAccountInfo)

    useEffect(() => {
        setAccountInfo(getAccountInfo());
    }, []);

    console.log(accountInfo)
    return(
        <div className="bg-app-bg flex flex-col gap-5 min-h-screen p-3">
            <Header />
            <NavBar />
            <div className="contentWindow">
                <div className="optionsWindow">
                    <button className="optionButton">Profile</button>
                    <button className="optionButton">Account</button>
                    <button className="optionButton">My Projects</button>
                    <button className="optionButton">Settings</button>
                </div>
                <div className="displayWindow overflow-y-scroll inner-scrollbar">

                </div>
            </div>
        </div>
    )
}