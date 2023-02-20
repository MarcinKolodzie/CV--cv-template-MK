import React from 'react'
import Head from './Components/Head'
import Main from './Components/Main'
import Preview from './Components/Preview'
import Photo from './Components/Photo'
import Skills from './Components/Skills'
import NarrowWing from './Components/NarrowWing'
import BigWing from './Components/BigWing'

import classes from './styles.module.css'

const skills = [{ skill: 'HTML5' }, { skill: 'CSS3' }, { skill: 'Webpack' }, { skill: 'Git' }, { skill: 'REACT' }, { skill: 'Problem solving' }, { skill: 'Critical thinking' }, { skill: 'Communication' }]

export const App = () => {
  return (
    <main>
      <Head>
        <Photo
          className={classes.photo}
        />
        <Preview
          heading={'Marcin Kołodziej'}
          degree={'Master of Chemistry, Frontend Developer'}
          text={`Creative and open-minded beginner front-end developer with critical thinking
          and problem-solving skills looking for a suitable developer position with an
          ambitious and exciting company.`}
        />
      </Head>
      <Main>
        <NarrowWing>
          {/* <Contact></Contact> */}
          <Skills
            skills={skills}
          >
          </Skills>
          {/* <Languages></Languages> */}
        </NarrowWing>
        <BigWing>
          {/* <PreviousWork></PreviousWork> */}
          {/* <Courses></Courses> */}
        </BigWing>
      </Main>

    </main>
  )
}

export default App
