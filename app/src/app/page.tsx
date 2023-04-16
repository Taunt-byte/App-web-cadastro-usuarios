import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Welcome to my website!</h1>
      <p>This is the homepage.</p>
      <Footer />
    </main>
  )
}
