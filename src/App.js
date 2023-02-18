import React from 'react'
import Head from './Components/Head'
import Preview from './Components/Preview'
import Photo from './Components/Photo'

export const App = () => {
  return (
    <main>
      <Head>
        <Photo/>
        <Preview
          heading={'Marcin Kołodziej'}
          degree={'Master of Chemistry, Frontend Developer'}
          text={`Creative and open-minded beginner front-end developer with critical thinking
          and problem-solving skills looking for a suitable developer position with an
          ambitious and exciting company.`}
        />
      </Head>

    </main>
  )
}

export default App
