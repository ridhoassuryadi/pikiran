import { useRouter } from 'next/router'
import * as React from 'react'

import { ListContainer } from '~ui/_base/ListDetail/ListContainer'

import { AppListItem } from './AppListItem'
import { AppTitleBar } from './AppTitleBar'

import {apps } from '~modules/app/data/appData';

export function AppList() {
  const router = useRouter()
  let [scrollContainerRef, setScrollContainerRef] = React.useState(null)

  return (
    <ListContainer data-cy="stack-list" onRef={setScrollContainerRef}>
      <AppTitleBar scrollContainerRef={scrollContainerRef} />

      <div className="lg:space-y-1 lg:p-3">
        {apps.map((app) => {
          const active = router.query.slug === app.slug
          return (
            <AppListItem
              key={app.id}
              stack={app}
              active={active}
            />
          )
        })}
      </div>
    </ListContainer>
  )
}
