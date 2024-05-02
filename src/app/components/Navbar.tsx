'use client'
import Image from "next/image"
import logo from '@/lib/assets/midtime logo (white).png'
import main_user from '@/lib/assets/shark from my town.png'
import { Settings, Search, BellPlus, CalendarPlus, PackagePlus, User, Check } from "lucide-react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
//import {Avatar} from "@nextui-org/react";
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
//import { Skeleton } from "@nextui-org/react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
const frameworks = [
  {
    value: "kirano",
    label: "Kirano",
  },
  {
    value: "shit",
    label: "Johnny",
  },
  {
    value: "John doe",
    label: "John Doe",
  },
  {
    value: "Jane Doe",
    label: "Jane Doe",
  },
  {
    value: "gura",
    label: "gura's flat",
  },
]

export const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <div className="w-[100%] p-[20px] flex justify-between ">
      <div className="flex ">
        <Image src={logo} alt="logo" width={55} height={55} className="pointer-events-none" />
        <span className="items-center font-bold gap-2.5 flex">Soju</span>
      </div>
      <div className="items-center flex gap-5">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value ? frameworks.find((framework) => framework.value === value)?.label : "Select user..."}
              <User className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search user..." />
              <CommandEmpty>No user found.</CommandEmpty>
              <CommandList asChild>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem key={framework.value} value={framework.value} onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}>
                      <Check className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger >
              <BellPlus className="cursor-pointer hover:text-slate-400 transition-all" />
            </TooltipTrigger>
            <TooltipContent>
              <span>Notification</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CalendarPlus className="cursor-pointer hover:text-slate-400 transition-all" />
            </TooltipTrigger>
            <TooltipContent>
              <span>Add Calanders</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <PackagePlus className="cursor-pointer hover:text-slate-400 transition-all" />
            </TooltipTrigger>
            <TooltipContent>
              <span>Add Packages</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Settings className="cursor-pointer hover:text-slate-400 transition-all" />
            </TooltipTrigger>
            <TooltipContent>
              <span>Settings</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex items-center gap-2 ">
          <Avatar className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]">
            <AvatarImage src={main_user.src} alt="@shadcn" className="border-[3px] border-green-500 rounded-full" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <Link href={'/profile'}>
          <span className="md:flex hidden">Kirano</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar