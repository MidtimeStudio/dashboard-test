import { Calendar, Home, HomeIcon } from "lucide-react"
import Link from "next/link"

export const Sidebar = () => {
    const menu = [
        {
            index: 'Main',
            link_1: '/',
            topic_1: 'Home',
            link_2: '/profile',
            topic_2: 'Profile'
        },
        {
            index: 'Lists',
            link_1: '/users',
            topic_1: 'Users',
            link_2: '/products',
            topic_2: 'Products',
            link_3: '/orders',
            topic_3: 'Orders',
            link_4: '/blogs',
            topic_4: 'Blogs'
        },
        {
            index: 'General',
            link_1: '/elements',
            topic_1: 'Elements',
            link_2: '/notes',
            topic_2: 'Notes',
            link_3: '/forms',
            topic_3: 'forms',
            link_4: '/packages',
            topic_4: 'Packages',
            link_5: '/calanders',
            topic_5: 'Calanders',
            test: <HomeIcon/>
        },
        {
            index: 'Maintenance',
            link_1: '/setting',
            topic_1: 'Setting',
            link_2: '/backup',
            topic_2: 'Backup'
        },
        {
            index: 'Analytics',
            link_1: '/charts',
            topic_1: 'Charts',
            link_2: '/logs',
            topic_2: 'Logs'
        },
    ]
    return (
        <div className="gap-2.5 flex flex-col mb-[20px]">
            {menu.map((menu: any) => (
                <div key={menu} className="flex flex-col">
                <span className="font-bold p-1 text-gray-100">{menu.index}</span>
                <a href={menu.link_1} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">{menu.topic_1}</span>
                </a>
                <a href={menu.link_2} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">{menu.topic_2}</span>
                </a>
                <a href={menu.link_3} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">{menu.topic_3}</span>
                </a>
                <a href={menu.link_4} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">{menu.topic_4}</span>
                </a>
                <a href={menu.link_5} className="p-1">
                    <span className="text-sm text-gray-400 hover:text-gray-50 transition-all">{menu.topic_5}</span>
                </a>
            </div>
            ))}
        </div>
    )
}

export default Sidebar