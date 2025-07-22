import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
import { menuItems } from './data/db'
import userOrder from './hooks/useOrder'

function App() {

  const { order, addItem } = userOrder()

  return (
    <>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className='space-y-3 mt-10'>
            {menuItems.map((item) => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
            <OrderContents
              order={order}
            />
        </div>
      </main>
    </>
  )
}

export default App
