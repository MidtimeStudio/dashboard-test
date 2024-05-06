import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/chart/TotalMiners&MissionsChart";
import { Briefcase } from "lucide-react";

type Props = {
    missions: string;
    month: string;
    number: number | string;
    add_or_minus: number;
    time: string;
    data: object[];
}

export default function TotalMissions (props: Props) {
    return (
        <Card className="h-[100%] flex">
            <div className="flex flex-1 flex-col justify-between">
                <CardHeader className="font-bold gap-2.5 ">Total Missions</CardHeader>
                <CardContent>
                    <div className="flex flex-2 flex-col mb-10">
                        <span className="font-bold text-5xl ">110K</span>
                        <a href={'/missions'}>
                            <span className="text-green-200">Show More...</span>
                        </a>
                    </div>
                </CardContent>
            </div>
            <div className="flex flex-col justify-between p-2">
                <AlertDialog >
                    <AlertDialogTrigger asChild>
                        <Briefcase className="w-[70%] h-[70%] self-center cursor-pointer hover:text-slate-500 transition-all" />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="h-[700px] ">
                        <div className="w-[50%] h-[80%] self-center">
                            <ResponsiveContainer width="200%" height="100%" className=''>
                                <LineChart width={500}
                                    height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} data={props.data}>
                                    <CartesianGrid strokeDasharray="0 0" />
                                    <XAxis dataKey={props.month} />
                                    <YAxis />
                                    <Tooltip contentStyle={{ background: '', backdropFilter: 'blur(16px)', fontWeight: 'bold', borderRadius: '10px' }} />
                                    <Line connectNulls type="monotone" dataKey={props.missions} stroke="rgb(34 197 94)" strokeWidth={2} dot={false} />
                                    <Legend />
                                </LineChart>
                            </ResponsiveContainer>
                            <div className="ml-[60px]">
                                <AlertDialogTitle className="text-2xl">Total Miners Line Chart</AlertDialogTitle>
                                <AlertDialogDescription>Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium text-muted-foreground opacity-100">Esc</kbd> or click button "Continue" to exit</AlertDialogDescription>
                                <Link isBlock showAnchorIcon href="/missions" color="success">Search the missions</Link>
                            </div>
                        </div>
                        <AlertDialogFooter className="">
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <div className="flex flex-col text-right ">
                    <span className="text-2xl font-semibold text-green-500">{props.add_or_minus}</span>
                    <span className="text-sm text-gray-400">Last month</span>
                </div>
            </div>
        </Card>
    )
}