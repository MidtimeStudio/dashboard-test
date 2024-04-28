"use client"
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import Home from "./components/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

export default function App() {
  //const { setTheme } = useTheme()
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="md:w-[250px] p-[5px] pl-[20px] pr-[20px] border-r-[2px] ">
          <Sidebar />
        </div>
        <div className="w-[100%] p-[5px] pl-[20px] pr-[20px]">
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
}
