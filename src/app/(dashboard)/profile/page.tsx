'use client'
import ProfileCard from "@/app/components/profile/Profile";
import dynamic from "next/dynamic";

const TotalVisits = dynamic(() => import('@/app/components/profile/TotalVisits'), { ssr: false })

export default function Profile() {
    return (
        <div className="grid gap-[20px] grid-cols-3 auto-rows-custom ">
            <ProfileCard />
            <div className="col-span-2">
                <div className='flex flex-col'>
                    <span className='font-bold text-4xl'>Let{"'"}s check!</span>
                    <span className='text-slate-300'>How long you visit in Soju</span>
                </div>
                <TotalVisits/>
            </div>
        </div>
    )
}