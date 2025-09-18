import { Edit3 } from "lucide-react";
import type { OfficeInfo } from '../../types/index.d.ts';
interface InfoCardProps {
    className?: string;
    officeInfo: OfficeInfo;
    onEdit: (office: OfficeInfo) => void;
}

export default function InfoCard({
    className = "",
    officeInfo,
    onEdit
}: InfoCardProps) {

    return (
        <>
            <div className={`relative w-full h-auto ${className}`}>
                {/* Badge */}
                <div style={{ left: 12 }} className="absolute -top-3 z-10">
                    <span
                        style={{ backgroundColor: `${officeInfo.tagColor}` }}
                        className="text-white text-[10px] md:text-xs font-semibold px-2 py-[4px] rounded-md shadow-sm"
                    >
                        {officeInfo.tag}
                    </span>
                </div>
                <div
                    className="relative border border-gray-200 rounded-lg p-3 pt-6 shadow-sm"
                    style={{ backgroundColor: `${officeInfo.cardBgColor}` }}
                >
                    {/* Edit icon */}
                     <button
                        onClick={()=>onEdit(officeInfo)}
                        aria-label="Edit"
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-1"
                    >
                        <Edit3 size={14} />
                    </button> 

                    {/* Content */}
                    <div className="text-xs md:text-sm leading-4 text-gray-800 font-medium">
                        {officeInfo.phoneNoDisplay}
                    </div>
                    <div className="text-xs md:text-sm text-gray-800 mt-1">
                        {officeInfo.companyName}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{officeInfo.companyAddress}</div>
                    <div className="text-xs md:text-sm text-gray-800 mt-2 font-medium">
                        {officeInfo.agentName}
                    </div>

                    <div className="flex items-center gap-4 mt-2 flex-wrap">
                        <a
                            href={`tel:${officeInfo.agentPhoneNo ?? officeInfo.phoneNoDisplay}`}
                            className="text-xs md:text-sm text-blue-600 underline break-words"
                        >
                            {officeInfo.agentPhoneNo ?? officeInfo.phoneNoDisplay}
                        </a>
                        {officeInfo.agentEmail && (
                            <a
                                href={`mailto:${officeInfo.agentEmail}`}
                                className="text-xs md:text-sm text-blue-600 underline"
                            >
                                {officeInfo.agentEmail}
                            </a>
                        )}
                    </div>

                    <div className="flex items-center gap-6 mt-3 text-[10px] md:text-xs text-gray-400">
                        <div>
                            <div className="uppercase text-[9px] tracking-wider">
                                Date Issued
                            </div>
                            <div className="text-gray-600">{officeInfo.dateIssued ?? "-"}</div>
                        </div>
                        <div>
                            <div className="uppercase text-[9px] tracking-wider">
                                Date Exp.
                            </div>
                            <div className="text-gray-600">{officeInfo.expirationDate ?? "-"}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
