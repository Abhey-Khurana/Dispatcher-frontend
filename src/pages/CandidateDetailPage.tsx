import React from 'react'
import { Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import CandidateDetail from '../components/sections/CandidateDetail'
import Information from '../components/sections/Information'
import FleetInformation from '../components/sections/FleetInformation'
import CarrierHistory from '../components/sections/CarrierHistory'
import LogsNotes from '../components/sections/LogsSection'

type Props = { }

export default function CandidateDetailPage({ }: Props) {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      {/* breadcrumb row similar to Figma: icon + Office > Candidate Detail */}
      <div className="flex items-center gap-3 px-2">
        <Building2 size={18} className="text-gray-500" />
        <div className="text-sm text-gray-500">
          <Link to="/office" className="text-blue-600 font-medium hover:underline">Office</Link>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-gray-700 font-semibold">Candidate Detail</span>
        </div>
      </div>

      {/* main candidate detail card */}
      <CandidateDetail />


      {/* Information block */}
      <Information />

      {/* Fleet table */}
      <FleetInformation />

      {/* Carrier history */}
      <CarrierHistory />

      {/* Logs & Notes */}
      <LogsNotes />
    </div>
  )
}
