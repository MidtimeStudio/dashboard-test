import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { CircleAlert, MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function CheckIn() {
    return (
        <Card className="">
            <CardHeader className="font-bold flex flex-row justify-between">
                Check In
                <Popover placement="bottom" showArrow={true}>
                    <PopoverTrigger>
                        <CircleAlert className="cursor-pointer hover:text-gray-500 transition-all" />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">Please Check In!</div>
                            <div className="text-tiny">We collect your data once you checked in.</div>
                        </div>
                    </PopoverContent>
                </Popover>
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-2.5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button disabled className="w-[250px] font-semibold">
                                Checked in ✅
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Let{"'"}s start:{')'}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <span className="text-center">Check in again after 24 hours</span>
            </CardContent>
            <CardFooter className="text-sm flex justify-center">Happy coding! 🎉</CardFooter>
        </Card>
    )
}