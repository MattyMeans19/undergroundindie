import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Header(){
    return(
    <div className="flex flex-col bg-app-bg md:flex-nowrap md:flex-row md:justify-between md:gap-2 w-full h-[15vh] md:h-[5vh] pb-3 md:pb-15 border-b-5 border-app-border md:fixed">
      <h1 className="text-2xl text-center md:text-start md:text-4xl text-nowrap lg:tracking-wider p-3 h-fit text-app-secondary -mb-2">./UnderGroundIndie <strong className="animate-ping">|</strong></h1>
      <div className="flex justify-center w-full lg:w-fit lg:items-end lg:justify-end content-center gap-2 p-3 h-fit -mb-2">
        <ThemeSwitcher />
      </div>
    </div>
    )
}