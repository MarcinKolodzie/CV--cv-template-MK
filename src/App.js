import React from 'react'
import Head from './Components/Head'
import Main from './Components/Main'
import Preview from './Components/Preview'
import Photo from './Components/Photo'
import NarrowWing from './Components/NarrowWing'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Languages from './Components/Languages'
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

const email = 'qwwerty@gmail.com'
const phone = '1234567890'
const linkLI = 'linkLI'
const linkGIT = 'linkGIT'

const language1 = 'language1'
const language2 = 'language2'

export const App = () => {
  return (
    <main>
      <Head>
        <Photo
          className={classes.photo}
        />
        <Preview
          heading={'Marcin Kołodziej'}
          degree1={'Master of Chemistry'}
          degree2={'Frontend Developer'}
          text={`Creative and open-minded beginner front-end developer with critical thinking
          and problem-solving skills looking for a suitable developer position with an
          ambitious and exciting company.`}
        />
      </Head>
      <Main>
        <NarrowWing>
          <Contact
            email = {email}
            phone = {phone}
            linkLI = {linkLI}
            linkGIT = {linkGIT}
          >

          </Contact>
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
          <Languages
            language1 = {language1}
            language2 = {language2}
          >
          </Languages>
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
