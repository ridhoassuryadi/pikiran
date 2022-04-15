import { useRouter } from 'next/router'
import * as React from 'react'

import {
  ExternalLinkIcon,
  GitHubIcon,
  TwitterIcon,
  YouTubeIcon,
} from '~/ui/_base/Icon'

import {
  Home,
  LampOn,
  Edit2,
  Designtools,
  MonitorMobbile,
  Book1
} from 'iconsax-react'

import { NavigationLink } from './NavigationLink'

export function SidebarNavigation() {
  const router = useRouter()
  const sections = [
    {
      label: null,
      items: [
        {
          href: '/',
          label: 'Home',
          icon: Home,
          trailingAccessory: null,
          isActive: router.asPath === '/',
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/writing',
          label: 'Writing',
          icon: Book1,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/writing') >= 0,
          trailingAction: null,
          isExternal: false,
        },
        {
          href: '/til',
          label: 'TIL',
          icon: LampOn,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/crit') >= 0,
          trailingAction: null,
          isExternal: false,
        },
        {
          href: '/journal',
          label: 'Journal',
          icon: Edit2,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/journal') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Projects',
      items: [
        {
          href: '/projects/app',
          label: 'Apps',
          icon: MonitorMobbile,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/projects/app') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/projects/crafts',
          label: 'Crafts',
          icon: Designtools,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/projects/crafts') >= 0,
          trailingAction: null,
          isExternal: false,
        }
      ],
    },
    {
      label: 'Contact',
      items: [
        {
          href: 'https://twitter.com/brian_lovin',
          label: 'Twitter',
          icon: TwitterIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://www.youtube.com/channel/UC-esBYEUGQ6iK1wmw76f5MA',
          label: 'YouTube',
          icon: YouTubeIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://github.com/brianlovin',
          label: 'GitHub',
          icon: GitHubIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
        {
            href: 'https://github.com/brianlovin',
            label: 'Dribble',
            icon: GitHubIcon,
            trailingAccessory: ExternalLinkIcon,
            isActive: false,
            trailingAction: null,
            isExternal: true,
          },
      ],
    },
  ]

  return (
    <div className="flex-1 px-3 py-3 space-y-1">
      {sections.map((section, i) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-dark-gray-300"
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item, j) => (
              <NavigationLink key={i} link={item} />
            ))}
          </ul>
        )
      })}
    </div>
  )
}