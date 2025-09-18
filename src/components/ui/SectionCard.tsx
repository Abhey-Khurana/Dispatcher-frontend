import type { ReactNode } from 'react'

type Props = {
  step?: number | string
  title: ReactNode | string
  actions?: ReactNode
  children: ReactNode
  className?: string
}

export default function SectionCard({ step, title, actions, children, className = '' }: Props) {
  return (
    <section className={`bg-white rounded-figma-md card-shadow border border-gray-200 overflow-hidden ${className}`}>
      {/* header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {step !== undefined && (
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold">
              {step}
            </div>
          )}

          <div className="text-lg font-semibold">{title}</div>
        </div>
        <div>{actions}</div>
      </div>

      {/* body */}
      <div className="px-4 pb-6">
        {children}
      </div>
    </section>
  )
}
