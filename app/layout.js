import './globals.css'

import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import Menu from '@/components/Menu'


const montserrat = Montserrat({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'Nicolas | Front-end Developer',
  description: 'portfolio of junior front-end developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className='w-full relative'>  
          <Navbar/>
          <Menu/>
          {children}
          <Footer/>
        </main>
        <Toaster/>
      </body>
    </html>
  )
}