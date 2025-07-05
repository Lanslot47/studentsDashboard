'use client'
import { useEffect, useState } from "react";
import { adminName } from "../(home)/admin/page";
import { students } from "./list";
import Link from "next/link";
const Result = () => {

    const [classFound, setClassFound] = useState('')
    const [admin, setAdmin] = useState<null | typeof students[3]>(null);
    const [classErr, setClassErr] = useState('')
    const found = students.find((item) => item.class === classFound.trim());
    const handleAdmin = (e: React.FormEvent) => {
        e.preventDefault();
        if (found) {
            setAdmin(found);
            setClassErr('');
        }
        else {
            setClassErr('Not found')
        }
    }
    return (
        <div>
            {adminName && <p className="text-black text-center">Hello <span className="text-gray-500 text-serif font-bold text-xl">{adminName},</span></p>}
            <form className="" onSubmit={handleAdmin}>
                <div className="flex items-center gap-3 px-4 py-6">
                    <input type="text" value={classFound} onChange={(e) => setClassFound(e.target.value)} />
                    <button className="hover:bg-blue-200">View student</button>
                    {/* <Link href="">View Staff</Link>
                    <Link href="">View everything</Link> */}
                    <div>
                        {
                            admin && (
                                <div>
                                    <p>{admin.name}</p>
                                    <p>{admin.class}</p>
                                    <p>{admin.id}</p>
                                </div>
                            )

                        }
                    </div>
                    <div>
                        {
                            classErr && <p>{classErr}</p>
                        } </div>


                </div>
            </form>
        </div>

    );
}

export default Result;
{/* {
                        students.map(list => (
                            <span className="flex gap-2">
                                <div>
                                    <p>Name</p>
                                    <p>{list.name}</p>
                                </div>
                                <div>
                                    <p>ID</p>
                                    <p className="">{list.id}</p>
                                </div>
                                <div>
                                    <p>Class</p>
                                    <p>{list.class}</p>
                                </div>
                            </span>
                        ))
} */}

// appright
// firebase