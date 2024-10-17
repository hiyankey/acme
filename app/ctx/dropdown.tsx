'use client'
import { createContext, useContext, useState } from 'react'

type DropdownContextType = {
  isOpen: boolean
  toggleDropdown: () => void
}
const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  toggleDropdown: () => undefined,
})

function DropdownPropvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const toggleDropdown = () => setIsOpen((prev) => !prev)

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  )
}

const useDropDown = () => useContext(DropdownContext)

export { DropdownPropvider, useDropDown }
