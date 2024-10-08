import Image from 'next/image'
import React from 'react';
import { GithubLogo, TwitterLogo, LinkedinLogo, InstagramLogo, YoutubeLogo, GoogleLogo } from 'phosphor-react'
import Navbar from './../components/Navbar'
import SocialLink from './../components/SocialLink'
import Avatar from './../public/images/me.png'
import MetaData from '../components/MetaData';

export default function About(){
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4 container mx-auto">
        <MetaData metaData={{
            title: 'Giniuss | Sobre',
            author: 'Eusébio Simango',
            description: 'Sobre Eusébio Simango',
            keywords: ['adolscente', 'blog', 'eusebio simango', 'programador', 'nerd', 'ciencia', 'tecnologia']
        }} />
        <h1 className='text-gray-900 text-3xl font-black border-b pb-2 border-link dark:border-white dark:text-white mb-10'>Sobre</h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-2 w-[100vw] md:w-[330px] z-0">
            <div className='rounded-full w-[200px] h-[200px] overflow-hidden'>
              <Image className='w-full h-full z-0' alt="Eusebio's Avatar" src={Avatar}/>
            </div>

            <h1 className="text-gray-900 dark:text-white">Eusébio Simango</h1>
            <p className="text-gray-400">Web Developer</p>
            <div className="flex flex-row flex-nowrap gap-3 mb-4">
              <SocialLink  url="https://github.com/EusebioSimango" icon={ <GithubLogo className="w-12 h-12"/> }/>
              <SocialLink  url="https://twitter.com/eusebiodotpy" icon={ <TwitterLogo className="w-12 h-12"/> }/>
              <SocialLink  url="https://www.linkedin.com/in/eus%C3%A9bio-simango-36b994233/" icon={ <LinkedinLogo className="w-12 h-12"/> }/>
              <SocialLink  url="http://instagram.com/eusebio.py" icon={ <InstagramLogo className="w-12 h-12"/> }/>
              <SocialLink  url="https://www.youtube.com/channel/UCMS6crz1z9pK6AHoLzDvO0A" icon={ <YoutubeLogo className="w-12 h-12"/> }/>
              <SocialLink  url="mailto:eusebiosimango14@gmail.com" icon={ <GoogleLogo className="w-12 h-12"/> }/>
            </div>
          </div>
          <div className="mt-20 md:w-3/4">
            <p className="text-gray-700 text-center">
              Meu nome é <strong>Eusébio Simango</strong>, e eu sou um adolescente moçambicano apaixonado por programação, tecnologia e ciência. Neste blog vou falar sobre a minha vida, dificuldades que encontrei na minha vida pessoal e profissional, toda minha jornada no mundo do desenvolvimeno de software.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
