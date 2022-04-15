import { useRouter } from 'next/router'
import * as React from 'react'

import { ListContainer } from '~ui/_base/ListDetail/ListContainer'


import { PostListItem } from './PostListItem'
import { WritingTitlebar } from './WritingTitlebar'

export const WritingContext = React.createContext({
  filter: 'published',
  setFilter: (filter: string) => {},
})

export function PostsList() {
  const router = useRouter()
  const [filter, setFilter] = React.useState('published')
  let [scrollContainerRef, setScrollContainerRef] = React.useState(null)

  const { posts } = {posts:[]};

  const defaultContextValue = {
    filter,
    setFilter,
  }

  return (
    <WritingContext.Provider value={defaultContextValue}>
      <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
        <WritingTitlebar scrollContainerRef={scrollContainerRef} />

        <div className="lg:space-y-1 lg:p-3">
          {posts.map((post) => {
            const active = router.query?.slug === post.slug

            return <PostListItem key={post.id} post={post} active={active} />
          })}
        </div>
      </ListContainer>
    </WritingContext.Provider>
  )
}
