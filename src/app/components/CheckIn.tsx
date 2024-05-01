import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody } from "@nextui-org/react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function CheckIn() {
    return (
        <Card className="">
            <CardHeader className="font-bold">Check In</CardHeader>
        </Card>
    )
}