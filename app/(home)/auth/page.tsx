"use client"

import { account, ID } from "@/app/lib/appwrite"
import { useRouter } from "next/navigation"
// const useRouter = require("next/router")
import React, { useState } from "react"

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const router = useRouter();


    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await account.create(ID.unique(), email, password)
            await account.createEmailPasswordSession(email, password);
            router.push('/student')
        } catch (error: any) {
            setError(error.message)
        }
    }



    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await account.createEmailPasswordSession(email, password)
            if (email === "school@gmail.com") {
                router.push("/admin")
            }
            else {
                router.push("/student")
            }
        } catch (error: any) {
            setError(error.message)
        }
    }


    return (
        <div>
            <h1>Login/ Signup</h1>
            <form action="">
                <input type="email" value={email} placeholder="email" className="border" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="password" className="border" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin} className="border">Login</button>
                <button onClick={handleSignup} className="border">signup</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
};
export default Auth

