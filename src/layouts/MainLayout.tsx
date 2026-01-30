import { Layout } from 'antd'
import type { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout className="mainLayout">
      <Layout.Content className="mainLayoutContent">
        {children}
      </Layout.Content>
    </Layout>
  )
}