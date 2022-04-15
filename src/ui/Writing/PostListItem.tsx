import * as React from 'react'

import { ListItem } from '~ui/_base/ListDetail/ListItem'
import {Post} from '~modules/post/dto/writingDTO'

interface Props {
  post: Post
  active: boolean
}

// eslint-disable-next-line react/display-name
export const PostListItem = React.memo<Props>(({ post, active }) => {
  return (
    <ListItem
      key={post.id}
      href="/writing/[slug]"
      as={`/writing/${post.slug}`}
      title={post.title}
      description={null}
      byline={'Draft'}
      active={active}
    />
  )
})
