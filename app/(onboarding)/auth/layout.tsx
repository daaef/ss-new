import type { Metadata } from 'next'
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Login to your ScoutSity account',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <main>
            <Layout>
                {children}
            </Layout>
        </main>
  )
}
