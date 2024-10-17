'use client'
import { useDropDown } from '../ctx/dropdown'

export default function Home() {
  const { isOpen, toggleDropdown } = useDropDown()
  return (
    <main>
      Home page
      <div
        className={`${
          isOpen ? 'block translate-y-[0]' : 'hidden translate-y-[-20px]'
        } transition-transform ease-out`}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>
      <button
        onClick={() => toggleDropdown()}
        className='px-4 py-2 rounded-full bg-black text-white'
      >
        Show
      </button>
    </main>
  )
}
