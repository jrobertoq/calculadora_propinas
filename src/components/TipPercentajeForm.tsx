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


export default function TipPercentajeForm() {
  return (
    <div>
        <h3 className="text-2xl font-black">Propina:</h3>
        <form className="mt-2">
            {tipOptions.map(tip => (
                <div key={tip.id} className="flex items-center gap-2">
                    <label htmlFor={tip.id} className="mr-2">{tip.label}</label>
                    <input 
                        id={tip.id}
                        type="radio"
                        name="tip"
                        value={tip.value}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
