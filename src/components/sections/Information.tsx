import { useState } from 'react';
import type { OfficeInfo } from '../../types';
import InfoCard from '../ui/InfoCard'
import SectionCard from '../ui/SectionCard'
import OfficeInfoModal from '../modal/OfficeInfoModal';


const officeInfoSet: OfficeInfo[] = [
  {
    tag: "Auto",
    tagColor: "#2e7cfc",
    policyNumber: "1",
    companyName: "Malwa Insurance",
    companyAddress: "Nankiana Road, Sangrur 148001",
    phoneNoDisplay: "963541587",
    agentName: "Steve Smith",
    agentPhoneNo: "+91 (547) 953 5647",
    agentEmail: "admin@outlook.com",
    dateIssued: "3/12/2024",
    expirationDate: "3/12/2024",
    cardBgColor: "#eef1ff"
  },
  {
    tag: "Physical",
    tagColor: "#2e7cfc",
    policyNumber: "2",
    companyName: "Malwa Insurance",
    companyAddress: "Nankiana Road, Sangrur 148001",
    phoneNoDisplay: "963541587",
    agentName: "Steve Smith",
    agentPhoneNo: "+91 (547) 953 5647",
    agentEmail: "admin@outlook.com",
    dateIssued: "3/12/2024",
    expirationDate: "3/12/2024",
    cardBgColor: "#8deaff"
  },
  {
    tag: "General",
    tagColor: "#2e7cfc",
    policyNumber: "3",
    companyName: "Malwa Insurance",
    companyAddress: "Nankiana Road, Sangrur 148001",
    phoneNoDisplay: "963541587",
    agentName: "Steve Smith",
    agentPhoneNo: "+91 (547) 953 5647",
    agentEmail: "admin@outlook.com",
    dateIssued: "3/12/2024",
    expirationDate: "3/12/2024",
    cardBgColor: "#ffedcf"
  },
  {
    tag: "Cargo",
    tagColor: "#2e7cfc",
    policyNumber: "4",
    companyName: "Malwa Insurance",
    companyAddress: "Nankiana Road, Sangrur 148001",
    phoneNoDisplay: "963541587",
    agentName: "Steve Smith",
    agentPhoneNo: "+91 (547) 953 5647",
    agentEmail: "admin@outlook.com",
    dateIssued: "3/12/2024",
    expirationDate: "3/12/2024",
    cardBgColor: "#cef2c6"
  }
]

export default function Information() {

  const [officeInfoArray, setOfficeInfoArray] = useState(officeInfoSet);

  const [selectedOffice, setSelectedOffice] = useState<OfficeInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // open modal with selected office
  const handleEdit = (office: OfficeInfo) => {
    setSelectedOffice(office);
    setIsModalOpen(true);
  };


  const handleSave = (updatedOffice: OfficeInfo) => {
  setOfficeInfoArray((prev) =>
    prev.map((office) => {
      if (office.policyNumber === updatedOffice.policyNumber) {
        // console.log("TESTED 11");
        return updatedOffice; 
      }
      return office;
    })
  );

  console.log(updatedOffice, officeInfoArray, "Abhey");
  setIsModalOpen(false);
};

  return (
    <SectionCard step={2} title="Information">
      <div className="w-full">
        <div className="grid grid-cols-4 rounded-lg">
          {/* Left side (3 columns merged) */}
          <div className="col-span-3">
            <h2
              className="text-white font-semibold px-3 py-2 rounded-l"
              style={{ background: "#007070" }}
            >
              Office
            </h2>

            <div className="grid grid-cols-3 gap-4 p-4 divide-x divide-gray-300" >
              {/* First column */}
              <div className="space-y-4 p-5" >
                <InfoCard officeInfo={officeInfoArray[0]} onEdit={handleEdit}/>
                <InfoCard officeInfo={officeInfoArray[1]} onEdit={handleEdit}/>
              </div>

              {/* Second column */}
              <div className="space-y-4 p-5">
                <InfoCard officeInfo={officeInfoArray[2]} onEdit={handleEdit}/>
                <InfoCard officeInfo={officeInfoArray[3]} onEdit={handleEdit}/>
              </div>

              <div className="text-[#FFA100] font-semibold text-lg space-y-60">
                <div className='mt-[10px]'>Interchange</div>
                <div>Computer</div>
              </div>

              {isModalOpen && selectedOffice && (
                <OfficeInfoModal
                  officeData={officeInfoArray}
                  selectedOffice={selectedOffice}
                  onSave={handleSave}
                  onClose={() => setIsModalOpen(false)}
                />
              )}

            </div>
          </div>

          {/* Right side (1 column) */}
          <div className="col-span-1">
            <h2
              className="text-white font-semibold px-3 py-2 rounded-r"
              style={{ background: "#007070" }}
            >
              Documents
            </h2>
            <div className="bg-white p-3 rounded shadow">Column 4</div>
          </div>
        </div>
      </div>

    </SectionCard>
  )
}
