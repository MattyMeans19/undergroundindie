'use client'
import Header from "@/components/Header"
import { AccountInfo } from "@/lib/definitions"
import { getAccountInfo } from "@/lib/test-data/user-data"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Dashboard(){
    const [accountInfo, setAccountInfo] = useState<AccountInfo>(getAccountInfo)

    useEffect(() => {
        setAccountInfo(getAccountInfo());
    }, []);

    console.log(accountInfo)
    return(
        <div className="bg-app-bg flex flex-col min-h-screen p-3">
            <Header />
            <div className="mt-[5vh] grow bg-app-muted/25">
                
            </div>
        </div>
    )
}