import React from 'react'
import Head from './Components/Head'
import Main from './Components/Main'
import Preview from './Components/Preview'
import Photo from './Components/Photo'
import Skills from './Components/Skills'
import NarrowWing from './Components/NarrowWing'
import BigWing from './Components/BigWing'

import classes from './styles.module.css'

const skill1 = 'HTML5'
const skill2 = 'CSS3'
const skill3 = 'Webpack'
const skill4 = 'Git'
const skill5 = 'REACT'
const skill6 = 'Problem solving'
const skill7 = 'Critical thinking'
const skill8 = 'Communication'

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
            skill1= {skill1}
            skill2= {skill2}
            skill3= {skill3}
            skill4= {skill4}
            skill5= {skill5}
            skill6= {skill6}
            skill7= {skill7}
            skill8= {skill8}
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
