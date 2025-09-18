
import type { JSX } from "react";
type Option = {
    label: string;
    value: string;
};

type RadioButtonGroupProps = {
    value: string;
    setValue: (val: string) => void;
    options: Option[];
    optionWidth?: string;
};

export default function RadioButtonGroup({
    value,
    setValue,
    options = [],
    optionWidth
}: RadioButtonGroupProps):JSX.Element {
    return(
    <div className="flex gap-2 mt-4">
        {options.map((opt) => (
            <label
                key={opt.value}
                className={`${optionWidth} flex items-center gap-2 px-3 py-2 border rounded-lg cursor-pointer text-sm 
            ${value === opt.value
                        ? "border-teal-700 text-gray-800"
                        : "border-gray-300 text-gray-500"
                    }`}
            >
                <input
                    type="radio"
                    name="radio-group"
                    value={opt.value}
                    checked={value === opt.value}
                    onChange={(e) => setValue(e.target.value)}
                    className="hidden"
                />
                <span
                    className={`w-4 h-4 rounded-md border flex items-center justify-center 
              ${value === opt.value
                            ? "border-teal-700 bg-white"
                            : "border-gray-300 bg-white"
                        }`}
                >
                    {value === opt.value && (
                        <span className="w-2.5 h-2.5 rounded-sm bg-teal-700"></span>
                    )}
                </span>
                {opt.label}
            </label>
        ))}
    </div>
    );
}