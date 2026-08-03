import Header from "@/components/Header"
import NavBar from "@/components/NavBar"

export default function Studios(){
    return(
        <div className="bg-app-bg flex flex-col gap-5 min-h-screen min-w-screen lg:p-3">
            <Header />
            <NavBar />
            <div className="contentWindow">
                <div className="displayWindow overflow-y-scroll inner-scrollbar">
                    <div className="contentCard">
                        <h2 className="text-xl font-bold text-app-text">Studios</h2>
                        <p className="text-app-text">Here you can view and manage your studios, including creating new ones and editing existing ones.</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}