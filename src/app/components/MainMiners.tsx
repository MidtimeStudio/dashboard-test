import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { topDealUsers } from "@/lib/data/mdData"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Ghost, MoreHorizontal, User, CalendarRange, Trash, MessageCircleMore, Briefcase,  } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface topDealUsers {
    img: string;
    age: number;
  }

export default function MainMiners() {
    //const [open, setOpen] = useState(false)
    return (
        <Card className="col-span-1 row-span-3 ">
            <CardHeader className="font-bold text-[25px]">Main Miners</CardHeader>
            {topDealUsers.map(user => (
                <CardContent className="" key={user as any}>
                    <div className="">
                        <div className="flex gap-3">
                            <Avatar>
                                <AvatarImage src={user.img.src} alt=""/>
                                <AvatarFallback>{user.loading}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col ">
                                <span className="font-semibold text-[18px]">{user.username}</span>
                                <span className="text-gray-400 text-[13px] w-[135px]">{user.email}</span>
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
        </Card>
    )
}