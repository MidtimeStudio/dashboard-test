import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import MainMiners from "./MainMiners"
import TotalMiners from "./TotalMiners"
import TotalMissions from "./TotalMissions"
import CheckIn from "./CheckIn"
import { TotalMinersData, TotalMissionsData } from "@/lib/data/Miners&MissionsData"
import Clock from "./Clock"
import ChatCard from "./Chat"
//import LeadsByTeams from "./Teams"
import dynamic from "next/dynamic";
import { ResponsiveContainer } from "recharts"

const LeadsByTeams = dynamic(() => import('@/app/components/homepage/Teams'), { ssr: false })

export const Home = () => {
    return (
        <div className="grid gap-[20px] grid-cols-4 auto-rows-custom">
            <MainMiners/>
            <TotalMiners {...TotalMinersData as any}/>
            <TotalMissions {...TotalMissionsData as any}/>
            <Card className="col-span-1 row-span-3">
                <CardHeader className="font-bold text-[25px]">Leads by Teams</CardHeader>
                <CardContent><LeadsByTeams/></CardContent>
            </Card>
            <Clock/>
            <CheckIn/>
            <Card className="col-span-2 row-span-2">
                <CardHeader className="font-bold  text-[25px]">Today List</CardHeader>
            </Card>
            <Card className="">
                <CardHeader className="font-bold">Total Miners Visit</CardHeader>
            </Card>
            <ChatCard/>
        </div>
    )
}

export default Home