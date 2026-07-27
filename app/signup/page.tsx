'use client'

import Header from "@/components/Header"
import Link from "next/link"
import { useState } from "react";
import { Country, State, City }  from 'country-state-city';
import { IState} from 'country-state-city'
import TermsOfService from "@/components/Terms";

export default function SignUp(){
    const Countries = Country.getAllCountries();
    const States = State.getAllStates();
    const [statesList, setStates] = useState([] as IState[]);
    const [ageValidated, setAgeValidated] = useState(false)
    const [userData, setUserData] = useState({
        fName: "",
        lName: "",
        email: "",
        age: 0,
        country: "",
        state: ""
    })
    const [showTerms, toggleTerms] = useState(false)
    const [termsViewed, setTermsViewed] = useState(false)

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
            setUserData({...userData, age: verifiedAge})
        }
    }
    function viewTerms(){
        if(showTerms === false){
            toggleTerms(true);
        } else{
            toggleTerms(false);
        }

        if(termsViewed === false){
            setTermsViewed(true);
        }
    }

    function createAccount(){
        const { age, ...stringFields } = userData;
        const isValid = age > 16 && Object.values(stringFields).every(val => val.trim() !== "");
        if(isValid && termsViewed){
            alert("Account created!")
        } else{
            alert("Please make sure all fields are valid and you have viewed the Terms of Service & User Agreement!")
        }
    }

    return(
        <div className="bg-app-bg min-h-screen flex flex-col relative">
            <Header />
            <form className="grow bg-app-accent/5 m-3 md:m-20 lg:m-50 flex flex-col lg:grid grid-cols-2 gap-10 lg:p-25 rounded-xl"
                onSubmit={() => createAccount()}>
                <input type="text" name="fName" className="formInput" required placeholder="First Name" onChange={(e) => setUserData({...userData, fName: e.target.value})}></input>
                <input type="text" name="lName" className="formInput" required placeholder="Last Name" onChange={(e) => setUserData({...userData, lName: e.target.value})}></input>
                <input type="email" name="email" className="formInput" required placeholder="Email Address" onChange={(e) => setUserData({...userData, email: e.target.value})}></input>
                <div className="flex flex-wrap gap-10 justify-center">
                    <label htmlFor="dob" className="text-2xl text-app-text">Date of Birth</label>
                    <input type="date" name="dob" className="formInput" required onChange={(e) => validateAge(e.target.value)}></input>
                    {ageValidated != true ? <p className="text-red-500 text-sm">Must be at least 16 years old to join!</p> : null}  
                </div>
                <select name="country" className="formInput" 
                    onChange={(e) => {
                        updateStatesList(e.target.value)
                        setUserData({...userData, country: e.target.value})
                    }} required>
                    <option value="">Country</option>
                    {Countries.map((country, index) => (
                        <option key={index} value={country.isoCode}>{country.name}</option>
                    ))}
                </select>
                <select name="state" className="formInput"
                    onChange={(e => setUserData({...userData, state:e.target.value}))}>
                    <option value="">State/Province</option>
                    {statesList.map((state, index) => (
                        <option key={index} value={state.name}>{state.name}</option>
                    ))}
                </select>
                <div className="col-span-full flex flex-nowrap justify-center items-center gap-10 p-10">
                    <label htmlFor="userAgreement" className="text-app-text text-center">
                        By checking this box I agree that all information provided is valid per the <button type="button" className="text-blue-400 cursor-pointer" onClick={() => viewTerms()}> Terms of Service & User Agreement</button>
                    </label>
                    <input type="checkbox" name="userAgreement" className="place-self-center size-5" required></input>
                </div>
                <Link href="/" className="text-2xl px-10 w-fit place-self-center py-2 border-3 border-app-accent/30 hover:bg-app-accent-hover/5 rounded-xl text-app-text content-center text-center">Cancel</Link>
                <button type="submit" className="text-2xl px-10 w-fit place-self-center py-2 border-3 border-app-border rounded-xl bg-app-accent hover:bg-app-accent-hover cursor-pointer">Continue</button>
            </form>
            {showTerms && 
                <div className="fixed h-full">
                    <button className="fixed right-2 md:right-5 top-2 md:top-5 border p-1 md:text-4xl text-red-500 cursor-pointer" onClick={() => viewTerms()}>X</button>
                    <TermsOfService />
                </div>
            }
        </div>
    )
}