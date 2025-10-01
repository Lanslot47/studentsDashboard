"use client"

import { account } from "@/app/lib/appwrite";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const user = await account.get()
                console.log("User Logged in:", user)
            } catch (error) {
                console.log("No user found, redirect to...")
                router.push('./auth/adminA');
            }
            finally {
                setLoading(false)
            }
        }
        checkUser()
    }, [router]);
    if (loading) {
        return <p>Loading ....</p>
    }
    return <>{children}</>
}