import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alergen Recipes',
  description: 'Search for recipes and tailer to your needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white font-mono`}>{children}</body>
    </html>
  )
}
