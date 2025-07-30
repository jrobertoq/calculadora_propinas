import { useMemo } from 'react'
import type { OrderItem } from '../types'
import { formatCurrency } from '../helpers';

type OrderTotalsProps = {
  order: OrderItem[];
}

export default function OrderTotals({ order }: OrderTotalsProps) {
  
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

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
                    {formatCurrency(subtotalAmount * 0.15)}
                </span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">
                    {formatCurrency(subtotalAmount * 1.15)}
                </span>
            </p>  
        </div>

        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">

        </button>
    </>
  )
}
