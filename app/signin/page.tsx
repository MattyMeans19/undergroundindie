import Header from "@/components/Header";
import Link from "next/link";

export default function SignIn(){
    return(
        <div className="min-h-screen bg-app-bg relative flex flex-col gap-20">
            <Header />
            <div className="items-center border-3 rounded-xl border-app-border grow md:m-15 lg:m-40 content-center bg-app-accent/5">
                <Link href="/" className="text-lg text-app-text ml-10">← Back</Link>
                <p className="text-5xl text-app-accent text-center p-10">Welcome back to the revolution!</p>
                <form className="flex flex-col md:grid grid-cols-3 gap-5 md:p-15 lg:p-40 items-center h-full">
                    <label htmlFor="user-name" className="text-2xl text-app-text text-end">User Name: </label>
                    <input type="text" name="user-name" autoComplete="yes" className="formInput md:col-span-2 lg:col-span-1"></input>
                    <label htmlFor="password" className="text-2xl text-app-text text-end row-start-2">Password: </label>
                    <input type="password" name="password" autoComplete="yes" className="formInput col-start-2 row-start-2 md:col-span-2 lg:col-span-1"></input>
                    <button className="rounded-2xl bg-app-accent w-60 place-self-center py-2 text-2xl row-start-3 col-start-2">Sign In</button>
                </form>                
            </div>

        </div>
    )
}