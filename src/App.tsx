import MenuItem from './components/MenuItem'
import { menuItems } from './data/db'

function App() {

  console.log(menuItems)

  return (
    <>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-4">
        <div className="p-8">
          <h2 className="text-2xl font-bold">Menú</h2>

          <div className='space-y-3 mt-5'>
            {menuItems.map((item) => (
              <MenuItem 
                key={item.id}
                item={item} />
            ))}
          </div>

        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
