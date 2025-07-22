import type { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({ order }: OrderContentsProps) {
    return (
        <div>
            <h2 className='text-4xl font-black'>Consumo</h2>

            <div className="mt-5 space-y-3">
                {order.length === 0 ? (
                    <p className="text-center text-gray-500">La order esta vacía</p>
                ) : (
                    order.map(item => (
                        <div key={item.id} className="flex justify-between">
                            <span>{item.name} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}