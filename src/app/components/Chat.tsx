import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendIcon, User, ChevronLeft } from "lucide-react";
import kirano from '@/lib/assets/shark from my town.png'
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

export default function ChatCard() {
    return (
        <Card className="">
            <CardHeader className="font-bold flex ">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href={'/chat'} className="flex flex-row justify-center hover:underline">
                                Let{"'"}s chat!
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>Click to open the chat</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardHeader>
            <div className="flex flex-col rounded-lg border-t overflow-hidden border-zinc-700">
                <div className="flex items-center gap-4 px-4 py-3 border-b">
                    <ChevronLeft className="cursor-pointer"/>
                    <Avatar>
                        <AvatarImage alt="Chat participant" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>J</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-green-400">Online</div>
                    </div>
                </div>
                <div className="flex-1 overflow-auto p-4 space-y-4">
                    <div className="flex items-start gap-3">
                        <Avatar>
                            <AvatarImage alt="John Doe" src={''} />
                            <AvatarFallback>J</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            <div className="font-medium">John Doe</div>
                            <div className="rounded-lg px-4 py-2 max-w-[240px] bg-zinc-800">
                                Hey there! How's it going?
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">3:45 PM</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                        <div className="flex flex-col gap-1 items-end">
                            <div className=" text-gray-50  bg-green-600 rounded-lg px-4 py-2 max-w-[240px]">
                                I'm doing great, thanks for asking!
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">3:46 PM</div>
                        </div>
                        <Avatar>
                            <AvatarImage alt="You" src={kirano.src} />
                            <AvatarFallback>K</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex items-start gap-3">
                        <Avatar>
                            <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                            <AvatarFallback>J</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            <div className="font-medium">John Doe</div>
                            <div className="bg-zinc-800 rounded-lg px-4 py-2 max-w-[240px]">
                                That's great to hear! I'm excited to catch up.
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">3:47 PM</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-zinc-800 px-4 py-3">
                    <Input className="flex-1 bg-transparent focus:outline-none " placeholder="Type your message..." type="text" />
                    <Button size="icon" variant="ghost">
                        <SendIcon className="h-5 w-5" />
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
            </div>
        </Card>
    )
}