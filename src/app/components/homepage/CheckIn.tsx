import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { CircleAlert, MoreHorizontalIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useState } from "react";

export default function CheckIn() {
    // checkin system, press the button and wait for 24 hours than press again
    const [isDisabled, setIsDisabled] = useState(false);
    const [lastPressTime, setLastPressTime] = useState<string | null>(null);
    useEffect(() => {
        const storedLastPressTime = localStorage.getItem("lastPressTime");
        if (storedLastPressTime) {
            const parsedTime = Date.parse(storedLastPressTime);
            const timeDifference = Date.now() - parsedTime;
            if (timeDifference < 24 * 60 * 60 * 1000) {
                setIsDisabled(true);
            }
            setLastPressTime(storedLastPressTime);
        }
    }, []);
    const handleClick = () => {
        const currentTime = new Date().toISOString();
        localStorage.setItem('lastPressTime', currentTime);
        setLastPressTime(currentTime);
        setIsDisabled(true);
    };
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
                {/* <Button disabled variant={'secondary'} className="w-[250px] font-semibold">Checked in ✅</Button> */}
                <form onClick={handleClick} className="w-full">
                    {isDisabled
                        ?
                        <Button variant={'secondary'} disabled={isDisabled} className="w-[250px] font-semibold">Checked in ✅</Button>
                        :
                        <Button className="w-[250px] font-semibold">Press me o(*////▽////*)q</Button>
                    }
                </form>
                {lastPressTime && (
                    <span className="text-center">
                        Last pressed at: {new Date(lastPressTime).toLocaleString()}
                    </span>
                )}
            </CardContent>
            <CardFooter className="text-sm flex justify-center">Happy coding! 🎉</CardFooter>
        </Card>
    )
}