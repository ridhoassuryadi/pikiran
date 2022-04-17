import * as React from 'react'

import { TitleBar } from '~ui/_base/ListDetail/TitleBar'

export function AppTitleBar({ scrollContainerRef }) {
  return (
    <TitleBar
      scrollContainerRef={scrollContainerRef}
      title="Stack"
      isBrightColor
    />
  )
}
