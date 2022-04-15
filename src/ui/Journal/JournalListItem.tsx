import * as React from 'react'

import { ListItem } from '~ui/_base/ListDetail/ListItem'
import {Journal} from '~modules/journal/models/journalModel'

interface Props {
  post: Journal
  active: boolean
}

// eslint-disable-next-line react/display-name
export const JournalListItem = React.memo<Props>(({ post, active }) => {
  return (
    <ListItem
      key={post.id}
      href="/journal/[slug]"
      as={`/journal/${post.slug}`}
      title={post.title}
      description={null}
      byline={'Draft'}
      active={active}
    />
  )
})
