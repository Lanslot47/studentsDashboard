'use client'
import { useState } from "react";
import { students } from "./list";
import adminName from "../Name";
const Result = () => {
    const [selectedClass, setSelectedClass] = useState("");
    const filteredStudents = students.filter((student) => student.class.toLowerCase() === selectedClass.toLowerCase());
    return (
        <div className="p-6 h-full w-[85vw] rounded-sm shadow-sm">
            <h1 className="flex gap-2 text-2xl">Hello<p className="font-bold">{adminName}</p></h1><br />
            <div className="p-4">
                <h1 className="text-xl">Search Students by Class</h1>
                <input type="text" placeholder="Type Class(e.g., ss1)" className="border p-2 mb-4 w-full max-w-sm" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} />
                <ul className="list-disc ml-6">
                    {filteredStudents.map((student, index) => (
                        <li key={index}>{student.name} ({student.class})</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Result;