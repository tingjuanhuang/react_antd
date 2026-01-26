import { Layout } from 'antd'
import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout>
      <Layout.Content>
        {children}
      </Layout.Content>
    </Layout>
  )
}