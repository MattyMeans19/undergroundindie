import { AccountInfo } from "@/lib/definitions"
import MRJupiter from "@/lib/test-data/Mr_Jupiter.png"
import { useState } from "react"
import Image from "next/image"

export default function UserProfile(){
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
    skills: ["Blender", "Unity", "Godot Engine", "GDScript", "Krita"],
    goals: ["Become a better developer", "Learn new technologies", "Contribute to open source"],
    projects: ["UnderGroundIndie", "Game Zone", "Project Zero"],
    studios: ["Jupiter Studios"],
    age: 33,
    country: "USA",
    state: "New Mexico",
    tier: "Premium"
    })

    return(
    <div className="w-full h-full flex flex-col gap-10 p-5">
        <div className="profileCard">
            <Image src={MRJupiter} width={200} height={200} alt="Profile Picture" className="rounded-full size-100 border-5 border-app-border"/>
            <div>
                <h1 className="text-7xl font-bold">{accountInfo.userName}</h1>
                <h2 className="text-3xl italic">{accountInfo.fName} {accountInfo.lName}</h2>    
            </div>
            
        </div>
    </div>
    )
}   