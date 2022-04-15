import Link from 'next/link'
import * as React from 'react'


export function NavigationLink({
  link: {
    href,
    label,
    icon: Icon,
    trailingAccessory: Accessory,
    trailingAction: Action,
    isActive,
    isExternal,
  },
}) {
  const setIsOpen = (isOpen: boolean) => {
  
  };
  return (
    <li
      className="flex items-stretch space-x-1"
      onClick={() => setIsOpen(false)}
    >
      <Link href={href}>
        <a
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  ${
            isActive
              ? 'bg-dark-gray-700 text-dark-gray-50 hover:bg-dark-gray-700 hover:text-white'
              : 'text-dark-gray-50  hover:bg-dark-gray-800/[0.7] hover:text-white'
          }`}
        >
          <span className="flex items-center justify-center w-4">
            <Icon width="16" height="16" variant={isActive && "Bulk"}/>
          </span>
          <span className="flex-1">{label}</span>
          {Accessory && (
            <span className="flex items-center justify-center w-4 text-black text-opacity-40 dark:text-white">
              <Accessory />
            </span>
          )}
        </a>
      </Link>
      {Action && <Action />}
    </li>
  )
}
