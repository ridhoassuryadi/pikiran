import { NextSeo } from 'next-seo'
import * as React from 'react'

import routes from '~/config/routes'
import { ListDetailView, SiteLayout } from '~ui/_base/Layouts'
import { AppList } from '~ui/App/AppList'

function AppPage() {
  return (
    <>
      <NextSeo
        title={routes.app.seo.title}
        description={routes.app.seo.description}
        openGraph={routes.app.seo.openGraph}
      />
    </>
  )
}

AppPage.getLayout = function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<AppList />} hasDetail={true} detail={page} />
    </SiteLayout>
  )
}

export default AppPage
