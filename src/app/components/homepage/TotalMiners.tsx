import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody } from "@nextui-org/react";
//import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';//import TotalMinersChart from "../../components/ui/chart/TotalMinersChart";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/chart/TotalMiners&MissionsChart";
import { UsersRound } from "lucide-react";
//import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { Link } from "@nextui-org/react";

type Props = {
    miners: string;
    month: string;
    number: number | string;
    percentage: number;
    time: string;
    data: object[];
}

const CustomTooltip = ({}) => {

      return (
        <div className="custom-tooltip">
          <p className="label">eee</p>
          <p className="intro">ppp</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    return null;
  };

export default function TotalMiners(props: Props) {
    return (
        <Card className="h-[100%] flex">
            <div className="flex flex-1 flex-col justify-between">
                <CardHeader className="font-bold gap-2.5 ">Total Miners</CardHeader>
                <CardContent>
                    <div className="flex flex-2 flex-col mb-10">
                        <span className="font-bold text-5xl ">250</span>
                        <a href={'/miners'}>
                            <span className="text-green-200">Show More...</span>
                        </a>
                    </div>
                </CardContent>
            </div>
            <div className="flex flex-col justify-between p-2">
                <AlertDialog >
                    <AlertDialogTrigger asChild>
                        <UsersRound className="w-[70%] h-[70%] self-center cursor-pointer hover:text-slate-500 transition-all" />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="h-[700px] ">
                        <div className="w-[50%] h-[80%] self-center">
                            <ResponsiveContainer width="200%" height="100%" className=''>
                                <BarChart width={500}
                                    height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} data={props.data}>
                                    <XAxis dataKey={props.month} />
                                    {/*<CartesianGrid strokeDasharray="3 3" />*/}
                                    <Tooltip contentStyle={{ background: 'rgb(24 24 27)', backdropFilter: '', fontWeight: 'bold', borderRadius: '10px', borderTopColor: 'rgb(30 41 59)', borderLeftColor: 'rgb(30 41 59)', borderBottomColor: 'rgb(30 41 59)', borderRightColor: 'rgb(30 41 59)' }} />
                                    {/*<Tooltip content={<CustomTooltip />} />*/}
                                    <Line connectNulls type="monotone" dataKey={props.miners} stroke="rgb(34 197 94)" strokeWidth={2} dot={false} />
                                    <Legend />
                                    <Bar dataKey={props.miners} fill="rgb(34 197 94)" activeBar={<Rectangle fill="rgb(21 128 61)" stroke="rgb(220 252 231)" />} />
                                </BarChart>
                            </ResponsiveContainer>
                            <div className="ml-[60px]">
                                <AlertDialogTitle className="text-2xl">Total Miners Bar Chart</AlertDialogTitle>
                                <AlertDialogDescription>Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium text-muted-foreground opacity-100">Esc</kbd> or click button "Continue" to exit</AlertDialogDescription>
                                <Link isBlock showAnchorIcon href="/miners" color="success">Search the miners</Link>
                            </div>
                        </div>
                        <AlertDialogFooter className="">
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <div className="flex flex-col text-right ">
                    <span className="text-2xl font-semibold text-green-500">{props.percentage}%</span>
                    <span className="text-sm text-gray-400">{props.time}</span>
                </div>
            </div>
        </Card>
    )
}


