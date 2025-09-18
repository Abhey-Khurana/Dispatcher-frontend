import { useState } from "react";
import { BrowserRouter as Router, Routes, Route,useLocation, } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import OfficeLanding from "./pages/OfficeLanding";
import CandidateDetailPage from "./pages/CandidateDetailPage";

function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex h-full items-center justify-center text-2xl font-semibold text-gray-400">
      Welcome to Alfa Dispatch {title} page.
    </div>
  );
}
// Hook to get title from path
function usePageTitle() {
  const { pathname } = useLocation();
  const map: Record<string, string> = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/student": "Student",
    "/supply": "Supply",
    "/assets": "Assets",
    "/partners": "Partners",
    "/reports": "Reports",
    "/accounting": "Accounting",
    "/office": "Office",
    "/data": "Data",
    "/media": "Media",
    "/settings": "Settings",
    "/support": "Live Support",
  };
  return map[pathname] || "Page";
}

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="hidden md:block"><Sidebar /></aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 z-50">
            <Sidebar onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex-1 min-h-screen flex flex-col">
        <Header onOpenSidebar={() => setMobileOpen(true)} />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Placeholder title="Dashboard" />} />
            <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
            <Route path="/student" element={<Placeholder title="Student" />} />
            <Route path="/supply" element={<Placeholder title="Supply" />} />
            <Route path="/assets" element={<Placeholder title="Assets" />} />
            <Route path="/partners" element={<Placeholder title="Partners" />} />
            <Route path="/reports" element={<Placeholder title="Reports" />} />
            <Route path="/accounting" element={<Placeholder title="Accounting" />} />

            {/* Office landing (click Sidebar -> Office) */}
            <Route path="/office" element={<OfficeLanding />} />

            {/* Candidate detail (deep link) */}
            <Route path="/office/candidate" element={<CandidateDetailPage />} />

            <Route path="/data" element={<Placeholder title="Data" />} />
            <Route path="/media" element={<Placeholder title="Media" />} />
            <Route path="/settings" element={<Placeholder title="Settings" />} />
            <Route path="/support" element={<Placeholder title="Live Support" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
