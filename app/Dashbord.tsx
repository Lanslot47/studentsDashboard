import Link from "next/link";
const DashboardPage = () => {
    return ( 
        <div className="p-4  bg-green-400 lg:w-60 h-[633px]">
            <Link className="text-3xl font-bold mb-6" href="/">The Green College</Link>
            <div className="space-y-4">
                <div className="p-4 bg-blue-100 rounded-md shadow">
                    <p>Welcome to the School dashboard</p>
                </div>
                <Link href="../student" className="block px-4 py-2 bg-blue-600  text-white rounded hover:bg-blue-700">
                    <p className="text-center">Student</p>
                </Link>
                <Link href="./admin" className="block px-4 py-2 bg-blue-600  text-white rounded hover:bg-blue-700">
                    <p className="text-center">Admin</p>
                </Link>
            </div>
        </div>
     );
}
 
export default DashboardPage;