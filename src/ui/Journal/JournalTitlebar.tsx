import * as React from 'react'
import { Plus, Radio } from 'react-feather'

import { GhostButton } from '~ui/_base/Button'
import { TitleBar } from '~ui/_base/ListDetail/TitleBar'
import SegmentedControl from '~ui/_base/SegmentedController'
import { WritingContext } from './JournalsList'
import { useViewerQuery } from '~/shared/hooks/useViewerQuery';

export function JournalTitlebar({ scrollContainerRef }) {
  const { data } = useViewerQuery()

  function getAddButton() {
    if (data?.viewer?.isAdmin) {
      return (
        <GhostButton
          href="/writing/new"
          data-cy="new-post-button"
          size="small-square"
          aria-label="Add post"
        >
          <Plus size={16} />
        </GhostButton>
      )
    }
    return null
  }

  function trailingAccessory() {
    return (
      <div className="flex space-x-2">
        {getAddButton()}
      </div>
    )
  }

  function getChildren() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useViewerQuery()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setFilter, filter } = React.useContext(WritingContext)
    if (data?.viewer?.isAdmin) {
      return (
        <div className="pt-2 pb-1">
          <SegmentedControl
            onSetActiveItem={setFilter}
            active={filter}
            items={[
              { id: 'published', label: 'Published' },
              { id: 'draft', label: 'Drafts' },
            ]}
          />
        </div>
      )
    }
    return null
  }

  return (
    <TitleBar
      trailingAccessory={trailingAccessory()}
      title="Journal"
      scrollContainerRef={scrollContainerRef}
      isBrightColor={true}
    >
      {getChildren()}
    </TitleBar>
  )
}
