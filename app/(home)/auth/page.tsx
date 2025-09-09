"use client"

import { account, ID } from "@/app/lib/appwrite"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const Auth = () => {
    const [email, setEmail] = useState("")m
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
            <form action="" className="space-y-6 h-[65vh] bg-gray-100 shadow-xl border py-3 rounded-md w-88 ml-68 mt-18 ">
                <h1 className="text-center text-green-600 font-semibold text-xl">Login/ Signup</h1>
                <div className="space-y-8 ml-10">
                    <label htmlFor="">Email:</label>
                    <input type="email" value={email} placeholder="Email" className="border px-3 py-2 w-68 rounded-sm outline-none font-sans text-gray-400 text-sm h-10" onChange={(e) => setEmail(e.target.value)} required /><br />
                    <label htmlFor="">Password:</label>
                    <input type="password" value={password} placeholder="Password" className="border px-3 py-2 w-68 rounded-sm outline-none h-10" onChange={(e) => setPassword(e.target.value)} required /><br />
                    <button onClick={handleLogin} className="border px-3 py-2 w-68 bg-green-600 rounded-sm text-white cursor-pointer">Login</button>
                    <button onClick={handleSignup} className="border w-68 py-2 px-3 border border-green-600 rounded cursor-pointer text-green-600">signup</button>
                </div>
            </form>
            <div className="text-red-400 font-sans ml-68 mt-3">
                {error && <p>{error}</p>}
            </div>
        </div>
    )
};
export default Auth

