import Link from "next/link";
import { PiStudent } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";
const list = [
    {id:1, title:'Student', url:'../student', icon:<PiStudent size={25}/>},
    {id:2, title:'Admin',url:'./admin', icon:<RiAdminLine size={25}/>},
]
const DashboardPage = () => {
    return (
        <div className="h-screen w-64 bg-gradient-to-b via-white to-green-200 rounded-r-xl shadow-xl p-6">
            <h1 className="text-2xl font-extrabold text-green-600 text-center mb-4">TGC</h1>
            <div className="flex flex-col space-y-2">
                {
                    list.map((item) => (

                        <Link key={item.id} href={item.url} className="flex items-center px-4 py-3 gap-4 rounded-lg  hover:text-white hover:bg-green-600 duration-200 transition-all ease-in-out">
                            <span className="font-medium text-sm flex items-center gap-3" >
                                <p>{item.icon}</p>
                                {item.title}
                            </span>
                        </Link>
                    ))
                }
            </div>

        </div>
    );
}

export default DashboardPage;