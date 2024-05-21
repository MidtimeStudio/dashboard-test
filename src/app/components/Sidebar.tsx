import { Button } from "@nextui-org/button"
import {
    CalendarPlus,
    Home,
    PackagePlus,
    Github,
    NotebookPen,
    Component,
    FileText,
    ListOrdered,
    UsersRound,
    CircleUser,
    Settings,
    DatabaseBackup,
    PieChart,
    ScanEye,
    History,
    Briefcase,
    MessageCircleMore
} from "lucide-react"
import Link from "next/link"
//import { Button } from "@/components/ui/button"

export const Sidebar = () => {
    const menu = [
        {
            index: 'Main',
            link_1: '/',
            topic_1: 'Home',
            icon_1: <Home className="md:w-5 md:h-5" />,
            link_2: '/profile',
            topic_2: 'Profile',
            icon_2: <CircleUser className="md:w-5 md:h-5" />
        },
        {
            index: 'Lists',
            link_1: '/miners',
            topic_1: 'Miners',
            icon_1: <UsersRound className="md:w-5 md:h-5" />,
            link_2: '/missions',
            icon_2: <Briefcase className="md:w-5 md:h-5" />,
            topic_2: 'Missions',
            link_3: '/orders',
            icon_3: <ListOrdered className="md:w-5 md:h-5" />,
            topic_3: 'Orders',
            link_4: '/blogs',
            topic_4: 'Blogs',
            icon_4: <FileText className="md:w-5 md:h-5" />
        },
        {
            index: 'General',
            link_1: '/elements',
            topic_1: 'Elements',
            icon_1: <Component className="md:w-5 md:h-5" />,
            link_2: '/notes',
            topic_2: 'Notes',
            icon_2: <NotebookPen className="md:w-5 md:h-5" />,
            link_3: '/chat',
            topic_3: 'Chat',
            icon_3: <MessageCircleMore className="md:w-5 md:h-5" />,
            link_4: '/packages',
            topic_4: 'Packages',
            icon_4: <PackagePlus className="md:w-5 md:h-5" />,
            link_5: '/calanders',
            topic_5: 'Calanders',
            icon_5: <CalendarPlus className="md:w-5 md:h-5" />
        },
        {
            index: 'Maintenance',
            link_1: '/settings',
            topic_1: 'Settings',
            icon_1: <Settings className="md:w-5 md:h-5" />,
            link_2: '/backup',
            topic_2: 'Backup',
            icon_2: <DatabaseBackup className="md:w-5 md:h-5" />,
            link_3: '/history',
            topic_3: 'History',
            icon_3: <History className="md:w-5 md:h-5" />
        },
        {
            index: 'Analytics',
            link_1: '/charts',
            topic_1: 'Charts',
            icon_1: <PieChart className="md:w-5 md:h-5" />,
            link_2: '/logs',
            topic_2: 'Logs',
            icon_2: <ScanEye className="md:w-5 md:h-5" />
        },
    ]
    return (
        <div className="gap-2.5 flex flex-col mb-[20px]">
            {menu.map((menu: any) => (
                <div key={menu} className="flex flex-col">
                    <span className="font-bold p-1 text-gray-100 md:flex hidden">{menu.index}</span>
                    <a href={menu.link_1} className="p-1 text-sm text-gray-400 hover:text-gray-50 transition-all flex items-center gap-2.5">
                        {menu.icon_1}
                        <span className="md:flex hidden">{menu.topic_1}</span>
                    </a>
                    <a href={menu.link_2} className="p-1 text-sm text-gray-400 hover:text-gray-50 transition-all flex items-center gap-2.5">
                        {menu.icon_2}
                        <span className="md:flex hidden">{menu.topic_2}</span>
                    </a>
                    <a href={menu.link_3} className="p-1 text-sm text-gray-400 hover:text-gray-50 transition-all flex items-center gap-2.5">
                        {menu.icon_3}
                        <span className="md:flex hidden">{menu.topic_3}</span>
                    </a>
                    <a href={menu.link_4} className="p-1 text-sm text-gray-400 hover:text-gray-50 transition-all flex items-center gap-2.5">
                        {menu.icon_4}
                        <span className="md:flex hidden">{menu.topic_4}</span>
                    </a>
                    <a href={menu.link_5} className="p-1 text-sm text-gray-400 hover:text-gray-50 transition-all flex items-center gap-2.5">
                        {menu.icon_5}
                        <span className="md:flex hidden">{menu.topic_5}</span>
                    </a>
                </div>
            ))}
            <a target="_blank" href="https://github.com/MidtimeLab">
                <Button className="gap-1 md:flex hidden" variant="bordered" color="success" >
                    <span className="md:flex hidden">Comming Soon...</span><Github className="" />
                </Button>
            </a>
        </div>
    )
}

export default Sidebar