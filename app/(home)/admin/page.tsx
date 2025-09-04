// admin.tsx
"use client";
import { useState, useEffect } from "react";
import { databases, databaseId, studentsCollectionId, ID } from "@/app/lib/appwrite";
import AuthGuard from "../components/AuthGuard"

const AdminPage = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [newStudent, setNewStudent] = useState({ id: "", name: "", age: "", class: "" });

  const fetchStudents = async () => {
    const res = await databases.listDocuments(databaseId, studentsCollectionId);
    setStudents(res.documents);
  };

  const addStudent = async () => {
    await databases.createDocument(databaseId, studentsCollectionId, ID.unique(), {
      ...newStudent,
      age: Number(newStudent.age),
    });
    fetchStudents();
  };

  const deleteStudent = async (docId: string) => {
    await databases.deleteDocument(databaseId, studentsCollectionId, docId);
    fetchStudents();
  };

  const updateStudent = async (docId: string) => {
    await databases.updateDocument(databaseId, studentsCollectionId, docId, {
      name: "Updated Name",
    });
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <AuthGuard>
      <div className="p-6">
      <h1 className="text-2xl mb-4 font-bold">Admin Panel</h1>

      <div className="space-y-2 mb-6">
        <input
          placeholder="ID"
          className="border p-2"
          value={newStudent.id}
          onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })} />
        <input
          placeholder="Name"
          className="border p-2"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
        <input
          placeholder="Age"
          className="border p-2"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })} />
        <input
          placeholder="Class"
          className="border p-2"
          value={newStudent.class}
          onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })} />
        <button onClick={addStudent} className="bg-green-600 text-white px-4 py-2 rounded">
          Add Student
        </button>
      </div>

      <ul>
        {students.map((s) => (
          <li key={s.$id} className="flex justify-between items-center border-b py-2">
            {s.name} ({s.class})
            <div className="flex gap-2">
              <button onClick={() => updateStudent(s.$id)} className="bg-blue-500 text-white px-2 rounded">Update</button>
              <button onClick={() => deleteStudent(s.$id)} className="bg-red-500 text-white px-2 rounded"> Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </AuthGuard>
  );
};

export default AdminPage;
