
import { Bell, MessageSquare, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-stretch gap-4 p-4 dark:bg-gray-950 sticky top-0 z-10">

      <div className="w-full sm:w-2/3 flex items-center">
        <div className="flex items-center bg-white rounded-full px-5 py-3 gap-3 w-full h-full">
          <Search className="text-gray-400" />
          <Input
            placeholder="Search here..."
            className="w-full text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="w-full sm:w-1/3 h-full">
        <div className="flex items-center bg-white rounded-full px-5 py-3 gap-4 w-full h-full">


          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="border border-[#DEDEDE] rounded-full p-2"
            >
              <Bell className="size-[24px] text-gray-600 dark:text-gray-400" />
            </Button>

            <Button
              variant="ghost"
              className="border border-[#DEDEDE] rounded-full p-2"
            >
              <MessageSquare className="size-[24px] text-gray-600 dark:text-gray-400" />
            </Button>
          </div>

          <div className="flex justify-center w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="!h-10 w-full flex items-center justify-center rounded-full gap-2"
                >
                  <Avatar className="h-8 w-8 bg-gray-200">
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium hidden sm:inline">
                    Mirie Kiritani
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>
      </div>
    </header>
  );
}
