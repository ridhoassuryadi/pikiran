/* eslint-disable react/display-name */
import Image from 'next/image'
import * as React from 'react'

import { AppItem } from '~modules/app/models/appModel'
import { ListItem } from '~ui/_base/ListDetail/ListItem'

// TODO: Figure out how to get this dynamically
interface Props {
  stack: AppItem
  active: boolean
}

export const AppListItem = React.memo<Props>(({ stack, active }) => {
  function handleClick(e, stack) {
    if (e.metaKey) {
      e.preventDefault()
      e.stopPropagation()
      window.open(stack.url, '_blank').focus()
    }
  }

  return (
    <ListItem
      key={stack.name}
      href="/stack/[slug]"
      as={`/stack/${stack.slug}`}
      title={stack.name}
      description={null}
      byline={null}
      leadingAccessory={
        <Image
          src={stack.image}
          width={48}
          height={48}
          layout="fixed"
          alt={`${stack.name} icon`}
          className={'rounded-xl'}
        />
      }
      active={active}
      onClick={(e) => handleClick(e, stack)}
    />
  )
})
