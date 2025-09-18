import SectionCard from '../ui/SectionCard'

const data = [
  { id: '2456895965', status: 'Pending', amount: '$2,400.00', pickup: 'Austin, TX', date: '1/19/2024', delivery: 'Sparks, NV', ddate: '1/20/2024', result: 'On Time Delivery' },
  { id: '2456895955', status: 'In-Transit', amount: '$2,400.00', pickup: 'Sparks, NV', date: '1/16/2024', delivery: 'Austin, TX', ddate: '1/17/2024', result: 'Delay' },
  { id: '2456895945', status: 'Cancelled', amount: '$2,400.00', pickup: 'Austin, TX', date: '1/15/2024', delivery: 'Fernley, NV', ddate: '1/16/2024', result: 'Canceled' },
  { id: '2456895935', status: 'In-Transit', amount: '$2,400.00', pickup: 'Goodyear, AZ', date: '1/15/2024', delivery: 'Richmond, VA', ddate: '1/16/2024', result: 'On Time Delivery' },
  { id: '2456895925', status: 'Delivered', amount: '$2,400.00', pickup: 'Henrico, VA', date: '1/17/2024', delivery: 'Fort Worth, TX', ddate: '1/18/2024', result: 'On Time' }
]

function StatusBadge({ s }: { s: string }) {
  const cls = s === 'Pending' ? 'bg-yellow-400 text-black' : s === 'Cancelled' ? 'bg-red-500 text-white' : s === 'Delivered' ? 'bg-green-600 text-white' : 'bg-blue-500 text-white'
  return <span className={`px-2 py-1 rounded text-xs ${cls}`}>{s}</span>
}

const headers = ["Load ID", "Status", "Amount", "Pick-up City", "Date", "Delivery City", "Date", "Results"];


export default function CarrierHistory() {
  const onTimeCount = data.filter(item => item.result === 'On Time Delivery').length;
  const canceledCount = data.filter(item => item.result === 'Canceled').length;
  const totalRevenue = data.reduce((acc, item) => acc + parseFloat(item.amount.replace('$', '').replace(',', '')), 0);

  return (
    <SectionCard step={4} title="Carrier History">
      <div className="bg-white border border-gray-100 rounded-lg p-4">
        <div className="overflow-auto mb-4">
          <div className='flex justify-between px-3 py-4'>
            <div className="text-black font-semibold">Load Details</div>

            <div className="text-[15px] flex gap-6">
              <p>On Time: <span className='font-bold'>{onTimeCount}</span></p>
              <p>Canceled: <span className='font-bold'>{canceledCount}</span></p>
              <p>Total Revenue: <span className='font-bold'>${totalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })} </span></p>
            </div>

          </div>

          {/* Table */}
          <table className="min-w-full table-auto">
            <thead>
              <tr className=" text-white" style={{ background: '#007070' }}>
                {headers.map((header, index) => (
                  <th key={index} className="px-4 py-2 text-left text-sm font-medium border border-gray-200">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((h, idx) => (
                <tr key={h.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 border border-gray-300 border-l-0 text-blue-600 underline cursor-pointer">{h.id}</td>
                  <td className="px-4 py-2 border border-gray-300"><StatusBadge s={h.status} /></td>
                  <td className="px-4 py-2 border border-gray-300">{h.amount}</td>
                  <td className="px-4 py-2 border border-gray-300">{h.pickup}</td>
                  <td className="px-4 py-2 border border-gray-300">{h.date}</td>
                  <td className="px-4 py-2 border border-gray-300">{h.delivery}</td>
                  <td className="px-4 py-2 border border-gray-300">{h.ddate}</td>
                  <td className="px-4 py-2 border border-gray-300 border-r-0">{h.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer with On Time, Canceled, Total Revenue */}
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



      </div>
    </SectionCard>
  )
}
