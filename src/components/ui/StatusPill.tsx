type Props = { label: string; color?: 'green' | 'orange' | 'red' | 'black'}

export default function StatusPill({ label, color = 'green' }: Props) {
  let bg = color === 'green' ? 'bg-green-600' : color === 'orange' ? 'bg-yellow-500' : 'bg-red-500'

  if(color==='black'){
    bg="bg-black-500";
  }
  return <div className={`px-3 py-1 rounded-full text-white text-sm ${bg}`}>{label}</div>
}
