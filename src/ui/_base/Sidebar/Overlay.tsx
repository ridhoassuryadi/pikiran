import * as React from 'react'

export function SidebarOverlay() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition duration-200 ease-in-out dark:bg-opacity-50 ${
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      onClick={() => setIsOpen(false)}
    />
  )
}
