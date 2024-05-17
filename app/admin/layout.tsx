
import React, { Suspense } from 'react'
import Loading from './loading'
import Admin from './page'
import Layout from '../layout'

function layout() {
  return (
    // <Layout>
    <Suspense fallback={<Loading />} >
      <Admin />
    </Suspense>
    // </Layout>
  )
}

export default layout
