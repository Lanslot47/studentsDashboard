"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/app/lib/appwrite";
const adminAuth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const checkM = await account.get()
            if (checkM) {
                if (email === "school@gmail.com") {
                    router.push("/admin");
                } else {
                    setError("Incorrect Info")
                }
            }
            else {
                await account.createEmailPasswordSession(email, password);
                if (email === "school@gmail.com") {
                    router.push("/admin");
                } else {
                    setError("Incorrect Info")
                }
            }

        } catch (error: any) {
            setError(error.message);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md bg-white rounded-lg h-full shadow-lg p-6 space-y-6"
            >
                <h1 className="text-center text-green-600 font-semibold text-2xl">
                    Welcome to Admin Login
                </h1>

                <div className="space-y-5">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Email"
                            className="w-full border px-3 py-2 rounded outline-none text-gray-700 focus:ring-1 focus:ring-green-500"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            className="w-full border px-3 py-2 rounded outline-none text-gray-700 focus:ring-1 focus:ring-green-500"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    >
                        Login
                    </button>

                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </form>
        </div>
    )
}
export default adminAuth