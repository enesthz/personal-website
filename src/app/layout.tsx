import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}