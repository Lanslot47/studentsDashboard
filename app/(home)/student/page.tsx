'use client';
import { useState } from "react";
import { students } from "@/app/demo/list";
const StudentsPage = () => {
    const [studentId, setStudentId] = useState('');
    const [student, setStudent] = useState<null | typeof students[2]>(null);
    const [error, setError] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const found = students.find((item) => item.id === studentId.trim());
        if (found) {
            setStudent(found);
            setError('');
        }
        else {
            setStudent(null)
            setError('No student with ID')
        }

    }
    return (
        <div className="max-w-md  p-6">
            <h1 className="text-2xl font-bold mb-4">
                Student access
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Enter your student id" value={studentId} onChange={(e) => setStudentId(e.target.value)} className="w-full p-2 border rounded" />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">View Info</button>
            </form>
            {error && <p className="text=red-500 mt-4">{error}</p>}
            {student && (
                <div className="mt-6 p-4 border rounded bg-gray-100">
                    <h2 className="text-xl font-bold mb-2">Student Info</h2>
                    <p><strong>Name:</strong>{student.name}</p>
                    <p><strong>Age:</strong>{student.age}</p>
                    <p><strong>Class:</strong>{student.class}</p>
                </div>
            )}
            {
                
            }
        </div> 
    );
}
export default StudentsPage;