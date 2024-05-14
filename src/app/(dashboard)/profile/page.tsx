'use client'
import ProfileCard from "@/app/components/Profile";
import dynamic from "next/dynamic";

const TotalVisits = dynamic(() => import('@/app/components/TotalVisits'), { ssr: false })

export default function Profile() {
    return (
        <div className="grid gap-[20px] grid-cols-3 auto-rows-custom ">
            <ProfileCard/>
            <TotalVisits/>
        </div>
    )
}