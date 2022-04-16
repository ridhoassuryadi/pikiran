import * as React from 'react'

import { ListDetailView } from '~ui/_base/Layouts'
import { Intro } from '~ui/Home/Bio'

export default function Home() {
  return <ListDetailView list={null} hasDetail detail={<Intro />} />
}
