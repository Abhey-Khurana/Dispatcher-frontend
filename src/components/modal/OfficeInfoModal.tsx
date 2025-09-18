import { useState, useEffect } from "react";
import type { OfficeInfo } from "../../types";
import { CircleX } from "lucide-react";

type Props = {
  officeData: OfficeInfo[];
  selectedOffice: OfficeInfo;
  onSave: (updatedOffice: OfficeInfo) => void;
  onClose: () => void;
};

export default function OfficeInfoModal({
  selectedOffice,
  onSave,
  onClose,
}: Props) {
  const [formData, setFormData] = useState<OfficeInfo>(selectedOffice);

  useEffect(() => {
  setFormData(selectedOffice);
}, [selectedOffice]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="bg-white w-[720px] rounded-figma-md shadow-2xl z-50 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-3  text-white flex items-center justify-between" style={{backgroundColor:"#007070"}}>
          <div className="font-semibold">Office Info</div>
          <button onClick={onClose} className="text-white cursor-pointer"> <CircleX /></button>
        </div>

        {/* Body */}
        <div className="p-6 grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500">POLICY NUMBER</div>
            <input
              name="policyNumber"   
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              placeholder="POLICY NUMBER"
              value={formData.policyNumber ?? ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div className="text-xs text-gray-500">AGENT NAME</div>
            <input
              name="agentName"
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              placeholder="Agent Name"
              value={formData.agentName ?? ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="text-xs text-gray-500">COMPANY NAME</div>
            <input
              name="companyName"
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              placeholder="Company Name"
              value={typeof formData.companyName === "string" ? formData.companyName : formData.companyName?.toString() ?? ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div className="text-xs text-gray-500">AGENT PHONE NO.</div>
            <input
              name="agentPhoneNo"
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              placeholder="Agent Phone No."
              value={formData.agentPhoneNo ?? ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div className="text-xs text-gray-500">COMPANY ADDRESS</div>
            <input
              name="companyAddress"
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              placeholder="Company Address"
              value={formData.companyAddress ?? ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div className="text-xs text-gray-500">AGENT EMAIL</div>
            <input
              name="agentEmail"
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              placeholder="Agent Email"
              value={formData.agentEmail ?? ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div className="text-xs text-gray-500">PHONE NO.</div>
            <input
              name="agentPhoneNo"
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              placeholder="Phone No."
              value={formData.agentPhoneNo ?? ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div className="text-xs text-gray-500">DATE ISSUED</div>
            <input
              name="dateIssued"
              type="date"
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              value={formData.dateIssued ?? ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div className="text-xs text-gray-500">EXPIRATION DATE</div>
            <input
              name="expirationDate"
              type="date"
              className="mt-1 w-full p-2 rounded-md border border-gray-400 px-3 py-2"
              value={formData.expirationDate ?? ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-span-2">
            <div className="text-sm text-orange-500"><a href="#">Trailer Interchange</a></div>
          </div>

          <div className="col-span-2 text-right">
            <button
              onClick={handleSubmit}
              className="px-5 py-2 rounded-figma-sm cursor-pointer text-white"
              style={{backgroundColor:"#FFA100"}}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
