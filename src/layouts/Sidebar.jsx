
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  CalendarClock, 
  MessageSquare, 
  BarChart3, 
  Users, 
  User, 
  Settings, 
  HelpCircle, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: CalendarClock, label: "Schedule", path: "/schedule" },
  { icon: MessageSquare, label: "Message", path: "/message" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Users, label: "Team", path: "/team" },
];

const NavItems2 = [
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];
const bottomNavItems = [
  { icon: HelpCircle, label: "Help", path: "/help" },
  { icon: LogOut, label: "Logout", path: "/logout" },
];

export function Sidebar() {
  const location = useLocation();
  
  const NavItem = ({ icon: Icon, label, path }) => {
    const isActive = location.pathname === path;
    
    return (
      <Link 
        to={path} 
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 group",
          isActive && "bg-indigo-50 dark:bg-indigo-950"
        )}
      >
        <div className={cn(
          "flex items-center justify-center w-8 h-8",
          isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-500 dark:text-gray-400"
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={cn(
          "text-sm font-medium",
          isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"
        )}>
          {label}
        </span>
      </Link>
    );
  };
  
  return (
    <aside className="hidden md:flex flex-col w-[280px] border-r border-gray-200 dark:border-gray-900 bg-white dark:bg-gray-950 h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-center h-14 bg-gray-200 dark:bg-gray-800 rounded-md">
          <div className="w-6 h-6">
            <img src="123.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <nav className="flex flex-col flex-1 px-3 py-2 space-y-1">
        {navItems.map((item) => (
          <NavItem key={item.label} icon={item.icon} label={item.label} path={item.path} />
        ))}
        <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
        <nav className="flex flex-col flex-1 py-2 space-y-1">
        {NavItems2.map((item) => (
          <NavItem key={item.label} icon={item.icon} label={item.label} path={item.path} />
        ))}
      </nav>
      </nav>
      
      <div className="flex flex-col jusify-between"> 
      <nav className="flex flex-col flex-1 py-2 space-y-1">
        {bottomNavItems.map((item) => (
          <NavItem key={item.label} icon={item.icon} label={item.label} path={item.path} />
        ))}
      </nav>
      </div>
    </aside>
  );
}
