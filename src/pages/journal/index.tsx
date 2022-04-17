import { NextSeo } from 'next-seo'
import * as React from 'react'

import routes from '~/config/routes'
import { ListDetailView, SiteLayout } from '~ui/_base/Layouts'
import { JournalsList } from '~ui/Journal/JournalsList'

function JournalPage() {
  return (
    <NextSeo
      title={routes.writing.seo.title}
      description={routes.writing.seo.description}
      openGraph={routes.writing.seo.openGraph}
    />
  )
}

JournalPage.getLayout = function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<JournalsList />} hasDetail={false} detail={page} />
    </SiteLayout>
  )
}

export default JournalPage
