import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CircleGauge ,
  Box ,
  TruckElectric ,
  Boxes,
  Users,
  ClipboardMinus ,
  Presentation ,
  Truck ,
  BookOpenText ,
  BookMarked,
  Settings,
  LifeBuoy,
  CircleChevronLeft ,
  Triangle,
} from "lucide-react";

type Props = { onClose?: () => void };

export default function Sidebar({ onClose }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuTop = [
    { id: "dashboard", label: "Dashboard", icon: <CircleGauge  size={18} />, path: "/dashboard" },
    { id: "student", label: "Student", icon: <Box  size={18} />, path: "/student" },
    { id: "supply", label: "Supply", icon: <TruckElectric  size={18} />, path: "/supply" },
    { id: "assets", label: "Assets", icon: <Boxes size={18} />, path: "/assets" },
    { id: "partners", label: "Partners", icon: <Users size={18} />, path: "/partners" },
    { id: "reports", label: "Reports", icon: <ClipboardMinus  size={18} />, path: "/reports" },
    { id: "accounting", label: "Accounting", icon: <Presentation  size={18} />, path: "/accounting" },
    { id: "office", label: "Office", icon: <Truck  size={18} />, path: "/office" },
    { id: "data", label: "Data", icon: <BookOpenText  size={18} />, path: "/data" },
    { id: "media", label: "Media", icon: <BookMarked size={18} />, path: "/media" },
  ];

  const menuBottom = [
    { id: "settings", label: "Settings", icon: <Settings size={18} />, path: "/settings" },
    { id: "support", label: "Live support", icon: <LifeBuoy size={18} />, path: "/support" },
  ];

  return (
    <div
      className={`h-screen bg-[#1F1F1F] text-gray-300 flex flex-col justify-between transition-discrete duration-300 ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      {/* Top */}
      <div>
        {/* Sales header  */}
        <div className="px-3 py-4 flex items-center justify-between">
          {!collapsed && <div className="text-white font-bold text-xl">Sales</div>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded hover:bg-white/10 text-gray-300"
          >
            <CircleChevronLeft
              size={25}
              className={`transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
              style={{ fill: '#007070' }} 
            />
          </button>
        </div>

        {/* Menu top */}
        <nav className="px-2">
          {menuTop.map((m) => (
            <NavLink
              key={m.id}
              to={m.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md mb-1 transition-colors ${
                  isActive
                    ? "bg-[#FFA100] text-black font-medium"
                    : "hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {m.icon}
              {!collapsed && <span>{m.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t-8 border-[#323232] my-3" />

        {/* Menu bottom */}
        <nav className="px-2">
          {menuBottom.map((m) => (
            <NavLink
              key={m.id}
              to={m.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md mb-1 transition-colors ${
                  isActive
                    ? "bg-[#FFA100] text-black font-medium"
                    : "hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {m.icon}
              {!collapsed && <span>{m.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Profile */}
      <div className="px-3 py-4 border-t border-gray-700 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold">
          S
        </div>
        {!collapsed && (
          <div className="flex-1 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Sample Singh</div>
              {/* Improv  */}
              <div className="text-xs text-gray-400">Manager</div>
            </div>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className={`p-1 rounded transition-colors ${
                profileOpen ? "text-[#FFA100]" : "text-gray-400 hover:text-white"
              }`}
            >
              <Triangle size={14} style={{fill:'#b9b9b9'}}/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
