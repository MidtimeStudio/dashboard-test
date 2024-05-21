import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { topMiners } from "@/lib/data/MainMinersData"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"
import { Ghost, MoreHorizontal, User, CalendarRange, Trash, MessageCircleMore, Briefcase, CircleAlert, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
//import copy from 'copy-to-clipboard';
import { toast } from "sonner"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover"

export default function MainMiners() {
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
                const images = await Promise.all(
                    clipboard
                        .filter(clipboardItem => clipboardItem.types.includes('image/png'))
                        .map(clipboardItem => clipboardItem.getType('image/png'))
                );
                // UI supports one image, so only set one
                setCopiedImage(URL.createObjectURL(images[0]));
            }
        })();
        setTimeout(() => {
            setCopiedId(undefined);
            setCopiedText(undefined);
        }, 3000)
    }, [copied]);
    const { toast } = useToast()
    return (
        <Card className="col-span-1 row-span-3 ">
            <CardHeader className="flex justify-between flex-row">
                <span className="font-bold text-[25px]">Main Miners</span>
                <Popover placement="bottom" showArrow={true}>
                    <PopoverTrigger>
                        <CircleAlert className="cursor-pointer hover:text-gray-500 transition-all w-5 h-5 " />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-tiny">You can click the gmail to copy {'( •̀ ω •́ )✧'}</div>
                        </div>
                    </PopoverContent>
                </Popover>
            </CardHeader>
            {topMiners.map(user => (
                <CardContent className="" key={user as any}>
                    <div className="">
                        <div className="flex gap-3">
                            <Avatar>
                                <AvatarImage src={user.img.src} alt="" />
                                <AvatarFallback>{user.loading}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col ">
                                <span className="font-semibold text-[18px]">{user.username}</span>
                                <span onClick={async () => {
                                    // Writing text with writeText and a fallback using copy-to-clipboard
                                    if ('clipboard' in navigator) {
                                        await navigator.clipboard.writeText(user.email)
                                    } else {
                                        console.log('fuck u!')
                                    }
                                    //setCopiedId('write-text')
                                    toast({
                                        //title: "Ding Dong",
                                        description: "This email has been copied. ✅",
                                    })
                                }} className="text-gray-400 text-[13px] w-[140px] cursor-pointer hover:text-gray-200 transition-all">
                                    {user.email}
                                </span>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size='sm' variant='ghost' className="">
                                        <MoreHorizontal className="text-white" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-[200px]">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className="gap-2.5 cursor-pointer">
                                            <User className="mr-2 h-4 w-4" />
                                            <span>User Info</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="gap-2.5 cursor-pointer">
                                            <CalendarRange className="mr-2 h-4 w-4" />
                                            Set due date
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="gap-2.5 cursor-pointer">
                                            <Briefcase className="mr-2 h-4 w-4" />
                                            Mission
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="gap-2.5 cursor-pointer">
                                            <MessageCircleMore className="mr-2 h-4 w-4" />
                                            Message
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-red-600 mr-2 gap-2 cursor-pointer">
                                            <Trash />
                                            <span className="font-bold">Report</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </CardContent>
            ))}
            <CardFooter className="text-sm text-center flex justify-center">Can copy the miner{"'"}s email</CardFooter>

        </Card>
    )
}