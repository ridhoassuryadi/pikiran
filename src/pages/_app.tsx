import '~/styles/custom-styles.css'
import '~/styles/dracula.css'
import '~/styles/prose-styles.css'

import * as React from 'react'

import { SiteLayout } from '~/ui/_base/Layouts'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return getLayout(<Component {...pageProps} />)
}
