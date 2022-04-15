import * as React from 'react'

import { Intro } from '~ui/Home/Bio'
import { ListDetailView } from '~ui/_base/Layouts'

export default function Home() {
  return <ListDetailView list={null} hasDetail detail={<Intro />} />
}
