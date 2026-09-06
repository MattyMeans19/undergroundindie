'use server'
import {db} from "@/db/index";
import { prelaunchInfo } from "@/db/schema";
import {Resend} from "resend";
import { prelaunchUser } from "@/lib/definitions"

const resend = new Resend(process.env.RESEND_API_KEY);
const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://undergroundindie.com";

export async function addPrelaunchUser(user: prelaunchUser) {
    var fname = user.fname;
    var lname = user.lname;
    var email = user.email;
    var primaryRole = user.primaryRole;
    var tier = user.tier;
    var timestamp = user.timestamp;
    
    try{
        const response = await db.insert(prelaunchInfo).values({
            fname: fname,
            lname: lname,
            email: email,
            primaryRole: primaryRole,
            tier: tier,
            timestamp: timestamp,
        });
        if (response !=null) {
            sendPrelaunchEmail(user);
            return({ success: "true" });
        } else {
            console.error("Failed to add prelaunch user.");
            return({ success: "false" });
        }
    }
    catch (error) {
        console.error("Error inserting prelaunch user:", error);
        throw error;
    }
}

export async function sendPrelaunchEmail(user: prelaunchUser) {
    try{
        await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: user.email,
            subject: "Thanks for showing interest!",
            html: `<p>Hi ${user.fname},</p><p>Thank you for visiting our prelaunch page! Keep an eye out for updates!</p> 
            <img src="${baseUrl}/UGI.gif" alt="Underground Indie" width="600" style="max-width: 100%; height: auto; display: block;"/>
            <p>Best regards,</p><p>The Underground Indie Team</p>`
        });
    } catch (error) {
        console.error("Error sending prelaunch email:", error);
        throw error;
    }

    try{
        await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: 'matt_means.dev@outlook.com',
            subject: "New Prelaunch User Submission",
            html: `<p>New prelaunch user submission:</p><ul><li>First Name: ${user.fname}</li><li>Last Name: ${user.lname}</li><li>Email: ${user.email}</li><li>Primary Role: ${user.primaryRole}</li><li>Tier: ${user.tier}</li><li>Timestamp: ${user.timestamp}</li></ul>`
        });
    } catch (error) {
        console.error("Error sending admin notification email:", error);
        throw error;
    }
}