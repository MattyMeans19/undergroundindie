import DashboardNav from "@/components/DashboardNav"
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"

export default function Account(){
    return(
        <div className="bg-app-bg flex flex-col gap-5 min-h-screen min-w-screen lg:p-3">
            <Header />
            <NavBar />
            <div className="contentWindow">
                <DashboardNav />
                <div className="displayWindow overflow-y-scroll inner-scrollbar">
                    <div className="contentCard">
                        <h2 className="text-xl font-bold text-app-text">Account Settings</h2>
                        <p className="text-app-text">Here you can manage your account settings, including your profile information, password, and other preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}