import { Card, CardHeader } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mac',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Sep',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Oct',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Nov',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Dec',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function TotalVisits() {
    return (
        <div className="col-span-2">
            <div className='flex flex-col'>
                <span className='font-bold text-4xl'>Let{"'"}s check!</span>
                <span className='text-slate-300'>How long you visit in Soju</span>
            </div>
            <div style={{ width: '100%', height: 300 }} className='mt-5'>
                <AreaChart width={830} height={350} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" display={'none'}/>
                    <CartesianGrid strokeDasharray="0 1" />
                    <Tooltip contentStyle={{ background: '', backdropFilter: 'blur(16px)', fontWeight: 'bold', borderRadius: '10px', border: '' }}/>
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
        </div>
    );
}