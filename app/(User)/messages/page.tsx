import Header from "@/components/Header"
import NavBar from "@/components/NavBar"

export default function Messages(){
    return(
        <div className="bg-app-bg flex flex-col gap-5 min-h-screen min-w-screen lg:p-3">
            <Header />
            <NavBar />
            <div className="contentWindow">
                <div className="displayWindow overflow-y-scroll inner-scrollbar">
                    <div className="contentCard">
                        <h2 className="text-xl font-bold text-app-text">Messages</h2>
                        <p className="text-app-text">Here you can view and manage your messages, including sending new messages and replying to existing ones.</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}