'use client'
import Header from "@/components/Header";
import { UserData } from "@/lib/definitions";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Setup(){
    const userData = useSearchParams()

    const [accountInfo, updateAccountInfo] = useState({
        fName: userData.get('fName') || "",
        lName: userData.get('lName') || "",
        email: userData.get('email') || "",
        age: userData.get('age') || "",
        country: userData.get('country') || "",
        state: userData.get('state') || "",
        userName: "",
        password: "",
        bio: "",
        skills: [],
        goals: []
    })

    return(
        <div className="flex flex-col gap-5 min-h-screen bg-app-bg">
            <Header></Header>
            <div className="mt-[20vh] md:mt-[15vh] mx-15 border-3 rounded-xl border-app-border shadow-lg shadow-app-accent/15 p-5 flex flex-col md:grid grid-cols-2 gap-10">
                <h1 className="col-span-full text-center text-4xl text-app-text">Basic Info</h1>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">Name:</strong> {accountInfo.fName} {accountInfo.lName}</h2>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">Email:</strong> {accountInfo.email}</h2>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">Age:</strong> {accountInfo.age}</h2>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">Country/Region:</strong> {accountInfo.country}</h2>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">State/Province:</strong> {accountInfo.state}</h2>    
            </div>
            <div className="mx-15 mb-5 border-3 rounded-xl border-app-border shadow-lg shadow-app-accent/15 p-5 flex flex-col md:grid grid-cols-5 gap-10">
                <label htmlFor="uesrname" className="text-app-secondary text-bold text-2xl text-bold">User Name/ Handle: </label>
                <input name="username" type="text" maxLength={20} className="bg-app-muted text-2xl p-2"></input>
                <label htmlFor="password" className="text-app-secondary text-bold text-2xl text-bold text-end">Password: </label>
                <input name="password" type="password" minLength={8} className="bg-app-muted text-2xl p-2"></input>
                <label htmlFor="bio" className="text-app-secondary text-bold text-2xl text-bold row-start-2">Bio: </label>
                <textarea name="bio" maxLength={300} className="bg-app-muted row-span-3 col-span-2 text-2xl p-2"></textarea>
                <div className="row-start-5 col-span-full flex md:flex-nowrap justify-between">
                    <label htmlFor="skill" className="text-app-secondary text-bold text-2xl text-bold">Add a Skill</label>
                    <input name="skill" type="text" className="bg-app-muted text-2xl p-2"></input>
                    <button>+</button>
                    {accountInfo.skills.map((skill, index) =>(
                        <p key={index}>
                            {skill}
                        </p>
                    ))}    
                </div>
                
            </div>
        </div>
    )
}