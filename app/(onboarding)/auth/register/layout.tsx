import type { Metadata } from 'next'
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Create a new Look',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
                {children}
        </>
  )
}
