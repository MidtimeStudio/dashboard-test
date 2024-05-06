'use client'
import ProfileCard from "@/app/components/Profile";
import TotalVisits from "@/app/components/TotalVisits";

export default function Profile() {
    return (
        <div className="grid gap-[20px] grid-cols-3 auto-rows-custom ">
            <ProfileCard/>
            <TotalVisits/>
        </div>
    )
}