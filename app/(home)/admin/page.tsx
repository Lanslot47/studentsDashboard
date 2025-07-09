'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { students } from "@/app/demo/list";
//  const adminName = 'Ishaq';
import adminName from "@/app/Name";
const AdminPage = () => {
    const router = useRouter();
    const [studentId, setStudentId] = useState('');
    const [admin, setAdmin] = useState<null | typeof students>(null);
    const [error, setError] = useState('');
    const [studentName, setStudentName] = useState('');
    const handleAdmin = (e: React.FormEvent) => {
        e.preventDefault();
        let found = students.map(std => std);
        let adminKey = 'Password';


        if (adminKey == studentId && adminName == studentName) {
            setAdmin(found)
            setError('');
            router.push('../demo')
        }
        else {
            setError('Enter correct Password')
        }
    }
    return (
        <>
            <div id="div" className="max-w-md h-full p-6 bg-red-300">
                <h1 className="text-2xl font-bold mb-4">
                    Enter Admin Key
                </h1>
                <form onSubmit={handleAdmin} className="space-y-4">
                    <input type="text" id="one" placeholder="Enter Username" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="w-full p-2 border rounded" />
                    <input type="password" placeholder="Enter your id" value={studentId} onChange={(e) => setStudentId(e.target.value)} className="w-full p-2 border rounded" />
                    <button type="submit" className="w-full text-white p-2 rounded hover:bg-blue-700">View Info</button>
                </form>
                {error && <p className="text-blue-500 font-bold text-1xl">{error}</p>}
            </div >

        </>
    );

}

export default AdminPage;