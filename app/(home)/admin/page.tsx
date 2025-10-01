"use client";
import { useState, useEffect } from "react";
import { databases, databaseId, studentsCollectionId, ID } from "@/app/lib/appwrite";
import AuthGuard from "../components/AuthGuard";

const AdminPage = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [newStudent, setNewStudent] = useState({ id: "", name: "", age: "", class: "" });
  const [confirmModal, setConfirmModal] = useState(false);
  const [itemToDel, setItemToDel] = useState<string | null>(null);

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
    setNewStudent({ id: "", name: "", age: "", class: "" });
  };

  const deleteStudent = async (docId: string) => {
    await databases.deleteDocument(databaseId, studentsCollectionId, docId);
    fetchStudents();
  };

  const confirmDel = (docId: string) => {
    setItemToDel(docId);
    setConfirmModal(true);
  };

  const handleConfirm = () => {
    if (itemToDel) {
      deleteStudent(itemToDel);
      setConfirmModal(false);
      setItemToDel(null);
    }
  };

  const handleCancel = () => {
    setConfirmModal(false);
    setItemToDel(null);
  };

  const updateStudent = async (docId: string) => {
    await databases.updateDocument(databaseId, studentsCollectionId, docId, {
      id: newStudent.id,
      name: newStudent.name,
      age: Number(newStudent.age),
      class: newStudent.class,
    });
    fetchStudents();
    setNewStudent({ id: "", name: "", age: "", class: "" });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <AuthGuard>
      <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Admin Panel</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <input
            placeholder="ID"
            className="border rounded p-2 w-full"
            value={newStudent.id}
            onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
          />
          <input
            placeholder="Name"
            className="border rounded p-2 w-full"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            placeholder="Age"
            className="border rounded p-2 w-full"
            value={newStudent.age}
            onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
          />
          <input
            placeholder="Class"
            className="border rounded p-2 w-full"
            value={newStudent.class}
            onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
          />
        </div>

        <button
          onClick={addStudent}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded mb-8"
        >
          Add Student
        </button>

        <div className="bg-white rounded-lg shadow divide-y">
          {students.length === 0 && (
            <p className="p-4 text-gray-500">No students found.</p>
          )}
          {students.map((s) => (
            <div key={s.$id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4">
              <p className="text-gray-800 font-medium">
                {s.name} <span className="text-sm text-gray-500">({s.class})</span>
              </p>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => updateStudent(s.$id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => confirmDel(s.$id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {confirmModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4">Are you sure you want to delete this student?</p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={handleConfirm}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Confirm
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthGuard>
  );
};

export default AdminPage;
