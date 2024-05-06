import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { CircleAlert, Edit } from "lucide-react"
import { useEffect, useState } from "react";
import sharky from '@/lib/assets/shark from my town.png'
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

export default function ProfileCard() {
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
        <Card className="">
            <CardHeader className="">
                <div className="flex gap-3">
                    <Avatar className="w-[70px] h-[70px] flex justify-center">
                        <AvatarImage src={sharky.src} alt="" />
                        <AvatarFallback>K</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-2.5 ">
                            <span className="font-semibold text-[25px]">Kirano</span>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Edit className="self-center w-5 h-5 text-slate-400 cursor-pointer transition-all hover:text-slate-200" />
                                    </TooltipTrigger>
                                    <TooltipContent>Edit your profile</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="flex">
                            <span className="text-gray-400 text-[15px] hover:text-gray-200 transition-all w-[130px]">
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
                        <span className="font-extrabold text-gray-300 text-md">DISPLAY NAME</span>
                        <span className="text-slate-200 text-sm">Kirano</span>
                    </div>
                    <div className="flex flex-col p-2">
                        <span className="font-extrabold text-gray-300 text-md">USERNAME</span>
                        <span className="text-slate-200 text-sm">kirano0608</span>
                    </div>
                    <div className="flex flex-col p-2">
                        <div className="flex flex-row justify-between">
                            <span className="font-extrabold text-gray-300 text-md">EMAIL</span>
                            <Popover placement="bottom" showArrow={true}>
                                <PopoverTrigger>
                                    <CircleAlert className="cursor-pointer hover:text-gray-500 transition-all w-5 h-5" />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="px-1 py-2">
                                        <div className="text-tiny">You can click the gmail to copy ( •̀ ω •́ )✧</div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
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
                            className="text-slate-200 text-sm cursor-pointer hover:text-gray-400 transition-all">
                            kirano.osas@gmail.com
                        </span>
                    </div>
                    <div className="flex flex-col p-2">
                        <span className="font-extrabold text-gray-300 text-md">TEAM</span>
                        <Badge className="text-xs h-[20px] flex self-start bg-slate-100 text-slate-900">Keep Mining</Badge>
                    </div>
                    <div className="flex flex-col p-2">
                        <span className="font-extrabold text-gray-300 text-md">JOB</span>
                        <span className="text-slate-200 text-sm">Web Developer</span>
                    </div>
                    <div className="flex flex-col p-2">
                        <span className="font-extrabold text-gray-300 text-md">JOINED</span>
                        <span className="text-slate-200 text-sm">2023-08-20</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
