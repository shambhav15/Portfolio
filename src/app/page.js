import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import WorkExperience from '../../components/WorkExperience'
import Skills from '../../components/Skills'

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

        <section id='Skills' className='snap-center' >
          <Skills />
        </section>
        
        <section id='WorkExperience' className='snap-center' >
          <WorkExperience />
        </section>



      </div>
    </main>
  )
}
