import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Header(){
    return(
    <div className="flex flex-col bg-app-bg md:flex-wrap lg:flex-nowrap md:flex-row md:justify-between gap-2 w-full h-[15vh] md:h-[5vh] pb-3 border-b-5 border-app-border fixed">
      <h1 className="text-4xl tracking-wider p-3 h-fit text-app-secondary -mb-2">./UnderGroundIndie <strong className="animate-ping">|</strong></h1>
      <div className="flex justify-center w-full lg:w-fit lg:items-end lg:justify-end content-center gap-2 p-3 h-fit -mb-2 border border-b-3 border-app-border md:border-0">
        <ThemeSwitcher />
      </div>
    </div>
    )
}