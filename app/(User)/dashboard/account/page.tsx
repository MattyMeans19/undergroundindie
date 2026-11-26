import DashboardNav from "@/components/DashboardNav"
import NavBar from "@/components/NavBar"


export default function Account(){
    
    return(
        <div className="bg-app-bg flex flex-col gap-5 min-h-screen min-w-screen lg:p-3">
            <NavBar />
            <div>
                <DashboardNav />    
            </div>
        </div>
    )
}