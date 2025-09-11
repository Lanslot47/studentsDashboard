"use client";
import { useState } from "react";
import Link from "next/link";
import { PiStudent } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";

const list = [
  { id: 1, title: "Student", url: "../student", icon: <PiStudent size={20} /> },
  { id: 2, title: "Admin", url: "./admin", icon: <RiAdminLine size={20} /> },
];

const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-green-600 text-white p-4">
        <h1 className="text-xl font-bold">TGC</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gradient-to-b via-white to-green-200 rounded-r-xl shadow-xl p-6 transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h1 className="hidden md:block text-2xl font-extrabold text-green-600 text-center mb-6">
          TGC
        </h1>

        <div className="flex flex-col space-y-2">
          {list.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="flex items-center px-4 py-3 gap-4 rounded-lg hover:text-white hover:bg-green-600 duration-200 transition-all ease-in-out"
              onClick={() => setOpen(false)} // close drawer on click
            >
              <span className="font-medium text-sm flex items-center gap-3">
                {item.icon}
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default DashboardPage;
