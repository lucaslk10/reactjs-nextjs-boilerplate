import React from 'react'
import Head from 'next/head'

import myLogo from 'assets/myLogo.png'
import DefaultLayout from 'layout/default'

export default function Home() {
  return (
    <DefaultLayout>
      <div>
        <Head>
          <title>Homepage</title>
        </Head>

        <img src={myLogo}></img>

      </div>
    </DefaultLayout>
  )
}
