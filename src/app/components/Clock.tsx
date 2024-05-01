import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import moment from "moment";
import {useGlobalContext} from '../context/globalContext'


export default function TotalRatio() {
  const { forecast } = useGlobalContext();
  const { timezone } = forecast;
  // State
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");
  // Live time update
  useEffect(() => {
    // upadte time every second
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      // custom format: 24 hour format
      const formatedTime = localMoment.format("HH:mm:ss");
      // day of the week
      const day = localMoment.format("dddd");
      setLocalTime(formatedTime);
      setCurrentDay(day);
    }, 1000);
    // clear interval
    return () => clearInterval(interval);
  }, [timezone]);
    return (
        <Card className="">
            <CardHeader className="font-bold gap-2.5 ">Clock</CardHeader>
            <CardContent className="flex flex-col text-center items-center">
              <span className="font-extrabold text-5xl">{localTime}</span>
              <span className="font-medium">{currentDay}</span>
            </CardContent>
            <CardFooter className="text-sm">Happy coding! 🎉</CardFooter>
        </Card>
    )
}