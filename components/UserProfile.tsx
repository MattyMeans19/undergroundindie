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
    bio: "just a test bio for the user profile page",
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
    <div className="grow max-w-screen max-h-[50vh] md:max-h-[64vh] lg:min-h-fit overflow-y-scroll lg:overflow-auto inner-scrollbar flex flex-col lg:flex-row justify-around gap-10">
        <div className="profileCard">
            <Image src={MRJupiter} width={200} height={200} alt="Profile Picture" className="rounded-full md:size-80" />
            <h3 className="font-semibold text-app-secondary">Name: {accountInfo.fName} {accountInfo.lName}</h3>
            <p className="text-app-secondary">Handle: {accountInfo.userName}</p>
            <p className="text-app-secondary">Primary Role: {accountInfo.primaryRole}</p>
            <p className="text-app-secondary">Age: {accountInfo.age}</p>
            <p className="text-app-secondary">Bio: {accountInfo.bio}</p>
        </div>
        <div className="profileCard p-5">
            <section className="place-self-start text-start">
                <p className="text-app-secondary">Skills:</p>
                <ul className="list-disc list-inside">
                    {accountInfo.skills.map((skill, index) => (
                        <li key={index} className="text-app-accent">
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="place-self-start text-start">
                <p className="text-app-secondary">Goals:</p>
                <ul className="list-disc list-inside">
                    {accountInfo.goals.map((goal, index) => (
                        <li key={index} className="text-app-accent">
                            {goal}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="place-self-start text-start">
                <p className="text-app-secondary">Projects:</p>
                <ul className="list-disc list-inside">
                    {accountInfo.projects.map((project, index) => (
                        <li key={index} className="text-app-accent">
                            {project}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="place-self-start text-start">
                <p className="text-app-secondary">Studios:</p>
                <ul className="list-disc list-inside">
                    {accountInfo.studios.map((studio, index) => (
                        <li key={index} className="text-app-accent">
                            {studio}
                        </li>
                    ))}
                </ul>
            </section>            
        </div>

     </div>
    )
}