'use client'
import DashboardNav from "@/components/DashboardNav"
import NavBar from "@/components/NavBar"
import { AccountInfo} from "@/lib/definitions"
import { useState } from "react"


export default function Account(){
    const [accountInfo, setAccountInfo] = useState<AccountInfo>({
    id:"user123",
    email: "matt.means@example.com",
    password: "securepassword",
    createdAt: "2023-01-01",
    fName: "Matt", 
    lName: "Means",
    userName: "Mr. Jupiter",
    userId: "user123",
    profilePic: "@/lib/test-data/Mr_Jupiter.png",
    bio: "just a test bio for the user profile page. Now we're extending the ammount of text to make sure the scroll works and that it doesn't make the box grow too much.",
    primaryRole: "Game Developer",
    skills: ["Blender", "Unity", "Godot Engine", "GDScript", "Krita", "Bandlab"],
    goals: ["Become a better developer", "Learn new technologies", "Contribute to open source"],
    projects: ["UnderGroundIndie", "Game Zone", "Project Zero"],
    studios: ["Jupiter Studios"],
    age: 33,
    country: "USA",
    state: "New Mexico",
    tier: "Premium",
    followers: ["user456", "user789"],
    })
    
    return(
        <div className="bg-app-bg flex flex-col gap-5 grow min-w-screen lg:p-3">
            <NavBar />
            <div className="grow">
                <DashboardNav />
                <div className="border-3 border-app-border rounded-xl w-full h-full bg-app-primary/50 p-10">

                </div>  
            </div>
        </div>
    )
}