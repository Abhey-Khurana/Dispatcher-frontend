import SectionCard from '../ui/SectionCard'

const headers = ["Unit Number", "Vin Number", "Make Model", "Driver 1", "Phone Number", "Driver 2", "Phone Number", "Cab Card"];
const data = [
  { unit: 9343, vin: "1234gh4332334543543535", model: "Freightliner", driver1: "Ravi Singh", driver2: "Steve", phoneNumber1: "+91 (356) 658 9874", phoneNumber2: "+91 (356) 658 9874", cabCard: null },
  { unit: 9343, vin: "1234gh4332334543543535", model: "Freightliner", driver1: "Karan Singh", driver2: "Rahul", phoneNumber1: "+91 (356) 658 9874", phoneNumber2: "+91 (356) 658 9874", cabCard: null },
  { unit: 9343, vin: "1234gh4332334543543535", model: "Freightliner", driver1: "Karan Singh", driver2: "Rahul", phoneNumber1: "+91 (356) 658 9874", phoneNumber2: "+91 (356) 658 9874", cabCard: null },
  { unit: 9343, vin: "1234gh4332334543543535", model: "Freightliner", driver1: "Karan Singh", driver2: "Rahul", phoneNumber1: "+91 (356) 658 9874", phoneNumber2: "+91 (356) 658 9874", cabCard: null },
  { unit: 9343, vin: "1234gh4332334543543535", model: "Freightliner", driver1: "Karan Singh", driver2: "Rahul", phoneNumber1: "+91 (356) 658 9874", phoneNumber2: "+91 (356) 658 9874", cabCard: null },
  // Add more data here...
];

export default function FleetInformation() {
  return (
    <SectionCard step={3} title="Fleet Information">

      <div className='w-full overflow-x-auto'>

        <table className=" table-auto">
          <thead>
            <tr className=" text-white" style={{ background: '#007070' }}>
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-2 text-left text-sm font-medium border border-gray-200">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((h, idx) => (
              <tr key={h.unit} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2 border border-gray-300 border-l-0 text-blue-600 underline cursor-pointer">{h.unit}</td>
                <td className="px-4 py-2 border border-gray-300">{h.vin}</td>
                <td className="px-4 py-2 border border-gray-300">{h.model}</td>
                <td className="px-4 py-2 border border-gray-300">{h.driver1}</td>
                <td className="px-4 py-2 border border-gray-300">{h.phoneNumber1}</td>
                <td className="px-4 py-2 border border-gray-300">{h.driver2}</td>
                <td className="px-4 py-2 border border-gray-300">{h.phoneNumber2}</td>
                <td className="px-4 py-2 border border-gray-300 border-r-0">{h.cabCard ?? "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div className="flex justify-between mt-10 text-sm">

        {/* Pagination Display */}
        <div className="text-medium font-medium">Showing 1 to {data.length} of {data.length}</div>

        {/* Pagination */}
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm cursor-pointer">&lt; Prev</button>
          <span className="text-sm">1</span>
          <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm cursor-pointer">Next &gt;</button>
        </div>
      </div>

    </SectionCard>
  )
}
