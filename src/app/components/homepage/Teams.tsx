import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Keep Mining', value: 400, color: 'rgb(74 222 128)' },
    { name: 'Wythem', value: 700, color: 'rgb(34 211 238)' },
    { name: 'Wynic.Moneta', value: 550, color: 'rgb(79 70 229)' },
];

//const COLORS = ['rgb(74 222 128)', 'rgb(232 121 249)', '', 'rgb(79 70 229)'];

export default function LeadsByTeams() {
    return (
        <div>
            <PieChart width={250} height={300} className="relative bottom-10">
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((index) => (
                        <Cell key={index.name} fill={index.color} />
                    ))}
                </Pie>
                <Tooltip contentStyle={{ background: 'white', /*backdropFilter: 'blur(16px)',*/ fontWeight: 'bold', borderRadius: '10px', color: 'white' }} />
            </PieChart>
            {data.map((item) => (
                <div className="flex gap-2.5" key={item.name}>
                    <div className="flex gap-1">
                        <div className="w-5 h-5 self-center" style={{ backgroundColor: item.color }} />
                        -
                        <span className="font-semibold">{item.name}</span>
                    </div>
                    <span>{item.value} person</span>
                </div>
            ))}
            <a target="_blank" href="/chart">
            <span className="flex justify-center mt-10 hover:underline hover:text-gray-400">See All The Teams</span>
            </a>
        </div>
    )
}