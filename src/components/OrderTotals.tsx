export default function OrderTotals() {
  return (
    <>
        <div className="space-y-3">
            <h2 className="text-2xl font-black">Totales y Propina:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">
                    $0.00
                </span>
            </p>
            <p>Propina sugerida: {''}
                <span className="font-bold">
                    $0.00
                </span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">
                    $0.00
                </span>
            </p>  
        </div>

        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">

        </button>
    </>
  )
}
