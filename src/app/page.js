import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from './About/page'
import WorkExperience from './WorkExperience/page'
import Skills from './Skills/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <div>

        <Header />

        <section id='hero' className='snap-start'>
          <Hero />
        </section>

        <section id='About' className='snap-center'>
          <About />
        </section>

        <section id='WorkExperience' className='snap-center' >
          <WorkExperience />
        </section>

        <section id='Skills' className='snap-center' >
          <Skills />
        </section>


      </div>
    </main>
  )
}
