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
import PreviousWork from './Components/PreviousWork'
import Experience from './Components/Experience'

import classes from './styles.module.css'
import ContactItem from './Components/ContactItem'

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
          <Contact>
            <ContactItem
              icon={'email'}
              text={email}
            />
            <ContactItem
              icon={'phone'}
              text = {phone}
            />
            <ContactItem
              icon={'linkedIn'}
              text = {linkLI}
            />
            <ContactItem
              icon={'github'}
              text = {linkGIT}
            />

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
          <PreviousWork>
            <Experience
              startData={'12.2022'}
              endData={'now'}
              position={'Test technician'}
              employer={'Aircom'}
              place={'Pietrzykowice n. Wrocław'}
            />
            <Experience
              startData={'09.2022'}
              endData={'11.2022'}
              position={'Technician in Chemical Production'}
              employer={'Aircom'}
              place={'Pietrzykowice n. Wrocław'}
            />
            <Experience
              startData={'2019-09'}
              endData={'2022-08'}
              position={'Junior research and technical specialist'}
              employer={'Medical University of Lublin'}
              place={'Lublin'}
            />
            <Experience
              startData={'2015-04'}
              endData={'2016-03'}
              position={'Lab Worker & Quality Controller'}
              employer={'Radpol S. A.'}
              place={'Kolonia Prawiedniki n. Lublin'}
            />
            <Experience
              startData={'2014-02'}
              endData={'2021-10'}
              position={'Self employed'}
              employer={'Marcin Kołodziej'}
              place={'Lublin'}
            />
          </PreviousWork>
          {/* <Courses></Courses> */}
        </BigWing>
      </Main>

    </main>
  )
}

export default App
