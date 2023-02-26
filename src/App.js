import React from 'react'
import Head from './Components/Head'
import Main from './Components/Main'
import Preview from './Components/Preview'
import Photo from './Components/Photo'
import NarrowWing from './Components/NarrowWing'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import ContactItem from './Components/ContactItem'
import Languages from './Components/Languages'
import LanguagesItem from './Components/LanguagesItem'
import BigWing from './Components/BigWing'
import PreviousWork from './Components/PreviousWork'
import Experience from './Components/Experience'
import Education from './Components/Education'

import classes from './styles.module.css'
import EducarionItem from './Components/EducationItem'
import SkillsItem from './Components/SkillsItem/SkillsItem'

const skill1 = 'HTML5'
const skill2 = 'CSS3'
const skill3 = 'Webpack'
const skill4 = 'Git'
const skill5 = 'REACT'
const skill6 = 'Problem solving'
const skill7 = 'Critical thinking'
const skill8 = 'Communication'

const email = 'marcin1.kolodziej @gmail.com'
const phone = '794 263 397'
const linkLI = 'www.linkedin.com/in/ marcin-kołodziej-4b5396211'
const linkGIT = 'https://github.com/ MarcinKolodzie'

const language1 = 'language1'
const language2 = 'language2'
const language3 = 'language3'

export const App = () => {
  return (
    <div>
      <Head>
        <Photo
          className={classes.photo}
        />
        <Preview
          heading={'Marcin Kołodziej'}
          degree1={'Master of Chemistry, Frontend Developer'}
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
          <Skills>
            <SkillsItem
              icon={'HTML5'}
              text= {skill1}
            />
            <SkillsItem
              icon={'CSS3'}
              text= {skill2}
            />
            <SkillsItem
              icon={'Webpack'}
              text= {skill3}
            />
            <SkillsItem
              icon={'Git'}
              text= {skill4}
            />
            <SkillsItem
              icon={'REACT'}
              text= {skill5}
            />
            <SkillsItem
              text= {skill6}
            />
            <SkillsItem
              text= {skill7}
            />
            <SkillsItem
              text= {skill8}
            />

          </Skills>
          <Languages >
            <LanguagesItem
              text = {language1}
            />
            <LanguagesItem
              text ={language2}
            />
            <LanguagesItem
              text ={language3}
            />
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
          <Education>
            <EducarionItem
              startData={'2021-11'}
              endData={'2023-02'}
              position={'Front-End, JavaScript developer'}
              employer={'CodeRoad'}
              place={'Lublin/remote'}
            />
            <EducarionItem
              startData={'2007-10'}
              endData={'2012-06'}
              position={'Chemistry, master degree'}
              employer={'Maria Curie-Skłodowska University'}
              place={'Lublin'}
            />
            <EducarionItem
              startData={'2011-11'}
              endData={'2011-11'}
              position={'Application of chemical safety requirements in terms of REACH and transport of dangerous materials ADR'}
              employer={'Maria Curie-Skłodowska University'}
              place={'Lublin'}
            />
          </Education>
        </BigWing>
      </Main>

    </div>
  )
}

export default App
