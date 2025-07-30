import { useMemo } from 'react'
import type { OrderItem } from '../types'
import { formatCurrency } from '../helpers';

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
    <>
        <div className="space-y-3">
            <h2 className="text-2xl font-black">Totales y Propina:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">
                    {formatCurrency(subtotalAmount)}
                </span>
            </p>
            <p>Propina sugerida: {''}
                <span className="font-bold">
                    {formatCurrency(tipAmount)}
                </span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">
                    {formatCurrency(totalAmount)}
                </span>
            </p>  
        </div>

        <button 
            type="button" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:bg-slate-400"
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar orden
        </button>
    </>
  )
}
