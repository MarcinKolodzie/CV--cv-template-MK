import React from 'react'
import Head from './Components/Head'
import Main from './Components/Main'
import Preview from './Components/Preview'
import Photo from './Components/Photo'
import NarrowWing from './Components/NarrowWing'
import Skills from './Components/Skills'
import SkillsItem from './Components/SkillsItem/SkillsItem'
import Contact from './Components/Contact'
import ContactItem from './Components/ContactItem'
import Languages from './Components/Languages'
import LanguagesItem from './Components/LanguagesItem'
import BigWing from './Components/BigWing'
import PreviousWork from './Components/PreviousWork'
import Experience from './Components/Experience'
import Education from './Components/Education'
import EducarionItem from './Components/EducationItem'

// PHOTO IMPORT //
import cvPhotoPath from './img/IMG_CV_photo.png'

import classes from './styles.module.css'

// PREVIEW DATA //
const heading = 'Marcin Kołodziej'
const degree = 'Master of Chemistry, Frontend Developer'
const previewText = 'Creative and open-minded beginner front-end developer with critical thinking and problem-solving skills looking for a suitable developer position with an ambitious and exciting company.'

// CONTACT DATA //
const email = 'marcin1.kolodziej @gmail.com'
const phone = '794 263 397'
const linkLI = 'www.linkedin.com/in/ marcin-kołodziej-4b5396211'
const linkGIT = 'https://github.com/ MarcinKolodzie'

// SKILLS DATA //
const skill0 = 'JS ES6'
const skill1 = 'HTML5'
const skill2 = 'CSS3'
const skill3 = 'Webpack'
const skill4 = 'Git'
const skill5 = 'REACT v.17'
const skill6 = 'Problem solving'
const skill7 = 'Critical thinking'
const skill8 = 'Communication'

// LANGUAGES DATA //
const language1 = 'Polish'
const leve1 = 5
const language2 = 'English'
const leve2 = 3
const language3 = 'Russian'
const leve3 = 2

export const App = () => {
  return (
    <div>
      <Head>
        <Photo
          className={classes.photo}
          cvPhoto={cvPhotoPath}
        />
        <Preview
          heading={heading}
          degree1={degree}
          text={previewText}
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
              icon={'JS'}
              text= {skill0}
            />
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
              level={leve1}
            />
            <LanguagesItem
              text ={language2}
              level={leve2}
            />
            <LanguagesItem
              text ={language3}
              level={leve3}
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
