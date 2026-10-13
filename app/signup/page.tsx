'use client'

import Header from "@/components/Header"
import Link from "next/link"
import { SubmitEvent, useState } from "react";
import { IState} from 'country-state-city'
import TermsOfService from "@/components/Terms";
import { redirect } from "next/navigation";

export default function SignUp(){
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [showTerms, toggleTerms] = useState(false)
    const [termsViewed, setTermsViewed] = useState(false)

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

    function createAccount(event: SubmitEvent){
        event.preventDefault();
        if(termsViewed){
            const params = new URLSearchParams({
                ...userData, 
            });
            redirect(`/setup?${params.toString()}`)
        } else{
            alert("Please make sure all fields are valid and you have viewed the Terms of Service & User Agreement!")
        }
    }

    return(
        <div className="bg-app-bg min-h-screen flex flex-col relative">
            <Header />
            <form className="grow bg-app-card p-10 m-5 md:m-20 lg:m-50 flex flex-col gap-10 lg:p-25 rounded-xl"
                onSubmit={(e) => createAccount(e)}>
                <h1 className="text-4xl text-app-primary text-center mb-25">Create Your Account</h1>
                <input type="email" name="email" className="formInput" required placeholder="Email Address" onChange={(e) => setUserData({...userData, email: e.target.value})}></input>
                <input type="password" name="password" className="formInput" required placeholder="Password" onChange={(e) => setUserData({...userData, password: e.target.value})}></input>
                
                <div className="col-span-full flex flex-nowrap justify-center items-center gap-10 p-10">
                    <label htmlFor="userAgreement" className="text-app-primary text-center">
                        By checking this box I agree that all information provided is valid per the <button type="button" className="text-blue-400 cursor-pointer" onClick={() => viewTerms()}> Terms of Service & User Agreement</button>
                    </label>
                    <input type="checkbox" name="userAgreement" className="place-self-center size-5" required></input>
                </div>
                <button type="submit" className="text-2xl px-10 w-fit place-self-center py-2 border-3 border-app-border rounded-xl bg-app-accent hover:bg-app-accent-hover cursor-pointer">Continue</button>
                <Link href="/" className="text-2xl px-10 w-fit place-self-center py-2 border-3 border-app-accent/30 hover:bg-app-accent-hover/5 rounded-xl text-app-primary content-center text-center">Cancel</Link>
            </form>
            {showTerms && 
                <div className="fixed h-full">
                    <button className="fixed right-2 md:right-5 top-2 md:top-17 border px-1 md:text-4xl bg-red-500 cursor-pointer" onClick={() => viewTerms()}>X</button>
                    <TermsOfService />
                </div>
            }
        </div>
    )
}