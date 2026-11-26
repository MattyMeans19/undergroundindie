import { AccountInfo } from "@/lib/definitions"
import MRJupiter from "@/lib/test-data/Mr_Jupiter.png"
import { useState } from "react"
import Image from "next/image"
import ProfileFeed from "./ProfileFeed"

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
    const [tab, setTab] = useState<string>("About")
    const [editBio, setEditBio] = useState<boolean>(false)
    const [newBio, setNewBio] = useState<string>(accountInfo.bio)
    const [newSkills, setNewSkills] = useState<Array<string>>(accountInfo.skills)
    const [newGoals, setNewGoals] = useState<Array<string>>(accountInfo.goals)
    const [newSkill, setNewSkill] = useState<string>("")
    const [newGoal, setNewGoal] = useState<string>("")

    const saveBio = () => {
        setAccountInfo({...accountInfo, bio: newBio})
        setEditBio(false)
    }

    return(
        <div className="max-w-screen min-h-0 flex flex-1 flex-row gap-5 p-5">
            <div className="">
                <div className="w-full flex flex-col items-center">
                    <Image src={MRJupiter} width={200} height={200} alt="Profile Picture" 
                    className={`rounded-full size-80 border-5 ${accountInfo.tier === "Premium" ? "border-[#D4AF37]" : "border-app-border"}`}/>
                    {accountInfo.tier === "Premium" && (
                        <div className="bg-[#D4AF37] -mt-5 px-2 py-1 rounded-full text-2xl font-glitch text-black tracking-widest">
                            UGI
                        </div>
                    )}   
                </div>
                
                <div className="flex flex-col gap-15 mt-5 w-full text-center">
                    <h1 className="text-6xl font-bold text-app-primary">{accountInfo.userName}</h1>
                    <h2 className="text-xl italic text-app-secondary">{accountInfo.fName} {accountInfo.lName}</h2>
                    <h3 className="text-6xl text-app-accent">{accountInfo.primaryRole}</h3>    
                    <span className="text-2xl text-app-secondary text-center">Followers: {accountInfo.followers.length}</span>
                </div>
            </div>
            <div className="min-h-0 min-w-0 flex-1 bg-app-secondary/20 border-5 rounded-lg border-app-border flex flex-col gap-5 p-5 overflow-hidden">
                    <div className="flex flex-row gap-5 w-full border-b-5 border-app-accent/20 text-2xl justify-around shrink-0">
                        <button onClick={() => setTab("About")} className={`${tab === "About" ? "text-app-accent" : "text-app-secondary"}`}>About</button>
                        <button onClick={() => setTab("Posts")} className={`${tab === "Posts" ? "text-app-accent" : "text-app-secondary"}`}>Posts</button>
                        <button onClick={() => setTab("Projects")} className={`${tab === "Projects" ? "text-app-accent" : "text-app-secondary"}`}>Projects</button>
                    </div>
                    <div className="min-h-0 flex flex-1 flex-col">
                        {tab === "About" && (
                            <div className="min-h-0 flex flex-1 flex-col gap-5 p-5">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-2xl font-bold text-app-primary">Bio:</h1>
                                    {editBio ?
                                    <div className="flex flex-col gap-2">
                                      <textarea className="bg-app-card text-app-secondary p-3 md:p-4 rounded-lg border-5 border-app-border w-full" rows={4}
                                        defaultValue={accountInfo.bio} onChange={(e) => (setNewBio(e.target.value))}
                                        >
                                        </textarea>
                                        <button className="bg-app-accent w-fit self-end hover:bg-app-accent-hover text-white py-2 px-4 rounded-xl" onClick={() => saveBio()}>
                                            Save
                                        </button>
                                    </div>
                                        
                                    :
                                    <div className="flex flex-col gap-2">
                                        <span className="text-app-secondary text-2xl bg-app-card p-10 border-3 border-app-border rounded-2xl">{accountInfo.bio}</span>
                                        <button onClick={() => setEditBio(!editBio)} className="bg-app-accent hover:bg-app-accent-hover text-white py-2 px-4 rounded-xl w-fit self-end">
                                            {editBio ? "Save Bio" : "Edit Bio"}
                                        </button>
                                    </div> }
                                </div>
                                <div className="min-h-0 grid flex-1 grid-cols-2 grid-rows-[auto_minmax(0,1fr)] gap-3">
                                    <h1 className="text-3xl text-app-secondary underline">Skills</h1>
                                    <h1 className="text-3xl text-app-secondary underline">Goals</h1>
                                    <div className="contentWindow min-h-0 overflow-hidden bg-app-primary/30 text-app-accent">
                                        <ul className="min-h-0 flex flex-1 flex-col gap-5 overflow-y-auto inner-scrollbar">
                                            {newSkills.map((skill, index) => (
                                                <li key = {index} className=" text-3xl flex flex-row flex-nowrap justify-between">
                                                    {skill}
                                                    <button className="self-end" onClick={() =>(setNewSkills(prev => prev.filter(item => item != skill)))}>🗑️</button>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex shrink-0 flex-row flex-nowrap justify-around">
                                            <label htmlFor="newSkill">Add Skill: </label>
                                            <input id="newSkill" value={newSkill} className="bg-app-bg/20 w-md border-app-border/40 border-5 text-2xl text-center"
                                            onChange={(e) => (setNewSkill(e.target.value))}></input>
                                            {newSkill != "" &&
                                                <button onClick={() => {
                                                setNewSkills((prev) => [...prev, newSkill]);
                                                setNewSkill("")
                                                }}>
                                                    ➕
                                                </button> 
                                            }   
                                        </div>
                                          
                                    </div>
                                    <div className="contentWindow min-h-0 overflow-hidden bg-app-primary/30 text-app-accent">
                                        <ul className="min-h-0 flex flex-1 flex-col gap-5 overflow-y-auto inner-scrollbar">
                                            {newGoals.map((goal, index) => (
                                                <li key = {index} className=" text-3xl flex flex-row flex-nowrap justify-between">
                                                    {goal}
                                                    <button className="self-end" onClick={() => (setNewGoals(prev => prev.filter(item => item != goal)))}>🗑️</button>
                                                </li>
                                            ))}
                                        </ul>
                                         <div className="flex shrink-0 flex-row flex-nowrap justify-around">
                                            <label htmlFor="newGoal">Add Goal: </label>
                                            <input id="newGoal" value={newGoal} className="bg-app-bg/20 w-md border-app-border/40 border-5 text-2xl text-center"
                                            onChange={(e) => (setNewGoal(e.target.value))}></input>
                                            {newSkill != "" &&
                                                <button onClick={() => {
                                                setNewGoals((prev) => [...prev, newGoal]);
                                                setNewGoal("")
                                                }}>
                                                    ➕
                                                </button> 
                                            }   
                                        </div>    
                                    </div> 
                               </div>
                            </div>
                        )}
                        {tab === "Posts" && (
                            <div className="min-h-0 flex-1 overflow-y-auto inner-scrollbar">
                                <ProfileFeed />
                            </div>
                        )}
                        {tab === "Projects" && (
                            <div className="flex flex-col gap-5 p-5">
                                <h1 className="text-4xl font-bold text-app-primary">Projects</h1>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}   