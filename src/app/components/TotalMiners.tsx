import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody } from "@nextui-org/react";
import Link from "next/link";
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TotalMinersChart from "./chart/TotalMinersChart";

type Props = {
    dataKey: string;
    number: number | string;
    percentage: number;
    data: object[];
}

export default function TotalMiners (props: Props) {
    return (
        <Card className="h-[100%] flex">
            <div className="flex flex-1 flex-col justify-between">
                <CardHeader className="font-bold gap-2.5 ">Total Miners</CardHeader>
                <CardContent>
                    <div className="flex flex-2 flex-col mb-10">
                        <span className="font-bold text-5xl ">250</span>
                        <Link href={'/miners'}>
                            <span className="text-green-200">Show More...</span>
                        </Link>
                    </div>
                </CardContent>
            </div>
            <div className="flex flex-col justify-between p-2">
                <TotalMinersChart/>
                <div className="flex flex-col text-right ">
                    <span className="text-2xl font-semibold text-green-500">25%</span>
                    <span className="text-sm text-gray-400">{props.number}</span>
                </div>
            </div>
        </Card>
    )
}


