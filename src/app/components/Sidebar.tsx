import { Home } from "lucide-react"
import Link from "next/link"

export const Sidebar = () => {
    return (
        <div className="gap-2.5 flex flex-col mb-[20px]">
            <div className="flex flex-col">
                <span className="font-bold p-1 text-gray-100">Main</span>
                <Link href={'/'} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">Home</span>
                </Link>
                <Link href={'/'} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">Profile</span>
                </Link>
            </div>
            <div className="flex flex-col">
                <span className="font-bold p-1 text-gray-100">Lists</span>
                <Link href={'/'} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">Users</span>
                </Link>
                <Link href={'/'} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">Products</span>
                </Link>
                <Link href={'/'} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">Orders</span>
                </Link>
            </div>
            <div className="flex flex-col">
                <span className="font-bold p-1 text-gray-100">Main</span>
                <Link href={'/'} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">Home</span>
                </Link>
                <Link href={'/'} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">Profile</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar