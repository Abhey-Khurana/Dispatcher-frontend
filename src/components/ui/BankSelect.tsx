import { Triangle } from "lucide-react";
import React from "react";

const BankSelect: React.FC = () => {
  return (
    <div className="w-full max-w-sm ">
      {/* Label */}
      <label
        htmlFor="bank"
        className="block text-gray-500 text-sm font-sm mb-2"
      >
        Bank Name
      </label>

      {/* Select dropdown */}
      <div className="relative ">
        <select
          id="bank"
          className="appearance-none w-full rounded-xl bg-[#dee2e6] px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Select</option>
          <option>Bank of America</option>
          <option>Chase</option>
          <option>Wells Fargo</option>
          <option>Citi Bank</option>
        </select>

        {/* Dropdown icon */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transform rotate-180">
          <Triangle fill="black" size={12} />
        </span>
      </div>
    </div>
  );
};

export default BankSelect;
