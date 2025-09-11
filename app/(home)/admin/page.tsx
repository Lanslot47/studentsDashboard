"use client";
import { useState, useEffect } from "react";
import {
  databases,
  databaseId,
  studentsCollectionId,
  ID,
} from "@/app/lib/appwrite";
import AuthGuard from "../components/AuthGuard";

const AdminPage = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    age: "",
    class: "",
  });

  const fetchStudents = async () => {
    const res = await databases.listDocuments(databaseId, studentsCollectionId);
    setStudents(res.documents);
  };

  const addStudent = async () => {
    await databases.createDocument(
      databaseId,
      studentsCollectionId,
      ID.unique(),
      {
        ...newStudent,
        age: Number(newStudent.age),
      }
    );
    setNewStudent({ id: "", name: "", age: "", class: "" }); // reset form
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
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl mb-6 font-bold text-center">Admin Panel</h1>

        {/* Add Student Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            placeholder="ID"
            className="border p-2 rounded w-full"
            value={newStudent.id}
            onChange={(e) =>
              setNewStudent({ ...newStudent, id: e.target.value })
            }
          />
          <input
            placeholder="Name"
            className="border p-2 rounded w-full"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
          />
          <input
            placeholder="Age"
            className="border p-2 rounded w-full"
            value={newStudent.age}
            onChange={(e) =>
              setNewStudent({ ...newStudent, age: e.target.value })
            }
          />
          <input
            placeholder="Class"
            className="border p-2 rounded w-full"
            value={newStudent.class}
            onChange={(e) =>
              setNewStudent({ ...newStudent, class: e.target.value })
            }
          />
        </div>
        <button
          onClick={addStudent}
          className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Add Student
        </button>

        {/* Students List */}
        <ul className="mt-8 space-y-3">
          {students.map((s) => (
            <li
              key={s.$id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b py-2 gap-2"
            >
              <span>
                {s.name} ({s.class})
              </span>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => updateStudent(s.$id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteStudent(s.$id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AuthGuard>
  );
};

export default AdminPage;
