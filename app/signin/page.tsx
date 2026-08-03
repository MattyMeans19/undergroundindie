'use client'
import Header from "@/components/Header";
import { getAccountInfo } from "@/lib/test-data/user-data";
import { AccountInfo } from "@/lib/definitions"
import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function SignIn(){
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const [accountInfo, setAccountInfo] = useState<AccountInfo>(getAccountInfo)

    useEffect(() => {
        setAccountInfo(getAccountInfo());
    }, []);
    
    function handleLogin(){
        if (login.username === accountInfo.userName && login.password === accountInfo.password){
            redirect("/dashboard")
        } else{
            alert("Incorrect username or password. Please try again.")
        }
    }
    return(
        <div className="min-h-screen bg-app-bg relative flex flex-col gap-20">
            <Header />
            <div className="items-center border-3 rounded-xl border-app-border grow md:m-15 lg:m-40 content-center bg-app-accent/5">
                <Link href="/" className="text-lg text-app-text ml-10">← Back</Link>
                <p className="text-5xl text-app-accent text-center p-10">Welcome back to the revolution!</p>
                <div className="flex flex-col md:grid grid-cols-3 gap-5 md:p-15 lg:p-40 items-center h-full">
                    <label htmlFor="user-name" className="text-2xl text-app-text text-end">User Name: </label>
                    <input type="text" name="user-name" autoComplete="yes" className="formInput md:col-span-2 lg:col-span-1" onChange={(e) => setLogin({...login, username: e.target.value})}></input>
                    <label htmlFor="password" className="text-2xl text-app-text text-end row-start-2">Password: </label>
                    <input type="password" name="password" autoComplete="yes" className="formInput col-start-2 row-start-2 md:col-span-2 lg:col-span-1" onChange={(e) => setLogin({...login, password: e.target.value})}></input>
                    <button className="rounded-2xl bg-app-accent w-60 place-self-center py-2 text-2xl row-start-3 col-start-2"
                    onClick={() => handleLogin()}>
                        Sign In
                    </button>
                </div>                
            </div>

        </div>
    )
}