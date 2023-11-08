import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Template',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" >
      <body>
        {/* Wrapping the children prop */}
        <Providers>{children}</Providers> 
      </body>
    </html>
  )
}