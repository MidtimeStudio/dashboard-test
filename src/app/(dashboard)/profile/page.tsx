'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import sharky from '@/lib/assets/shark from my town.png'
import { useEffect, useState } from "react";

export default function Profile() {
    const [copied, setCopiedId] = useState<string>();
    const [copiedText, setCopiedText] = useState<string>();
    const [copiedImage, setCopiedImage] = useState<string>();

    useEffect(() => {
        (async function run() {
            if (copied?.includes('text')) {
                // Reading text with readText
                const text = await navigator.clipboard.readText();
                setCopiedText(text);
            } else if (copied?.includes('image')) {
                // Reading image data with read
                const clipboard = await navigator.clipboard.read();
            }
        })();
        setTimeout(() => {
            setCopiedId(undefined);
            setCopiedText(undefined);
        }, 3000)
    }, [copied]);
    const { toast } = useToast()
    return (
        <div className="flex flex-row gap-10">
            <Card className="col-span-1 ">
                <CardHeader className="">
                    <div className="flex gap-3">
                        <Avatar className="w-[70px] h-[70px] flex justify-center">
                            <AvatarImage src={sharky.src} alt="" />
                            <AvatarFallback>K</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center">
                            <span className="font-semibold text-[25px]">Kirano</span>
                            <div className="flex gap-6">
                                <span className="text-gray-400 text-[15px] cursor-pointer hover:text-gray-200 transition-all w-[130px]">
                                    @kirano0608
                                </span>
                                <Badge className="text-xs h-[20px] flex self-center">Active</Badge>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="border-t-3 gap-7">
                    <div className="mt-4">
                        <div className="flex flex-col p-2">
                            <span className="font-extrabold text-gray-400 text-lg">DISPLAY NAME</span>
                            <span className="text-slate-200 text-sm">Kirano</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="font-extrabold text-gray-400 text-lg">USERNAME</span>
                            <span className="text-slate-200 text-sm">kirano0608</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="font-extrabold text-gray-400 text-lg">EMAIL</span>
                            <span
                            onClick={async () => {
                                // Writing text with writeText and a fallback using copy-to-clipboard
                                if ('clipboard' in navigator) {
                                    await navigator.clipboard.writeText('kirano.osas@gmail.com')
                                } else {
                                    console.log('fuck u!')
                                }
                                //setCopiedId('write-text')
                                toast({
                                    //title: "Ding Dong",
                                    description: "This email has been copied. ✅",
                                    })
                            }}
                            className="text-slate-200 text-sm cursor-pointer hover:text-gray-200 transition-all">kirano.osas@gmail.com</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}