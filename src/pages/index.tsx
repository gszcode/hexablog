import Index from '@/components/Index'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <main className={poppins.className}>
      <Index />
    </main>
  )
}
