'use client'

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useEffect } from "react";
import {redirect} from "next/navigation";
import { getURL } from "next/dist/shared/lib/utils";

export default function Header(){
    useEffect(() => {
      const currentURL = getURL()
      if (process.env.NEXT_PUBLIC_PRELAUNCH === "true" && !currentURL.includes("/prelaunch")) {
        redirect('/prelaunch');
      }
    }, []);



    return(
    <div className="flex flex-col bg-app-bg md:flex-nowrap md:flex-row md:justify-between md:gap-2 w-full h-[15vh] md:h-[5vh] pb-3 md:pb-15 border-b-5 border-app-border fixed top-0 z-10">
      <h1 className="text-2xl text-center md:text-start md:text-4xl text-nowrap lg:tracking-wider p-3 h-fit text-app-primary -mb-2">./UnderGroundIndie <strong className="animate-ping">|</strong></h1>
      <div className="flex justify-center w-full lg:w-fit lg:items-end lg:justify-end content-center gap-2 p-3 h-fit -mb-2 md:overflow-x-scroll lg:overflow-x-auto">
        <ThemeSwitcher />
      </div>
    </div>
    )
}