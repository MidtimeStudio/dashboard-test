import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import moment from "moment";
import { useGlobalContext } from '../context/globalContext'

export default function Clock() {
  const { forecast } = useGlobalContext();
  const { timezone, weather } = forecast;
  if (!forecast || !weather) {
    return (
      <Card className="">
        <CardHeader className="font-bold gap-2.5 ">Clock</CardHeader>
        <CardContent className="flex flex-col text-center items-center">
          <span className="font-extrabold text-5xl">--:--:--</span>
          <span className="font-mono">YYYY-MM-DD</span>
        </CardContent>
        <CardFooter className="text-sm flex justify-center font-medium text-gray-400">xxxday</CardFooter>
      </Card>
    )
  }
  // State
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");
  // Function to get the current date in a specific format
const getCurrentDate = (timezone: number): string => {
  const localMoment = moment().utcOffset(timezone / 60);
  // Custom format for the date
  const formattedDate = localMoment.format("YYYY-MM-DD");
  return formattedDate;
};
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
  const currentDate = getCurrentDate(timezone);
  return (
    <Card className="">
      <CardHeader className="font-bold gap-2.5 ">Clock</CardHeader>
      <CardContent className="flex flex-col text-center items-center">
        <span className="font-extrabold text-5xl">{localTime}</span>
        <span className="font-mono">{currentDate}</span>
      </CardContent>
      <CardFooter className="flex justify-center">
      <span className="font-medium text-gray-400">{currentDay}</span>
      </CardFooter>
    </Card>
  )
}