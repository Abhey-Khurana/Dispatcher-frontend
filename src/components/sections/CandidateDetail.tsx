import { useState } from 'react';
import SectionCard from '../ui/SectionCard'
import StatusPill from '../ui/StatusPill'
import RadioButtonGroup from '../ui/RadioButtonGroup';
import BankSelect from '../ui/BankSelect';

export default function CandidateDetail() {

  const [officeRadioValue, setOfficeRadioValue] = useState("YES");
  const [pamentMethod, setPaymentMethod] = useState("Factoring");

  return (
    <SectionCard step={1} title={<><span className="mr-2">Candidate</span><span className="text-blue-700">Sample Singh</span></>} actions={<StatusPill label="Active" color="green" />}>
      {/* The four columns — each column contains an inner header (headerGreen) and content */}



      <div className="rounded-figma-sm overflow-hidden border border-gray-100">
        {/* Header Row */}
        <div className="grid grid-cols-4 divide-x divide-gray-200" style={{ background: '#007070' }}>
          <div className="text-white font-semibold px-3 py-2">Student Entity</div>
          <div className="text-white font-semibold px-3 py-2">Information</div>
          <div className="text-white font-semibold px-3 py-2">Accounting</div>
          <div className="text-white font-semibold px-3 py-2">On Board</div>
        </div>

        {/* Data Columns */}
        <div className="grid grid-cols-4 divide-x divide-gray-200">
          {/* Student Entity column */}
          <div className="px-3 py-2 space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500">S NO.</div>
                <div className="text-sm font-semibold">123454</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">ADMISSION</div>
                <div className="text-sm font-semibold">342343</div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">ADMISSION DATE</div>
            <div className="text-sm font-bold">3/12/2022</div>

            <div className="border-b border-gray-300 mx-2 mt-2"></div>

            <div className="mt-3 text-sm font-bold">Alfa Dispatch</div>
            {/* <div className="rounded-full text-white text-sm text-smbg-black-600">DBA: Starx</div> */}
            {/* <div className="text-sm font-medium">DBA: Starx</div> */}
            <StatusPill label="Active" color="black" />
            <div className="text-xs mt-2 font-bold">Nankiana Road, Sangrur 148001</div>

            <div className="mt-3 text-xs text-gray-500">CONTACT</div>
            <div className="text-sm text-blue-600">+91 (203) 432 5975 <span className='font-bold text-black'>• Ext 2</span></div>
            <div className="text-sm text-blue-600">+91 (203) 264 9245 <span className='font-bold text-black'>• Fax</span></div>
            <a href="mailto:admin@outlook.com" className="text-sm text-blue-600 hover:underline">
              admin@outlook.com
            </a>

            <div className="mt-2 text-sm text-orange-500">+ Add More</div>
          </div>


          {/* Column 2 */}
          <div className="px-3 py-2 space-y-2">
            <div className="text-xs text-gray-500">MANAGER NAME</div>
            <div className="text-sm font-bold">Harry Singh •</div>
            <a href="tel:+919876543210" className="text-sm text-blue-600 font-medium hover:underline hover:text-blue-800">
              +91 (446) 235 6484
            </a>

            <div className="text-xs text-gray-500 mt-10">DISPATCHER</div>
            <p className='text-sm font-bold'>Harry •

              <span className='px-[8px]'><a href="tel:+919876543210" className="text-sm text-blue-600 font-medium hover:underline hover:text-blue-800">
                +91 (446) 235 6484
              </a></span>
            </p>

            <div className="mt-2 text-sm text-orange-500">+ Add More</div>


            <div>
              <p className='text-xs text-gray-500 mt-9'>OFFICE COMPLIANCE REQUIRED</p>

              <RadioButtonGroup
                value={officeRadioValue}
                setValue={setOfficeRadioValue}
                options={[{ label: "YES", value: 'YES' }, { label: 'NO', value: 'NO' }]}
                optionWidth='w-[150px]'
              />

            </div>
          </div>
          {/* Column 3 */}
          <div className="px-3 py-2 space-y-2">
            <div className='text-sm text-gray-500'>PAYMENT METHOD</div>

            <RadioButtonGroup
              value={pamentMethod}
              setValue={setPaymentMethod}
              options={[{ label: "Factoring", value: 'Factoring' }, { label: 'Direct', value: 'Direct' }]}
              optionWidth='w-[150px]'
            />

            <div className='mt-10'>
              <BankSelect />
            </div>
          </div>

          {/* Column 4 */}
          <div className="px-3 py-2 space-y-2">
            <div className="text-xs text-gray-500">MANAGER NAME</div>

            <p className='font-bold text-sm'>Navjot Kaur</p>

            <div className="flex gap-4 items-center">
              <div className="text-sm font-bold">07/01/2024</div>
              <div className="text-sm font-bold">11:38 AM</div>
            </div>

            <p className='font-bold mt-[30px]'>Cordinator</p>
            <p>Harwin</p>

            <div className="max-w-md mt-[80px]">
              <label htmlFor="special-instructions" className="block mb-2 text-sm font-medium text-gray-500">
                SPECIAL INSTRUCTIONS
              </label>
              <textarea
                id="special-instructions"
                rows={4}
                className="block w-full p-4 text-gray-500 bg-gray-100 rounded-lg border-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter"
                style={{ resize: "none" }}
              ></textarea>
            </div>


          </div>
        </div>
      </div>







    </SectionCard>
  )
}
