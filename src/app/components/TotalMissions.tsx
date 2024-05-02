import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody } from "@nextui-org/react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TotalMissions () {
    const data = [
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 8800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
    ]
    return (
        <Card className="h-[100%] flex">
            <div className="flex flex-1 flex-col justify-between">
                <CardHeader className="font-bold gap-2.5 ">Total Missions</CardHeader>
                <CardContent>
                    <div className="flex flex-2 flex-col mb-10">
                        <span className="font-bold text-5xl ">110K</span>
                        <Link href={'/missions'}>
                            <span className="text-green-200">Show More...</span>
                        </Link>
                    </div>
                </CardContent>
            </div>
            <div className="flex flex-col justify-between p-2">
                <div className="w-[100%] h-[100%]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={90} data={data}>
                            <Line type="monotone" dataKey="pv" stroke="green" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col text-right ">
                    <span className="text-2xl font-semibold text-green-500">-48</span>
                    <span className="text-sm text-gray-400">Last month</span>
                </div>
            </div>
        </Card>
    )
}