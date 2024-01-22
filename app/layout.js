import './globals.css'
import { Montserrat } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'


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
        <main className='w-full h-full relative'>  
          {children}
        </main>  
        <Toaster/>
      </body>
    </html>
  )
}