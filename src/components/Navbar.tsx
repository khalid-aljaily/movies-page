import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar } from "./ui/avatar";
import { CircleUserRound, ChevronDown, Bell, AlignJustify } from "lucide-react";
function Navbar() {
  return (
    <div className="flex w-full justify-between py-5">
      <h1 className="text-2xl font-bold lg:mx-auto">Tyme</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <DropdownMenu >
            <DropdownMenuTrigger  className = 'outline-none flex items-center'>
                <div className="flex items-center">
                  <Avatar className="flex items-center bg-white justify-center h-fit w-fit p-1 mr-2">
                    <CircleUserRound  className="text-black h-4 w-4"/>
                  </Avatar>
                  <h3 className="text-sm md:text-normal">Wade Warren</h3>
                </div>
                <ChevronDown  className="ml-1 md:ml-2 h-5 md:h-7 w-5 md:w-7"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className = 'px-5'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className = 'bg-blue-500'/>
              <DropdownMenuItem >Profile</DropdownMenuItem>
              <DropdownMenuItem >Billing</DropdownMenuItem>
              <DropdownMenuItem >Subscription</DropdownMenuItem>
              <DropdownMenuItem className = 'text-destructive'>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu >
            <DropdownMenuTrigger  className = 'outline-none ml-1 md:ml-3'>
            <Bell />
            </DropdownMenuTrigger>
            <DropdownMenuContent className = 'px-5 mr-5'>
              <DropdownMenuLabel className = 'text-center'>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator className = 'bg-blue-500'/>
              <p className="text-sm text-center text-gray-200 px-6 py-5">You have no notifications!</p>
            </DropdownMenuContent>
          </DropdownMenu>
          
        </div>
        
        <DropdownMenu >
            <DropdownMenuTrigger  className = 'outline-none flex items-center ml-5 md:ml-8'>
            <AlignJustify />
            </DropdownMenuTrigger>
            <DropdownMenuContent className = 'px-2 mr-5'>
              <DropdownMenuLabel>dropdown</DropdownMenuLabel>
              <DropdownMenuSeparator className = 'bg-blue-500'/>
              <DropdownMenuItem>do something</DropdownMenuItem>
              <DropdownMenuItem>do something</DropdownMenuItem>
              <DropdownMenuItem>do something</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
