import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-500 w-full p-3 flex justify-between items-center hover:bg-teal-200 transition-colors"
      onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="text-2xl font-bold">${item.price}</p>
    </button>
  )
}
