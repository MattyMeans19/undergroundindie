'use client'
import { addPrelaunchUser } from "@/app/devactions";
import { prelaunchUser } from "@/lib/definitions";
import React, {FormEvent} from "react";
import { useState } from "react";

export default  function PrelaunchForm() {
    const [formData, setFormData] = useState<prelaunchUser>({
        fname: "",
        lname: "",
        email: "",
        primaryRole: "",
        tier: "",
        timestamp: new Date().toISOString()
    });
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formData.tier != ""){}
        sendFormData();
    };

    async function sendFormData() {
        const formSubmission = await addPrelaunchUser(formData as prelaunchUser);
        if(formSubmission.success === "true") {
            setSubmitted(true);
        }
    }

    return(
        <div className="md:min-w-4xl self-center">
            {submitted ? (
                <div className="flex flex-col items-center text-center p-5 min-h-fit bg-app-bg self-center w-full border-5 rounded-xl border-app-border">
                    <h2 className="text-4xl text-app-accent mb-4">Thank you, {formData.fname}, for your interest in our platform! Keep an eye on your email for updates.</h2>
                </div>
            ) : (
                <form className="flex flex-col items-center text-center p-5 min-h-fit bg-app-bg self-center w-full border-5 rounded-xl border-app-border"
                    onSubmit={handleSubmit}
                >
                    <p className="text-2xl text-app-muted mb-5">
                    Fill out this form to stay up to date on our progress and provide feedback.
                    </p>
                    <div className="mb-4 flex w-full justify-between items-center">
                        <label className="w-full text-center md:text-3xl text-app-accent" htmlFor="fname">First Name</label>
                    <input id="fname" name="fname" required onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                    className="w-full md:text-3xl text-app-secondary bg-app-muted/30 border-2 border-app-border focus:outline-none focus:ring-2 focus:ring-app-accent" />
                    </div>
                    <div className="mb-4 flex w-full justify-between items-center">
                        <label className="w-full text-center md:text-3xl text-app-accent" htmlFor="lname">Last Name</label>
                        <input id="lname" name="lname" required onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                        className="w-full md:text-3xl text-app-secondary bg-app-muted/30 border-2 border-app-border focus:outline-none focus:ring-2 focus:ring-app-accent" />
                    </div>
                    <div className="mb-4 flex w-full justify-between items-center">
                        <label className="w-full text-center md:text-3xl text-app-accent" htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full md:text-3xl text-app-secondary bg-app-muted/30 border-2 border-app-border focus:outline-none focus:ring-2 focus:ring-app-accent" />
                    </div>
                    <div className="mb-4 flex w-full justify-between items-center">
                        <label className="w-full text-center md:text-3xl text-app-accent" htmlFor="primaryRole">Primary Role</label>
                        <input id="primaryRole" name="primaryRole" required onChange={(e) => setFormData({ ...formData, primaryRole: e.target.value })}
                        className="w-full md:text-3xl text-app-secondary bg-app-muted/30 border-2 border-app-border focus:outline-none focus:ring-2 focus:ring-app-accent" />
                    </div>
                    <div className="mb-4 flex w-full justify-between items-center">
                        <label className="w-full text-center md:text-3xl text-app-accent" htmlFor="tier">Tier</label>
                        <select id="tier" name="tier" required onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="w-full md:text-3xl text-app-secondary bg-app-muted/30 border-2 border-app-border focus:outline-none focus:ring-2 focus:ring-app-accent">
                            <option value="">Select a tier</option>
                            <option value="free">Free</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                    <button type="submit" className="mt-5 w-fit bg-app-accent text-app-bg p-3 text-2xl hover:bg-app-accent/80 focus:outline-none focus:ring-2 focus:ring-app-accent">
                        Submit
                    </button>
            </form>
            )}
        </div>
        
    )
}