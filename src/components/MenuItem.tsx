import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-500 w-full p-3 flex justify-between items-center hover:bg-teal-200 transition-colors"
      onClick={() => console.log(item)}
    >
        <p>{item.name}</p>
        <p className="text-2xl font-bold">${item.price}</p>
    </button>
  )
}
