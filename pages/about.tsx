import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import Navbar from './../components/Navbar'
import Avatar from './../images/me.png'

export default function About(){
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4">
        <Head>
          <title>Sobre</title>
        </Head>
        <h1 className='text-gray-1000 text-3xl mb-10'>Sobre</h1>
        <div className="flex flex-wrap">
          <div className="flex flex-col items-center justify-center gap-2 w-[100vw] md:w-[300px]">
            <div className='rounded-full w-[200px] h-[200px] overflow-hidden'>
              <Image className='w-full h-full' alt="Eusebio's Avatar" src={Avatar}/>
            </div>

            <h1 className="text-gray-900">Eusébio Simango</h1>
            <p className="text-gray-400">Web Developer</p>
          </div>
          <div className="md:mt-20 md:w-[calc(100vw-350px)]">
            <p className="text-gray-700 ">
              Meu nome é <Link href={"https://github.com/EusebioSimango"} className="text-gray-1000">Eusébio Simango</Link>, e eu sou um adolescente moçambicano apaixonado por programação, tecnologia e ciência. Neste blog vou falar sobre a minha vida, dificuldades que encontrei na minha vida pessoal e profissional, toda minha jornada no mundo do desenvolvimeno de software.
            </p>
          </div>
        </div>
        <Link href={"/"}>Blog</Link>
      </div>
    </>
  );
}
