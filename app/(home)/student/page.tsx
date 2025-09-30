// students.tsx
"use client";
import { useState, useEffect } from "react";
import { databases, databaseId, studentsCollectionId } from "@/app/lib/appwrite";
import { Query } from "appwrite";
import AuthGuard from "../components/AuthGuard";

const StudentsPage = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await databases.listDocuments(databaseId, studentsCollectionId, [
        Query.equal("id", studentId.trim())
      ]);

      if (res.documents.length > 0) {
        setStudent(res.documents[0]);
        setError("");
      } else {
        setStudent(null);
        setError("No student with that ID");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching student");
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 p-5">
      <div className="w-full max-w-md bg-white rounded-lg h-full shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Student access</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your student id"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-600 cursor-pointer text-white p-2 rounded hover:bg-green-700"
          >
            View Info
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {student && (
          <div className="mt-6 p-4 border rounded bg-gray-100">
            <h2 className="text-xl font-bold mb-2">Student Info</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Class:</strong> {student.class}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsPage;
