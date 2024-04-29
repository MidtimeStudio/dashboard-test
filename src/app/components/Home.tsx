import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export const Home = () => {
    return (
        <div className="grid gap-[20px] grid-cols-4 auto-rows-custom">
            <Card className="col-span-1 row-span-3 ">
                <CardHeader className="font-bold text-[25px]">Main Users</CardHeader>
            </Card>
            <Card className="">
                <CardHeader className="font-bold">Total Users</CardHeader>
            </Card>
            <Card className="">
                <CardHeader className="font-bold">Total Products</CardHeader>
            </Card>
            <Card className="col-span-1 row-span-3">
                <CardHeader className="font-bold text-[25px]">Leads by Source</CardHeader>
            </Card>
            <Card className="">
                <CardHeader className="font-bold">Total Ratio</CardHeader>
            </Card>
            <Card className="">
                <CardHeader className="font-bold">Total Revenue</CardHeader>
            </Card>
            <Card className="col-span-2 row-span-2">
                <CardHeader className="font-bold  text-[25px]">Revenue Analytics</CardHeader>
            </Card>
            <Card className="">
                <CardHeader className="font-bold">Total Visit</CardHeader>
            </Card>
            <Card className="">
                <CardHeader className="font-bold">Profit Earned</CardHeader>
            </Card>
        </div>
    )
}

export default Home