import './globals.scss'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

const roboto = Space_Mono({
   subsets: ['latin'],
   weight: ['400', '700']
  })

export const metadata: Metadata = {
  title: 'Tune Wave',
  description: 'Streaming music application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
