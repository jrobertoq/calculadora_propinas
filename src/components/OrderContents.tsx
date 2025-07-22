import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className='text-4xl font-black'>Consumo</h2>

            <div className="mt-10 space-y-3">
                {order.length === 0 ? (
                    <p className="text-center text-gray-500">La order esta vacía</p>
                ) : (
                    order.map(item => (
                        <div key={item.id} className="flex justify-between border-t border-gray-400 last-of-type:border-b py-5 items-center">
                            <div>
                                <span>{item.name} x {item.quantity}</span>
                                <span>{formatCurrency(item.price * item.quantity)}</span>
                            </div>

                            <button 
                                className="bg-red-500 text-white h-8 w-8 rounded-full items-center" 
                                type="button"
                                onClick={() => removeItem(item.id)}>
                                X  
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}