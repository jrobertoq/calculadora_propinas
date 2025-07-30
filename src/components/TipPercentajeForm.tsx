import type { Dispatch, SetStateAction } from 'react'

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProp = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentajeForm({ setTip, tip }: TipPercentageFormProp) {
  return (
    <div>
        <h3 className="text-2xl font-black">Propina:</h3>
        <form className="mt-2">
            {tipOptions.map(tipOptions => (
                <div key={tipOptions.id} className="flex items-center gap-2">
                    <label htmlFor={tipOptions.id} className="mr-2">{tipOptions.label}</label>
                    <input 
                        id={tipOptions.id}
                        type="radio"
                        name="tip"
                        value={tipOptions.value}
                        onChange={ e => setTip(+e.target.value) }
                        checked={tipOptions.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
