import { Link } from 'react-router-dom'

export default function OfficeLanding() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="bg-white rounded-figma-md card-shadow border border-gray-200 p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome to Alfa Dispatch — Office</h1>
        {/* <p className="mt-3 text-sm text-gray-600">This is the Office landing page. Use the link below to open a Candidate detail demo.</p> */}

        <div className="mt-4">
          <Link to="/office/candidate" className="inline-block px-4 py-2 rounded-figma-sm bg-[var(--brand)] text-white">Open Candidate Detail</Link>
        </div>
      </div>
    </div>
  )
}
