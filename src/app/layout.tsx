import type { Metadata } from 'next'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Enes Taha Öz | Junior Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
      </body>
    </html>
  )
}