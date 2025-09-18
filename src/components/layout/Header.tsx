import React from "react";

type Props = {
  pageTitle: string;
  onOpenSidebar?: () => void;
};

export default function Header({ pageTitle, onOpenSidebar }: Props) {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-4">
        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-figma-sm hover:bg-gray-100"
          onClick={onOpenSidebar}
        >
          ☰
        </button>

        {/* Page title from route */}
        <div className="text-base font-semibold text-gray-700">{pageTitle}</div>

        
      </div>
    </header>
  );
}
