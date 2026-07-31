'use client'
import Header from "@/components/Header";
import { AccountInfo } from "@/lib/definitions";
import { updateAccount } from "@/lib/test-data/user-data";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Setup(){
    const userData = useSearchParams()
    const [accountInfo, updateAccountInfo] = useState<AccountInfo>({
        fName: userData.get('fName') || "",
        lName: userData.get('lName') || "",
        email: userData.get('email') || "",
        age: userData.get('age') || "",
        country: userData.get('country') || "",
        state: userData.get('state') || "",
        userName: "",
        password: "",
        bio: "",
        primaryRole: "",
        skills: [],
        goals: [],
        profilePic: "",
        projects: [],
        studios: [],
        userId: ""
    })
    const [typedSkill, setSkill] = useState("");
    const [typedGoal, setGoal] = useState("");
    const [userId, setId] = useState("");

    useEffect(() => {
        if (accountInfo.userId != userId){

        }
    })

    function addSkill(){
        if(typedSkill != "" && accountInfo.skills.length < 10){
            updateAccountInfo((prevState) =>({
                ...prevState,
                skills: [...prevState.skills, typedSkill]
            }))
            setSkill("");
        } else if(accountInfo.skills.length === 10){
            alert("Max amount of skills reached.");
            setSkill("");
        }
    }
        function addGoal(){
        if(typedGoal != "" && accountInfo.goals.length < 5){
            updateAccountInfo((prevState) =>({
                ...prevState,
                goals: [...prevState.goals, typedGoal]
            }))
            setGoal("");
        } else if(accountInfo.goals.length === 5){
            alert("Max amount of goals reached.");
            setGoal("");
        }
    }

    function Join(data: AccountInfo){
        updateAccount(data);
        redirect("/dashboard")
    }

    return(
        <div className="flex flex-col gap-5 min-h-screen bg-app-bg">
            <Header></Header>
            <div className="mt-[20vh] md:mt-[9vh] mx-15 border-3 rounded-xl border-app-border shadow-lg shadow-app-accent/15 p-5 flex flex-col md:grid grid-cols-2 gap-10">
                <h1 className="col-span-full text-center text-4xl text-app-text">Basic Info</h1>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">Name:</strong> {accountInfo.fName} {accountInfo.lName}</h2>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">Email:</strong> {accountInfo.email}</h2>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">Age:</strong> {accountInfo.age}</h2>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">Country/Region:</strong> {accountInfo.country}</h2>
                <h2 className="text-2xl text-app-text"><strong className="text-bold text-app-secondary">State/Province:</strong> {accountInfo.state}</h2>    
            </div>
            <div className="mx-15 mb-5 border-3 rounded-xl border-app-border shadow-lg shadow-app-accent/15 p-5 flex flex-col lg:grid grid-cols-5 grid-rows-10 gap-10">
                <label htmlFor="uesrname" className="text-app-secondary text-bold text-2xl text-bold">User Name/ Handle: </label>
                <input name="username" type="text" maxLength={20} autoComplete="off" className="bg-app-muted text-2xl p-2" 
                    onChange={(e) => {
                        updateAccountInfo({...accountInfo, userName: e.target.value});
                        setId(e.target.value.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
                        }}>    
                    </input>
                <label htmlFor="password" className="text-app-secondary text-bold text-2xl text-bold lg:text-end">Password: </label>
                <input name="password" type="password" minLength={8} className="bg-app-muted text-2xl p-2"></input>
                <label htmlFor="primaryRole" className="text-app-secondary text-bold text-2xl text-bold row-start-2">Primary Role: </label>
                <input name="primaryRole" type="text" autoComplete="off" minLength={8} className="bg-app-muted text-2xl p-2 row-start-2 col-span-2"onChange={(e) => updateAccountInfo({...accountInfo, primaryRole: e.target.value})}></input>
                <p className="text-sm text-app-secondary row-start 2 col-start-4 col-span-2 content-center">(This won't limit your options, it's just to help sorting and filtering!)</p>
                <label htmlFor="bio" className="text-app-secondary text-bold text-2xl text-bold row-start-3">Bio: {accountInfo.bio.length} / 300</label>
                <textarea name="bio" maxLength={300} className="bg-app-muted row-span-2 row-start-3 col-span-4 text-2xl p-2 overflow-y-scroll md:overflow-y-auto"
                    onChange={(e) => updateAccountInfo({...accountInfo, bio: e.target.value})}>
                </textarea>
                <div className="row-start-5 row-span-4 col-span-2 flex flex-col justify-center gap-2">
                    <label htmlFor="skill" className="text-app-secondary text-bold text-2xl text-bold">Add a Skill (Max 10)</label>
                    <input name="skill" type="text" autoComplete="off" className="bg-app-muted text-2xl p-2" value={typedSkill || ""} onChange={(e) => setSkill(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                e.preventDefault();
                                addSkill();
                            }
                        }}>
                    </input>
                    <button className="text-3xl bg-app-accent/50 hover:bg-app-accent active:bg-app-secondary px-3 rounded-lg" onClick={() => addSkill()}>+</button>
                    <div className="flex flex-wrap gap-1">
                        {accountInfo.skills.map((skill, index) =>(
                            <p key={index} className="text-2xl text-app-accent">
                                {skill}{index === (accountInfo.skills.length - 1) ? "." : ","}
                            </p>
                        ))}     
                    </div>
                    <span className="text-lg text-app-muted text-end">{accountInfo.skills.length} / 10</span>
                </div>
                <div className="row-start-5 row-span-4 col-start-4 col-span-2 flex flex-col justify-center gap-2">
                    <label htmlFor="skill" className="text-app-secondary text-bold text-2xl text-bold">Add a Goal (Max 5)</label>
                    <input name="skill" type="text" autoComplete="off" className="bg-app-muted text-2xl p-2" value={typedGoal || ""} onChange={(e) => setGoal(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                e.preventDefault();
                                addGoal();
                            }
                        }}>
                    </input>
                    <button className="text-3xl bg-app-accent/50 hover:bg-app-accent active:bg-app-secondary px-3 rounded-lg" onClick={() => addGoal()}>+</button>
                    <div className="flex flex-wrap gap-1">
                        {accountInfo.goals.map((goal, index) =>(
                            <p key={index} className="text-2xl text-app-accent">
                                {goal}{index === (accountInfo.goals.length -1) ? "." : ","}
                            </p>
                        ))}     
                    </div>
                    <span className="text-lg text-app-muted text-end">{accountInfo.goals.length} / 5</span>
                </div>
                <button className="row-start-9 col-start-2 col-span-3 cursor-pointer text-2xl font-bold md:text-4xl p-2 bg-app-accent/50 hover:bg-app-accent active:bg-app-secondary rounded-xl"
                    onClick={() => Join(accountInfo)}>
                        Join the Revolution!
                    </button>
            </div>
        </div>
    )
}