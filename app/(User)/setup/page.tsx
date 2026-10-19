'use client'
import Header from "@/components/Header";
import { AccountInfo } from "@/lib/definitions";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Country, State, IState }  from 'country-state-city';


function SetupForm(){
    const Countries = Country.getAllCountries();
    const States = State.getAllStates();
    const [statesList, setStates] = useState([] as IState[]);
    const [ageValidated, setAgeValidated] = useState(false)
    const userData = useSearchParams()
    const [accountInfo, updateAccountInfo] = useState<AccountInfo>({
        id: userData.get('id') || userData.get('userId') || "",
        email: userData.get('email') || "",
        password: userData.get('password') || "",
        createdAt: userData.get('createdAt') || "",
        userId: userData.get('userId') || "",
        fName: "",
        lName: "",
        userName: "",
        bio: "",
        primaryRole: "",
        skills: [],
        goals: [],
        profilePic: "",
        projects: [],
        studios: [],
        country: "",
        state: "",
        age: 0,
        tier: "free"
    })
    const [typedSkill, setSkill] = useState("");
    const [typedGoal, setGoal] = useState("");
    const [userId, setId] = useState("");
    const [section, setSection] = useState(1);

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
        redirect("/dashboard")
    }

    function updateStatesList(countryCode: string){
        if(countryCode != ""){
            var statesList = States.filter(state => state.countryCode === countryCode)
            setStates(statesList)
        }
    }
    function validateAge(dob: string){
        if(!dob) return false;

        const [year, month, day] = dob.split("-").map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const sixteenthBday = new Date(
            birthDate.getFullYear() + 16,
            birthDate.getMonth(),
            birthDate.getDay()
        );

        var ageVerified = (today >= sixteenthBday);
        setAgeValidated(ageVerified);

        if(ageVerified){
            const verifiedAge = today.getFullYear() - birthDate.getFullYear()
            updateAccountInfo({...accountInfo, age: verifiedAge})
        }
    }

    function nextSection(){
        if(section === 1 && (accountInfo.fName === "" || accountInfo.lName === "" || accountInfo.country === "" || accountInfo.state === "" || !ageValidated)){
            alert("Please fill out all required fields and verify your age before proceeding.");
            return;
        }
        else if(section === 2 && (accountInfo.userName === "" || accountInfo.primaryRole === "" || accountInfo.bio === "")){
            alert("Please fill out all required fields before proceeding.");
            return;
        }
        else{
            setSection(section + 1);
        }
    }
    return(
        <div className="flex flex-col gap-5 py-10 min-h-screen bg-app-bg">
            <Header></Header>
            <div className="bg-app-card mx-15 mt-25 border-3 rounded-xl border-app-border shadow-lg shadow-app-accent/15 p-5 flex flex-col gap-10">
                {section === 1 &&
                <div className="flex flex-col gap-25 col-span-5 row-span-10">
                    <h1 className="text-5xl text-app-accent text-center font-sketch">Step 1: Basic Info</h1>
                    <section className="flex gap-10 justify-center">
                        <label htmlFor="fName" className="text-app-secondary text-bold text-2xl text-bold">First Name: </label>
                        <input required name="fName" type="text" autoComplete="off" value={accountInfo.fName || ""} className="formInput text-2xl p-2" onChange={(e) => updateAccountInfo({...accountInfo, fName: e.target.value})}></input>
                    </section>
                    <section className="flex gap-10 justify-center">
                        <label htmlFor="lName" className="text-app-secondary text-bold text-2xl text-bold row-start-2">Last Name: </label>
                        <input required name="lName" type="text" autoComplete="off" value={accountInfo.lName || ""} className="formInput  text-2xl p-2 row-start-2 col-span-2"onChange={(e) => updateAccountInfo({...accountInfo, lName: e.target.value})}></input>
                    </section>
                    <div className="flex flex-wrap gap-10 justify-center">
                        <label htmlFor="dob" className="text-2xl text-app-secondary">Date of Birth</label>
                        <input required type="date" name="dob" className="formInput" onChange={(e) => validateAge(e.target.value)}></input>
                        {ageValidated != true ? <p className="text-red-500 text-md basis-full text-center">Must be at least 16 years old to join!</p> : <p className="text-green-500 text-md basis-full text-center">Age Verified as {accountInfo.age} years old!</p>}  
                    </div>
                    <select name="country" className="formInput" value={accountInfo.country || ""}
                        onChange={(e) => {
                            updateStatesList(e.target.value)
                            updateAccountInfo({...accountInfo, country: e.target.value})
                        }} required>
                        <option value="">Country</option>
                        {Countries.map((country, index) => (
                            <option key={index} value={country.isoCode}>{country.name}</option>
                        ))}
                    </select>
                    <select name="state" className="formInput" value={accountInfo.state || ""}
                        onChange={(e) => updateAccountInfo({...accountInfo, state:e.target.value})}>
                        <option value="">State/Province</option>
                        {statesList.map((state, index) => (
                            <option key={index} value={state.name}>{state.name}</option>
                        ))}
                    </select>
                </div>
                }
                {section === 2 &&
                <div className="flex flex-col gap-15">
                    <h1 className="text-5xl text-app-accent text-center font-sketch">Step 2: Profile Information</h1>
                    <section className="flex flex-col items-center gap-10 justify-center">
                        <label htmlFor="username" className="text-app-secondary text-bold text-2xl text-bold">User Name/ Handle: </label>
                        <input required name="username" type="text" maxLength={20} value={accountInfo.userName || ""} autoComplete="off" className="formInput text-2xl p-2" 
                            onChange={(e) => {
                                updateAccountInfo({...accountInfo, userName: e.target.value});
                                setId(e.target.value.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
                                }}>    
                            </input>                        
                    </section>
                    <section className="flex flex-col items-center gap-10 justify-center">
                        <label htmlFor="primaryRole" className="text-app-secondary text-bold text-2xl text-bold row-start-2">Primary Role: </label>
                        <input required name="primaryRole" type="text" autoComplete="off" minLength={8} value={accountInfo.primaryRole || ""} className="formInput  text-2xl p-2 row-start-2 col-span-2"onChange={(e) => updateAccountInfo({...accountInfo, primaryRole: e.target.value})}></input>
                        <p className="text-sm text-app-secondary row-start 2 col-start-4 col-span-2 content-center">(This won't limit your options, it's just to help sorting and filtering!)</p>                        
                    </section>
                    <section className="flex flex-col items-center gap-10 justify-center">
                        <label htmlFor="bio" className="text-app-secondary text-bold text-2xl text-bold row-start-3">Bio: {accountInfo.bio.length} / 300</label>
                        <textarea required name="bio" maxLength={300} className="formInput text-2xl p-2 overflow-y-scroll md:overflow-y-auto min-h-[20vh]"
                            onChange={(e) => updateAccountInfo({...accountInfo, bio: e.target.value})}
                            value={accountInfo.bio || ""}>
                        </textarea>                        
                    </section>   
                </div>
                }
                {section === 3 &&
                <div className="flex flex-col gap-15">
                    <h1 className="text-5xl text-app-accent text-center font-sketch">Step 3: Skills and Goals</h1>
                    <div className="flex flex-col justify-center gap-10">
                        <label htmlFor="skill" className="text-app-secondary text-bold text-2xl text-bold text-center">Add a Skill (Max 10)</label>
                        <input name="skill" type="text" autoComplete="off" className="formInput text-2xl p-2" value={typedSkill || ""} onChange={(e) => setSkill(e.target.value)}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter'){
                                    e.preventDefault();
                                    addSkill();
                                }
                            }}>
                        </input>
                        <button className="text-3xl bg-app-accent/50 hover:bg-app-accent active:bg-app-secondary px-3 rounded-lg" onClick={() => addSkill()}>+</button>
                        <div className="flex flex-wrap justify-center gap-1">
                            {accountInfo.skills.map((skill, index) =>(
                                <p key={index} className="text-2xl text-center text-app-accent">
                                    {skill}{index === (accountInfo.skills.length - 1) ? "." : ","}
                                </p>
                            ))}     
                        </div>
                        <span className="text-lg text-app-muted text-end">{accountInfo.skills.length} / 10</span>
                    </div>
                    <div className="flex flex-col justify-center gap-10">
                        <label htmlFor="skill" className="text-app-secondary text-bold text-2xl text-bold text-center">Add a Goal (Max 5)</label>
                        <input name="skill" type="text" autoComplete="off" className="formInput text-2xl p-2" value={typedGoal || ""} onChange={(e) => setGoal(e.target.value)}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter'){
                                    e.preventDefault();
                                    addGoal();
                                }
                            }}>
                        </input>
                        <button className="text-3xl bg-app-accent/50 hover:bg-app-accent active:bg-app-secondary px-3 rounded-lg" onClick={() => addGoal()}>+</button>
                        <div className="flex flex-wrap justify-center gap-1">
                            {accountInfo.goals.map((goal, index) =>(
                                <p key={index} className="text-2xl text-center text-app-accent">
                                    {goal}{index === (accountInfo.goals.length -1) ? "." : ","}
                                </p>
                            ))}     
                        </div>
                        <span className="text-lg text-app-muted text-end">{accountInfo.goals.length} / 5</span>
                    </div> 
                </div>
                }
                <div className="w-full flex flex-row justify-center gap-10 items-center">
                    <button className={`cursor-pointer text-2xl font-bold md:text-4xl p-2 bg-app-accent/50 hover:bg-app-accent active:bg-app-secondary rounded-xl ${section === 1 ? "hidden" : ""}`}
                        onClick={() => setSection(section - 1)}>
                            Back
                    </button>
                    <button className={`cursor-pointer text-2xl font-bold md:text-4xl p-2 bg-app-accent/50 hover:bg-app-accent active:bg-app-secondary rounded-xl ${section === 3 ? "hidden" : ""}`}
                        onClick={() => nextSection()}>
                            Next
                    </button>   
                    <button className={`cursor-pointer text-2xl font-bold md:text-4xl p-2 bg-app-accent/50 hover:bg-app-accent active:bg-app-secondary rounded-xl ${section != 3 ? "hidden" : ""}`}
                        onClick={() => Join(accountInfo)}>
                            Join the Revolution!
                    </button>                 
                </div>

            </div>
        </div>
    )
}

export default function Setup() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-app-bg flex items-center justify-center text-app-text text-2xl">Loading...</div>}>
            <SetupForm />
        </Suspense>
    );
}