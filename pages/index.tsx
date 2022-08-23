import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'


export default function Home(){
	return (
		<div>
			<Head>
				<title>Eusébio Simango</title>
				<meta name="description" content="A vida de um nerd adolescente em Moçambique" />
			</Head>
			<Navbar />
			<div className='pt-20'>
				<h1 className="text-purple-500 bg-blue-200">Hello, world!</h1>
				<Link href={"about"}>About</Link>
			</div>
		</div>    
	)
}
