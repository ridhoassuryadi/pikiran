import { NextSeo } from 'next-seo'
import * as React from 'react'

import routes from '~/config/routes'
import { ListDetailView, SiteLayout } from '~ui/_base/Layouts'
import { PostsList } from '~ui/Writing/PostsList'

function WritingPage() {
  return (
    <NextSeo
      title={routes.writing.seo.title}
      description={routes.writing.seo.description}
      openGraph={routes.writing.seo.openGraph}
    />
  )
}

WritingPage.getLayout = function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<PostsList />} hasDetail={false} detail={page} />
    </SiteLayout>
  )
}

export default WritingPage
